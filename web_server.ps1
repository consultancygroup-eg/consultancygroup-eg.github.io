param(
    [int]$Port = 8080
)

$appDir = $PSScriptRoot
if (-not $appDir) { $appDir = (Get-Location).Path }

$localIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254*" } | Select-Object -ExpandProperty IPAddress -First 1)
if (-not $localIP) { $localIP = "127.0.0.1" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
    $listener.Prefixes.Add("http://+:$Port/")
} catch {
    # If not running as admin, fallback to local prefixes
}

try {
    $listener.Start()
} catch {
    # Fallback to local only
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Prefixes.Add("http://127.0.0.1:$Port/")
    $listener.Start()
}

Clear-Host
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "  📦 خادم تشغيل تطبيق Consultancy Group على الويب والشبكة المحلية " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  ✅ الخادم يعمل الآن بنجاح ويمكنك فتحه من أي جهاز:" -ForegroundColor Green
Write-Host ""
Write-Host "  🌐 من نفس هذا الجهاز:" -ForegroundColor White
Write-Host "     http://localhost:$Port" -ForegroundColor Yellow
Write-Host ""
Write-Host "  📱 من أي موبايل أو لابتوب آخر على نفس شبكة الواي فاي:" -ForegroundColor White
Write-Host "     http://${localIP}:$Port" -ForegroundColor Cyan
Write-Host ""
Write-Host "  (اضغط Ctrl+C لإيقاف الخادم عند الانتهاء)" -ForegroundColor Gray
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

Start-Process "http://localhost:$Port"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
    ".svg"  = "image/svg+xml"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if (-not $urlPath -or $urlPath -eq "") {
            $urlPath = "index.html"
        }

        $filePath = Join-Path $appDir $urlPath
        $filePath = [System.IO.Path]::GetFullPath($filePath)

        # Basic path traversal protection
        if (-not $filePath.StartsWith($appDir, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $filePath -PathType Leaf)) {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
            continue
        }

        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = $mimeTypes[$ext]
        if (-not $contentType) { $contentType = "application/octet-stream" }

        # Add CORS and UTF-8 headers
        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.ContentType = $contentType
        
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        $response.OutputStream.Close()
    } catch {
        # Continue loop on aborted client connections
    }
}
