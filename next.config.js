// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// nextConfig.js
// module.exports = {
//     webpack: (config) => {
//       config.resolve.modules.push(__dirname);
//       return config;
//     },
//   };

  module.exports = {
    // Custom configuration for Next.js
    webpack: (config) => {
      // Add your specific Webpack configurations here if needed
      return config;
    },
    // Define how Next.js handles static assets
    // This config is to ensure that the public folder contents are copied correctly
    // This is the default behavior, but adding it explicitly might resolve any issues
    webpack5: false, // Ensure that webpack 5 optimizations are disabled if causing problems
    assetPrefix: '', // Set an asset prefix if needed (usually empty for most setups)
  };
  
  

  