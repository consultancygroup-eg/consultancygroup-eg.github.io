using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace BuffetManager
{
    static class Program
    {
        // Local-only port used by the app page to ask this launcher to scan from the office printer/scanner.
        public const int ScanPort = 47321;

        [STAThread]
        static void Main()
        {
            string appDir = AppDomain.CurrentDomain.BaseDirectory;
            string htmlPath = Path.Combine(appDir, "ConsultancyGroup_Web.html");
            if (!File.Exists(htmlPath))
            {
                htmlPath = Path.Combine(appDir, "index.html");
            }
            string iconPath = Path.Combine(appDir, "app_icon.ico");

            // Auto-create Desktop Shortcut if not exists
            try
            {
                CreateDesktopShortcut(appDir, iconPath);
            }
            catch { }

            // Find Microsoft Edge executable
            string edgePath = @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe";
            if (!File.Exists(edgePath))
            {
                edgePath = @"C:\Program Files\Microsoft\Edge\Application\msedge.exe";
            }

            if (!File.Exists(edgePath))
            {
                // Fallback to default browser
                Process.Start(new ProcessStartInfo(htmlPath) { UseShellExecute = true });
                return;
            }

            // Dedicated isolated profile inside app directory for complete portability
            string profileDir = Path.Combine(appDir, "app_data", "edge_profile");
            try
            {
                Directory.CreateDirectory(profileDir);
            }
            catch { }

            string args = string.Format(
                "--app=\"file:///{0}\" --user-data-dir=\"{1}\" --window-size=1420,920 --disable-pinch --disable-features=TranslateUI",
                htmlPath.Replace("\\", "/"),
                profileDir
            );

            ProcessStartInfo psi = new ProcessStartInfo();
            psi.FileName = edgePath;
            psi.Arguments = args;
            psi.UseShellExecute = false;

            // Start the scanner helper before the window opens. If another launcher already owns the port, this returns false.
            ScanServer server = new ScanServer();
            bool serving = server.TryStart(ScanPort);

            try
            {
                Process.Start(psi);
            }
            catch (Exception ex)
            {
                MessageBox.Show("تعذر بدء تشغيل البرنامج: " + ex.Message, "خطأ", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            if (!serving) return;

            // Stay alive in the background while the app window is open, then exit.
            Thread.Sleep(15000);
            while (IsAppWindowOpen(profileDir))
            {
                Thread.Sleep(10000);
            }
            server.Stop();
        }

        static bool IsAppWindowOpen(string profileDir)
        {
            // Edge keeps one process per profile; look for any msedge.exe whose command line uses our profile folder.
            try
            {
                using (var searcher = new System.Management.ManagementObjectSearcher(
                    "SELECT CommandLine FROM Win32_Process WHERE Name = 'msedge.exe'"))
                {
                    foreach (System.Management.ManagementObject p in searcher.Get())
                    {
                        object cl = p["CommandLine"];
                        if (cl != null && cl.ToString().IndexOf(profileDir, StringComparison.OrdinalIgnoreCase) >= 0)
                            return true;
                    }
                }
            }
            catch
            {
                return Process.GetProcessesByName("msedge").Length > 0;
            }
            return false;
        }

        static void CreateDesktopShortcut(string appDir, string iconPath)
        {
            string desktopDir = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory);
            string shortcutPath = Path.Combine(desktopDir, "Consultancy Group - إدارة المرافق.lnk");

            if (File.Exists(shortcutPath)) return;

            string exePath = Path.Combine(appDir, "BuffetManager.exe");
            if (!File.Exists(exePath)) return;

            Type shellType = Type.GetTypeFromProgID("WScript.Shell");
            if (shellType != null)
            {
                dynamic shell = Activator.CreateInstance(shellType);
                dynamic shortcut = shell.CreateShortcut(shortcutPath);
                shortcut.TargetPath = exePath;
                shortcut.WorkingDirectory = appDir;
                shortcut.Description = "Consultancy Group - إدارة المرافق - مدير المرافق";
                if (File.Exists(iconPath))
                {
                    shortcut.IconLocation = iconPath + ",0";
                }
                shortcut.Save();
            }
        }
    }

    // Tiny HTTP server bound to 127.0.0.1 only (not reachable from other devices).
    //   GET /status -> {"ok":true,"scanner":"<name>"} or {"ok":false,...}
    //   GET /scan   -> image/jpeg of one page from the first WIA scanner
    class ScanServer
    {
        const string WiaFormatJpeg = "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}";
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
                    string name = FindScannerName();
                    WriteJson(res, 200, name != null
                        ? "{\"ok\":true,\"scanner\":\"" + Escape(name) + "\"}"
                        : "{\"ok\":false,\"error\":\"no_scanner\"}");
                }
                else if (path == "/scan")
                {
                    byte[] jpeg;
                    string error;
                    lock (scanLock)
                    {
                        jpeg = ScanOnePage(out error);
                    }
                    if (jpeg == null)
                    {
                        WriteJson(res, 500, "{\"ok\":false,\"error\":\"" + Escape(error) + "\"}");
                    }
                    else
                    {
                        res.StatusCode = 200;
                        res.ContentType = "image/jpeg";
                        res.ContentLength64 = jpeg.Length;
                        res.OutputStream.Write(jpeg, 0, jpeg.Length);
                        res.Close();
                    }
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

        static dynamic FindScannerInfo()
        {
            Type t = Type.GetTypeFromProgID("WIA.DeviceManager");
            if (t == null) return null;
            dynamic dm = Activator.CreateInstance(t);
            foreach (dynamic info in dm.DeviceInfos)
            {
                if ((int)info.Type == 1) return info; // 1 = ScannerDeviceType
            }
            return null;
        }

        static string FindScannerName()
        {
            try
            {
                dynamic info = FindScannerInfo();
                if (info == null) return null;
                foreach (dynamic p in info.Properties)
                {
                    if ((string)p.Name == "Name") return Convert.ToString(p.Value);
                }
                return "Scanner";
            }
            catch { return null; }
        }

        static void TrySetProp(dynamic props, int id, object value)
        {
            try
            {
                foreach (dynamic p in props)
                {
                    if ((int)p.PropertyID == id) { p.Value = value; return; }
                }
            }
            catch { }
        }

        static byte[] ScanOnePage(out string error)
        {
            error = null;
            try
            {
                dynamic info = FindScannerInfo();
                if (info == null) { error = "no_scanner"; return null; }
                dynamic device = info.Connect();
                dynamic item = device.Items[1];
                TrySetProp(item.Properties, 6146, 1);   // Current intent: color
                TrySetProp(item.Properties, 6147, 200); // Horizontal DPI
                TrySetProp(item.Properties, 6148, 200); // Vertical DPI
                dynamic image = item.Transfer(WiaFormatJpeg);
                return (byte[])image.FileData.BinaryData;
            }
            catch (Exception ex)
            {
                error = ex.Message;
                return null;
            }
        }
    }
}
