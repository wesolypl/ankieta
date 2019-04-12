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
self.addEventListener("fetch", async event => {});

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.loadModule("workbox-strategies");
workbox.routing.registerRoute(
  new RegExp(".png$"),
  new workbox.strategies.CacheFirst()
);
