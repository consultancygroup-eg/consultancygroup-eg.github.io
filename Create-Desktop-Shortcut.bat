@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================================
echo   إنشاء اختصار Consultancy Group - إدارة المرافق على سطح المكتب
echo ========================================================

powershell -ExecutionPolicy Bypass -Command "$ws = New-Object -ComObject WScript.Shell; $desktop = [Environment]::GetFolderPath('Desktop'); $s = $ws.CreateShortcut(\"$desktop\Consultancy Group - إدارة المرافق.lnk\"); $s.TargetPath = \"$((Get-Location).Path)\BuffetManager.exe\"; $s.WorkingDirectory = \"$((Get-Location).Path)\"; $s.IconLocation = \"$((Get-Location).Path)\app_icon.ico,0\"; $s.Description = 'Consultancy Group - إدارة المرافق - مدير المرافق'; $s.Save(); Write-Host 'تم إنشاء الاختصار بنجاح على سطح المكتب!'"

pause
