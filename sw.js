// Service worker for the installed phone/laptop app (PWA).
// Network first: when online the app always gets the newest version from the site, so nothing changes in
// how updates work. The saved copy is only used when there is no internet, so the app still opens.
// The data itself is not handled here: it stays in the browser storage and syncs through Firestore as before.
const CACHE = 'cg-facility-v1';
const CACHE_HOSTS = [self.location.host, 'www.gstatic.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
        .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (!CACHE_HOSTS.includes(url.host)) return; // Firestore and other live traffic go straight to the network
    e.respondWith(
        fetch(req, { cache: 'no-store' })
            .then(res => {
                if (res && (res.ok || res.type === 'opaque')) {
                    const copy = res.clone();
                    caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
                }
                return res;
            })
            .catch(() => caches.match(req, { ignoreSearch: url.host === self.location.host })
                .then(hit => hit || (req.mode === 'navigate' ? caches.match('./') : undefined))
                .then(hit => hit || Response.error()))
    );
});
