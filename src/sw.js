console.log("połączony");

if (workbox) {
  console.log("workbox załadowany");
} else {
  console.log("workbox niezaładowany");
}
workbox.setConfig({ debug: true });
workbox.core.setCacheNameDetails({
  prefix: "my-app",
  suffix: "v.0.0.1"
});

self.addEventListener("install", event => {
  console.log("instalacja sw");
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", event => {
  console.log("aktywacja sw");
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", event => {});

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.CacheFirst());
