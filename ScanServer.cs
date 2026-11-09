using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

namespace BuffetManager
{
    // Tiny HTTP server bound to 127.0.0.1 only (not reachable from other devices).
    //   GET /status        -> {"ok":true,"scanners":[{"id":"..","name":".."}]} or {"ok":false,...}
    //   GET /scan?id=<id>  -> image/jpeg for one page, or application/pdf when the feeder gave several pages
    class ScanServer
    {
        const string WiaFormatJpeg = "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}";
        const int MaxFeederPages = 60;
        HttpListener listener;
        readonly object scanLock = new object();

        public bool TryStart(int port)
        {
            try
            {
                listener = new HttpListener();
                listener.Prefixes.Add("http://127.0.0.1:" + port + "/");
                listener.Prefixes.Add("http://localhost:" + port + "/");
                listener.Start();
            }
            catch
            {
                listener = null;
                return false;
            }
            Thread t = new Thread(Loop);
            t.IsBackground = true;
            t.Start();
            return true;
        }

        public void Stop()
        {
            try { if (listener != null) listener.Stop(); } catch { }
        }

        void Loop()
        {
            while (listener != null && listener.IsListening)
            {
                HttpListenerContext ctx;
                try { ctx = listener.GetContext(); }
                catch { return; }
                // WIA is a COM API that needs an STA thread.
                Thread worker = new Thread(() => Handle(ctx));
                worker.IsBackground = true;
                worker.SetApartmentState(ApartmentState.STA);
                worker.Start();
            }
        }

        void Handle(HttpListenerContext ctx)
        {
            var res = ctx.Response;
            try
            {
                res.Headers["Access-Control-Allow-Origin"] = "*";
                res.Headers["Access-Control-Allow-Private-Network"] = "true";
                res.Headers["Access-Control-Allow-Methods"] = "GET, OPTIONS";
                res.Headers["Access-Control-Expose-Headers"] = "X-Scan-Pages";
                res.Headers["Cache-Control"] = "no-store";

                if (ctx.Request.HttpMethod == "OPTIONS")
                {
                    res.StatusCode = 204;
                    res.Close();
                    return;
                }

                string path = ctx.Request.Url.AbsolutePath.TrimEnd('/').ToLowerInvariant();
                if (path == "/status")
                {
                    var list = ListScanners();
                    if (list.Count == 0)
                    {
                        WriteJson(res, 200, "{\"ok\":false,\"error\":\"no_scanner\"}");
                        return;
                    }
                    var sb = new StringBuilder("{\"ok\":true,\"scanner\":\"" + Escape(list[0][1]) + "\",\"scanners\":[");
                    for (int i = 0; i < list.Count; i++)
                    {
                        if (i > 0) sb.Append(',');
                        sb.Append("{\"id\":\"" + Escape(list[i][0]) + "\",\"name\":\"" + Escape(list[i][1]) + "\"}");
                    }
                    sb.Append("]}");
                    WriteJson(res, 200, sb.ToString());
                }
                else if (path == "/scan")
                {
                    string id = ctx.Request.QueryString["id"];
                    List<byte[]> pages;
                    string error;
                    lock (scanLock)
                    {
                        pages = ScanPages(id, out error);
                    }
                    if (pages == null || pages.Count == 0)
                    {
                        WriteJson(res, 500, "{\"ok\":false,\"error\":\"" + Escape(error ?? "no_pages") + "\"}");
                        return;
                    }
                    byte[] body;
                    if (pages.Count == 1)
                    {
                        body = pages[0];
                        res.ContentType = "image/jpeg";
                    }
                    else
                    {
                        body = PdfFromJpegs(pages);
                        res.ContentType = "application/pdf";
                    }
                    res.Headers["X-Scan-Pages"] = pages.Count.ToString();
                    res.StatusCode = 200;
                    res.ContentLength64 = body.Length;
                    res.OutputStream.Write(body, 0, body.Length);
                    res.Close();
                }
                else
                {
                    WriteJson(res, 404, "{\"ok\":false,\"error\":\"not_found\"}");
                }
            }
            catch (Exception ex)
            {
                try { WriteJson(res, 500, "{\"ok\":false,\"error\":\"" + Escape(ex.Message) + "\"}"); } catch { }
            }
        }

