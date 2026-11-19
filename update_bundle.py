# Linux/cloud twin of update_bundle.ps1 (bundle step only): inlines style.css and app.js into
# ConsultancyGroup_Web.html and ConsultancyGroup_App.html. LF line endings, UTF-8 with BOM,
# byte-identical to what the committed bundles were built with. Run: python3 update_bundle.py
import os
d = os.path.dirname(os.path.abspath(__file__))
def rd(n): return open(os.path.join(d, n), encoding='utf-8-sig', newline='').read()
html, css, js = rd('index.html'), rd('style.css'), rd('app.js')
out = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + css + '\n</style>') \
          .replace('<script src="app.js"></script>', '<script>\n' + js + '\n</script>')
assert 'function initApp' in out or 'initApp' in out
for n in ('ConsultancyGroup_Web.html', 'ConsultancyGroup_App.html'):
    open(os.path.join(d, n), 'w', encoding='utf-8-sig', newline='').write(out)
print('Bundle OK:', len(out.encode('utf-8')), 'bytes')
