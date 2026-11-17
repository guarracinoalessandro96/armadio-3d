/* Armadio 3D — service worker
   HTML: network-first (prende sempre l'ultima versione quando online, cache offline)
   Asset statici: stale-while-revalidate */
const CACHE = 'armadio3d-v12';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return; // cross-origin (font, meteo) -> rete

  const isDoc = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');
  if (isDoc) {
    // network-first: sempre l'ultima app quando c'è rete
    e.respondWith(
      fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
  } else {
    // asset: dalla cache subito, aggiorno in background
    e.respondWith(
      caches.match(req).then(cached => {
        const net = fetch(req).then(resp => {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          return resp;
        }).catch(() => cached);
        return cached || net;
      })
    );
  }
});
