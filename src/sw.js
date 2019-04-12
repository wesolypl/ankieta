self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);

workbox.precaching.precacheAndRoute([
  "/static/js/*.js",
  "/static/css/*.css",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/*.js"
]);

workbox.routing.registerRoute("/", workbox.strategies.networkFirst());

workbox.routing.registerRoute("https://images.egzaw.pl/questions.json");
