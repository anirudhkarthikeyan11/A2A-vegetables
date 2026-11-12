// A2A Vegetables: makes repeat visits load almost instantly.
// - Pictures: saved on the device after they load once (not downloaded again, work offline).
// - Code (custom.css?v=…, app.js?v=…): saved per version; a new version number means a fresh download.
// - Google Fonts: saved after the first visit.
// The page itself (index.html) and prices.json always come fresh from the internet.
// If you replace a picture but keep the same file name, change the image version below.
var CACHE = 'a2a-images-v4';
var STATIC = 'a2a-static-v1';
var FONTS = 'a2a-fonts-v1';
var KEEP = [CACHE, STATIC, FONTS];

self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf('a2a-') === 0 && KEEP.indexOf(k) === -1; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function cacheFirst(cacheName, req, opts) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(req, opts).then(function (hit) {
      if (hit) return hit; // saved copy: no download
      return fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      });
    });
  });
}
// serve the saved copy at once, refresh it in the background for next time
function staleWhileRevalidate(cacheName, req) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(req).then(function (hit) {
      var fresh = fetch(req).then(function (res) {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || fresh;
    });
  });
}

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Google Fonts
  if (url.hostname === 'fonts.gstatic.com') { event.respondWith(cacheFirst(FONTS, req)); return; }
  if (url.hostname === 'fonts.googleapis.com') { event.respondWith(staleWhileRevalidate(FONTS, req)); return; }

  // this site's versioned code files (the ?v= number changes with every update)
  if (url.origin === self.location.origin && /\.(css|js)$/i.test(url.pathname) && url.searchParams.has('v')) {
    event.respondWith(cacheFirst(STATIC, req).then(function (res) {
      // drop older saved versions of the same file
      caches.open(STATIC).then(function (cache) {
        cache.keys().then(function (keys) {
          keys.forEach(function (k) { var u = new URL(k.url); if (u.pathname === url.pathname && u.search !== url.search) cache.delete(k); });
        });
      });
      return res;
    }));
    return;
  }

  // pictures
  var isImage = req.destination === 'image' || /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);
  if (isImage) event.respondWith(cacheFirst(CACHE, req, { ignoreSearch: true }));
});
