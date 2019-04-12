const {
  rewireWorkboxInject,
  defaultInjectConfig
} = require("react-app-rewire-workbox");
const path = require("path");

module.exports = function override(config, env) {
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      exclude: [/\.map$/, /^(?:asset-)manifest.*\.js(?:on)?$/],
      swSrc: path.join(__dirname, "src", "sw.js"),
      swDest: path.join(__dirname, "build", "service-worker.js"),
      importWorkboxFrom: "local"
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};
