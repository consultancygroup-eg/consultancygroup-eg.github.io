@echo off
chcp 65001 >nul
title تشغيل برنامج Consultancy Group - البوفيه والنظافة
cd /d "%~dp0"

echo ========================================================
echo   Consultancy Group - إدارة ومصروفات البوفيه والنظافة
echo ========================================================
echo جاري تشغيل التطبيق في نافذة مستقلة...

if exist "BuffetManager.exe" (
    start "" "BuffetManager.exe"
    exit /b
)

set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE_PATH%" set "EDGE_PATH=C:\Program Files\Microsoft\Edge\Application\msedge.exe"

if exist "%EDGE_PATH%" (
    start "" "%EDGE_PATH%" --app="file:///%~dp0index.html" --user-data-dir="%~dp0app_data\edge_profile" --window-size=1420,920
) else (
    start "" "%~dp0index.html"
)

exit /b
