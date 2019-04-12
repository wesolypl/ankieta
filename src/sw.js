console.log("połączony");

if (workbox) {
  console.log("workbox załadowany");
} else {
  console.log("workbox niezaładowany");
}
workbox.loadModule("workbox-core");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.setConfig({ debug: true });
workbox.core.setCacheNameDetails({
  prefix: "my-app",
  suffix: "v.0.0.2",
  runtime: "runtime"
});
workbox.loadModule("workbox-strategies");

workbox.routing.registerRoute(
  new RegExp(".css$"),
  workbox.strategies.cacheFirst({
    cacheName: "my-app-cache-css",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp(".(png|svg|jpg|jpeg)$"),
  workbox.strategies.cacheFirst({
    cacheName: "my-app-cache-images",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("https://images.egzaw.pl/questions.json"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "my-app-cache-questions",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
