# Builds "Facility Manager.zip": the program folder for the work computer, ready to download from
# https://consultancygroup-eg.github.io/Facility%20Manager.zip  (no data inside: app_data is never included)
# Run after changing BuffetManager.exe, assets, the .bat files or the bundled HTML.
import os, zipfile
here = os.path.dirname(os.path.abspath(__file__))
files = ['BuffetManager.exe', 'ConsultancyGroup_Web.html', 'ConsultancyGroup_App.html', 'index.html', 'app.js', 'style.css',
         'app_icon.ico', 'Create-Desktop-Shortcut.bat', 'Start-BuffetManager.bat']
out = os.path.join(here, 'Facility Manager.zip')
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
        z.write(os.path.join(here, f), 'Facility Manager/' + f)
    for root, _, names in os.walk(os.path.join(here, 'assets')):
        for n in sorted(names):
            p = os.path.join(root, n)
            z.write(p, 'Facility Manager/' + os.path.relpath(p, here).replace(os.sep, '/'))
print(out, os.path.getsize(out))
