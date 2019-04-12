console.log("połączony");

if (workbox) {
  console.log("workbox załadowany");
} else {
  console.log("workbox niezaładowany");
}

workbox.loadModule("workbox-strategies");

self.addEventListener("install", event => {
  console.log("instalacja sw");
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", event => {
  console.log("aktywacja sw");
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", event => {
  if (event.request.url.endsWith(".json")) {
    const cacheFirst = new workbox.strategies.CacheFirst();
    event.respondWith(cacheFirst.makeRequest({ request: event.request }));
  }
});

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.CacheFirst());
