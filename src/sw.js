workbox.setConfig({ debug: true });

console.log("połączony");

if (workbox) {
  console.log("workbox załadowany");
} else {
  console.log("workbox niezaładowany");
}

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: "my-app",
  suffix: "v.0.0.2",
  runtime: "runtime"
});
workbox.loadModule("workbox-strategies");

workbox.routing.registerRoute(
  new RegExp("/static/js/*.js"),
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-cache-js",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("/*.json"),
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-cache-json",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("/static/*.(png|svg|jpg|jpeg)"),
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-cache-images",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("/mainfest.json"),
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-cache-mainfest",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("/favicon.ico"),
  new workbox.strategies.CacheFirst({
    cacheName: "my-app-cache-icon",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.routing.registerRoute(
  new RegExp("https://images.egzaw.pl/questions.json"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "my-app-cache-questions",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