        static void WriteJson(HttpListenerResponse res, int status, string json)
        {
            byte[] b = Encoding.UTF8.GetBytes(json);
            res.StatusCode = status;
            res.ContentType = "application/json; charset=utf-8";
            res.ContentLength64 = b.Length;
            res.OutputStream.Write(b, 0, b.Length);
            res.Close();
        }

        static string Escape(string s)
        {
            if (s == null) return "";
            return s.Replace("\\", "\\\\").Replace("\"", "\\\"").Replace("\r", " ").Replace("\n", " ");
        }

        static dynamic NewDeviceManager()
        {
            Type t = Type.GetTypeFromProgID("WIA.DeviceManager");
            return t == null ? null : Activator.CreateInstance(t);
        }

        static string PropString(dynamic props, string name)
        {
            try
            {
                foreach (dynamic p in props)
                    if ((string)p.Name == name) return Convert.ToString(p.Value);
            }
            catch { }
            return null;
        }

        // Each entry: [deviceId, displayName]
        static List<string[]> ListScanners()
        {
            var list = new List<string[]>();
            try
            {
                dynamic dm = NewDeviceManager();
                if (dm == null) return list;
                foreach (dynamic info in dm.DeviceInfos)
                {
                    if ((int)info.Type != 1) continue; // 1 = ScannerDeviceType
                    string name = PropString(info.Properties, "Name") ?? "Scanner";
                    list.Add(new[] { (string)info.DeviceID, name });
                }
            }
            catch { }
            return list;
        }

        static dynamic FindScannerInfo(string id)
        {
            dynamic dm = NewDeviceManager();
            if (dm == null) return null;
            dynamic first = null;
            foreach (dynamic info in dm.DeviceInfos)
            {
                if ((int)info.Type != 1) continue;
                if (first == null) first = info;
                if (!string.IsNullOrEmpty(id) && (string)info.DeviceID == id) return info;
            }
            return first;
        }

        static bool TrySetProp(dynamic props, int id, object value)
        {
            try
            {
                foreach (dynamic p in props)
                {
                    if ((int)p.PropertyID == id) { p.Value = value; return true; }
                }
            }
            catch { }
            return false;
        }

        static int GetIntProp(dynamic props, int id, int fallback)
        {
            try
            {
                foreach (dynamic p in props)
                    if ((int)p.PropertyID == id) return Convert.ToInt32(p.Value);
            }
            catch { }
            return fallback;
        }

        static void ApplyImageSettings(dynamic item)
        {
            TrySetProp(item.Properties, 6146, 1);   // Current intent: color
            TrySetProp(item.Properties, 6147, 150); // Horizontal DPI (keeps files small enough to store)
            TrySetProp(item.Properties, 6148, 150); // Vertical DPI
        }

        static byte[] TransferJpeg(dynamic item)
        {
            dynamic image = item.Transfer(WiaFormatJpeg);
            return Recompress((byte[])image.FileData.BinaryData);
        }

        static bool IsPaperEmpty(Exception ex)
        {
            return ex.HResult == unchecked((int)0x80210003); // WIA_ERROR_PAPER_EMPTY
        }

        // Scans every page waiting in the document feeder; if the feeder is empty, scans one page from the glass.
        static List<byte[]> ScanPages(string id, out string error)
        {
            error = null;
            var pages = new List<byte[]>();
            try
            {
                dynamic info = FindScannerInfo(id);
                if (info == null) { error = "no_scanner"; return null; }
                dynamic device = info.Connect();

                // Newer drivers expose a separate "Feeder" item next to the flatbed item.
                dynamic feederItem = null, flatbedItem = null;
                foreach (dynamic it in device.Items)
                {
                    string n = (PropString(it.Properties, "Item Name") ?? PropString(it.Properties, "Name") ?? "").ToLowerInvariant();
                    if (feederItem == null && (n.Contains("feeder") || n.Contains("adf"))) feederItem = it;
                    else if (flatbedItem == null) flatbedItem = it;
                }
                if (flatbedItem == null) flatbedItem = device.Items[1];

                // Older drivers switch to the feeder through device properties.
                bool deviceFeederReady = (GetIntProp(device.Properties, 3087, 0) & 1) != 0; // FEED_READY
                bool useFeeder = feederItem != null || deviceFeederReady;

                if (useFeeder)
                {
                    dynamic target = feederItem ?? flatbedItem;
                    if (feederItem == null)
                    {
                        TrySetProp(device.Properties, 3088, 1); // Document handling: feeder
                        TrySetProp(device.Properties, 3096, 1); // One page per transfer
                    }
                    ApplyImageSettings(target);
                    for (int i = 0; i < MaxFeederPages; i++)
                    {
                        try { pages.Add(TransferJpeg(target)); }
                        catch (Exception ex)
                        {
                            if (IsPaperEmpty(ex)) break;
                            if (pages.Count > 0) break; // keep what we already have
                            throw;
                        }
                    }
                    if (pages.Count > 0) return pages;
                    // Feeder had no paper: fall back to the glass.
                    if (feederItem == null) TrySetProp(device.Properties, 3088, 2);
                }

                ApplyImageSettings(flatbedItem);
                pages.Add(TransferJpeg(flatbedItem));
                return pages;
            }
            catch (Exception ex)
            {
                if (pages.Count > 0) return pages;
                error = IsPaperEmpty(ex) ? "paper_empty" : ex.Message;
                return null;
            }
        }

