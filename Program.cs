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
}
