const cacheName = "v0.0.1";
var urlsToCache = ["/", "/static/css/*.css", "/static/js/*.js", "/index.html"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("activate", event => {
  const cacheWhitelist = ["v0.0.1"];
  event.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(
        cacheName.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) {
          return response;
        }
        const responseToCache = response.clone();

        caches.open(cacheName).then(cache => {
          cache.put(event.request, responseToCache);
        });
      });
    })
  );
});
