const CACHE_NAME = 'mkvtomp4-offline-v2';

const PRECACHE_ROUTES = [
  '/',
  '/es/',
  '/pt/',
  '/de/',
  '/fr/',
  '/ja/',
  '/zh/',
  '/ru/',
  '/favicon.svg',
  '/og-cover.svg',
  '/manifest.webmanifest',
  '/coi-serviceworker.js',
];

const WASM_CDN_ASSETS = [
  'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.js',
  'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(PRECACHE_ROUTES);
      for (const wasmUrl of WASM_CDN_ASSETS) {
        try {
          const res = await fetch(wasmUrl, { mode: 'cors' });
          if (res.ok) {
            await cache.put(wasmUrl, res);
          }
        } catch (_err) {
          // Will be cached on-demand when online
        }
      }
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

function withIsolationHeaders(response) {
  if (!response || response.status === 0 || response.type === 'opaque') {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;

  // Never cache Google Analytics hits
  if (request.url.includes('googletagmanager.com') || request.url.includes('google-analytics.com')) {
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);

      if (cached) {
        // Stale-while-revalidate in background
        event.waitUntil(
          fetch(request)
            .then((networkRes) => {
              if (networkRes && networkRes.status === 200) {
                cache.put(request, networkRes.clone());
              }
            })
            .catch(() => {})
        );
        return withIsolationHeaders(cached);
      }

      try {
        const networkResponse = await fetch(request);
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (request.url.startsWith(self.location.origin) || request.url.includes('unpkg.com/@ffmpeg'))
        ) {
          cache.put(request, networkResponse.clone());
        }
        return withIsolationHeaders(networkResponse);
      } catch (_err) {
        const fallback = await cache.match('/');
        return fallback ? withIsolationHeaders(fallback) : Response.error();
      }
    })()
  );
});
