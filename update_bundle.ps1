$baseDir = $PSScriptRoot
if (-not $baseDir) { $baseDir = (Get-Location).Path }
$htmlPath = Join-Path $baseDir "index.html"
$cssPath = Join-Path $baseDir "style.css"
$jsPath = Join-Path $baseDir "app.js"

$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)
$css = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
$js = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

$styleTag = "<style>`r`n" + $css + "`r`n</style>"
$scriptTag = "<script>`r`n" + $js + "`r`n</script>"

$bundled = $html.Replace('<link rel="stylesheet" href="style.css">', $styleTag)
$bundled = $bundled.Replace('<script src="app.js"></script>', $scriptTag)

$destWeb = Join-Path $baseDir "ConsultancyGroup_Web.html"
$destApp = Join-Path $baseDir "ConsultancyGroup_App.html"
[System.IO.File]::WriteAllText($destWeb, $bundled, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($destApp, $bundled, [System.Text.Encoding]::UTF8)

Write-Host "Bundle success. Size: $((Get-Item $destWeb).Length) bytes"

$desktop = [Environment]::GetFolderPath('Desktop')

# Clean up old BuffetHygieneDeskApp.zip
$oldZip = Join-Path $desktop "BuffetHygieneDeskApp.zip"
if (Test-Path $oldZip) {
    Remove-Item $oldZip -Force
    Write-Host "Old BuffetHygieneDeskApp.zip removed."
}

# Create official named zip on Desktop (excluding locked app_data cache):
$newZip = Join-Path $desktop "ConsultancyGroup_App.zip"
if (Test-Path $newZip) {
    Remove-Item $newZip -Force
}
$filesToZip = Get-ChildItem -Path $baseDir -Exclude "app_data", "*.zip", ".git", ".claude"
Compress-Archive -Path $filesToZip.FullName -DestinationPath $newZip -Force
Write-Host "New zip created: $newZip"

# Create desktop shortcut pointing directly to the app
$ws = New-Object -ComObject WScript.Shell
$shortcutPath = Join-Path $desktop "Consultancy Group.lnk"
$s = $ws.CreateShortcut($shortcutPath)
$s.TargetPath = $destWeb
$s.Description = "Consultancy Group - Facilities Management"
$s.Save()
Write-Host "Desktop shortcut created: $shortcutPath"
