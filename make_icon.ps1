Add-Type -AssemblyName System.Drawing

$bmp = New-Object System.Drawing.Bitmap(256, 256)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Clear background transparent
$g.Clear([System.Drawing.Color]::Transparent)

# Outer rounded rectangle
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$r = 40
$d = $r * 2
$x = 16; $y = 16; $w = 224; $h = 224
$path.AddArc($x, $y, $d, $d, 180, 90)
$path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
$path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
$path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
$path.CloseFigure()

$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(17, 24, 39))
$g.FillPath($bgBrush, $path)

# Gold rim
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 175, 55), 8)
$g.DrawPath($goldPen, $path)

# Draw elegant Box / Coffee / Shield symbol
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(212, 175, 55))
$goldLightBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 215, 110))

# Clipboard Body
$g.FillRectangle($goldBrush, 64, 60, 128, 140)
$darkFill = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(31, 41, 55))
$g.FillRectangle($darkFill, 74, 72, 108, 116)

# Lines on paper
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 175, 55), 6)
$g.DrawLine($linePen, 90, 100, 166, 100)
$g.DrawLine($linePen, 90, 124, 166, 124)
$g.DrawLine($linePen, 90, 148, 140, 148)

# Checkmark
$checkPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(16, 185, 129), 8)
$checkPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$checkPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$g.DrawLine($checkPen, 136, 160, 148, 172)
$g.DrawLine($checkPen, 148, 172, 170, 146)

# Top Clip
$g.FillRectangle($goldLightBrush, 104, 46, 48, 26)

$g.Dispose()

$iconPath = "C:\Users\adm.001\.gemini\antigravity\scratch\BuffetHygieneDeskApp\app_icon.ico"
$hIcon = $bmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$fs = New-Object System.IO.FileStream($iconPath, [System.IO.FileMode]::Create)
$icon.Save($fs)
$fs.Close()
$bmp.Dispose()
Write-Host "Success: Icon created"
