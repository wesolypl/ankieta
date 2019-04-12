const workboxBuild = require("workbox-build");

const buildSW = () => {
  return workboxBuild
    .injectManifest({
      swSrc: "src/service/sw-template.js",
      swDest: "build/sw.js",
      globDirectory: "build",
      globPatterns: ["**/*.{js,css,html,png}"]
    })
    .then(({ count, size, warnigs }) => {
      warnigs.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    });
};
buildSW();
