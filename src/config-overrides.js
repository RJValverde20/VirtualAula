const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "http": require.resolve("stream-http"),
    // Incluye otros polyfills si es necesario
  };

  return config;
};
