const precacheController = new workbox.precaching.PrecacheController();
precacheController.addToCacheList([
  "/static/js/*.js",
  "/static/css/*.css",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/*.js"
]);

self.addEventListener("install", event =>
  event.waitUntil(precacheController.install())
);
self.addEventListener("activate", event =>
  event.waitUntil(precacheController.cleanup())
);
// self.addEventListener('fetch', event =>{
//     const cacheKey = precacheController.getCacheKeyForURL(event.request.url);
//     event.respondWith(caches.matc)
// })

workbox.routing.registerRoute("/", workbox.strategies.networkFirst());

workbox.routing.registerRoute("https://images.egzaw.pl/questions.json");
