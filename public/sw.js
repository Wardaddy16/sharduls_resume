const CACHE = 'shardul-portfolio-v1';

const PRECACHE = ['/', '/profile.jpg', '/manifest.json'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Skip non-same-origin and Next.js internal routes
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/_next/')) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) {
        // Serve cache immediately, refresh in background
        fetch(e.request)
          .then((res) => {
            if (res && res.status === 200 && res.type === 'basic') {
              caches.open(CACHE).then((c) => c.put(e.request, res));
            }
          })
          .catch(() => {});
        return cached;
      }
      // Not in cache — fetch, cache, and return
      return fetch(e.request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
