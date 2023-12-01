// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// nextConfig.js
module.exports = {
    webpack: (config) => {
      config.resolve.modules.push(__dirname);
      return config;
    },
  };
  