importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js"
);
console.log("Hello World");
workbox.precaching.prechacheAndRoute(self.__precacheManifest || []);