        static byte[] Recompress(byte[] jpeg)
        {
            try
            {
                using (var ms = new MemoryStream(jpeg))
                using (var img = System.Drawing.Image.FromStream(ms))
                using (var outMs = new MemoryStream())
                {
                    var codec = Array.Find(System.Drawing.Imaging.ImageCodecInfo.GetImageEncoders(), c => c.MimeType == "image/jpeg");
                    var ep = new System.Drawing.Imaging.EncoderParameters(1);
                    ep.Param[0] = new System.Drawing.Imaging.EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 72L);
                    img.Save(outMs, codec, ep);
                    return outMs.Length < jpeg.Length ? outMs.ToArray() : jpeg;
                }
            }
            catch { return jpeg; }
        }

        static string Num(double d)
        {
            return d.ToString("0.##", CultureInfo.InvariantCulture);
        }

        // Builds a simple PDF with one JPEG per A4-width page.
        public static byte[] PdfFromJpegs(List<byte[]> jpegs)
        {
            var ms = new MemoryStream();
            var offsets = new List<long>();
            Action<string> w = s => { byte[] b = Encoding.ASCII.GetBytes(s); ms.Write(b, 0, b.Length); };
            int n = jpegs.Count;
            // Objects: 1 catalog, 2 page tree, then per page: page, image, content
            w("%PDF-1.4\n");
            offsets.Add(ms.Position); w("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
            var kids = new StringBuilder();
            for (int i = 0; i < n; i++) kids.Append((3 + i * 3) + " 0 R ");
            offsets.Add(ms.Position); w("2 0 obj\n<< /Type /Pages /Kids [" + kids + "] /Count " + n + " >>\nendobj\n");
            for (int i = 0; i < n; i++)
            {
                int pw, ph;
                using (var img = System.Drawing.Image.FromStream(new MemoryStream(jpegs[i])))
                {
                    pw = img.Width; ph = img.Height;
                }
                double W = 595.0, H = Math.Round(ph * (595.0 / pw), 2); // fit to A4 width
                int pageObj = 3 + i * 3, imgObj = pageObj + 1, contentObj = pageObj + 2;
                string content = "q " + Num(W) + " 0 0 " + Num(H) + " 0 0 cm /Im0 Do Q";
                offsets.Add(ms.Position);
                w(pageObj + " 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + Num(W) + " " + Num(H) +
                  "] /Resources << /XObject << /Im0 " + imgObj + " 0 R >> >> /Contents " + contentObj + " 0 R >>\nendobj\n");
                offsets.Add(ms.Position);
                w(imgObj + " 0 obj\n<< /Type /XObject /Subtype /Image /Width " + pw + " /Height " + ph +
                  " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + jpegs[i].Length + " >>\nstream\n");
                ms.Write(jpegs[i], 0, jpegs[i].Length);
                w("\nendstream\nendobj\n");
                offsets.Add(ms.Position);
                w(contentObj + " 0 obj\n<< /Length " + content.Length + " >>\nstream\n" + content + "\nendstream\nendobj\n");
            }
            long xref = ms.Position;
            w("xref\n0 " + (offsets.Count + 1) + "\n0000000000 65535 f \n");
            foreach (long o in offsets) w(o.ToString("0000000000") + " 00000 n \n");
            w("trailer\n<< /Size " + (offsets.Count + 1) + " /Root 1 0 R >>\nstartxref\n" + xref + "\n%%EOF\n");
            return ms.ToArray();
        }
    }
}
