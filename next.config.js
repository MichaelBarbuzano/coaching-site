/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Remove or update the 'output' configuration if it's present
  // Remove any other deprecated or invalid configurations

  // Add any other necessary configurations here
  
  // Add the exportPathMap configuration to define the routes
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other routes here if needed
    };
  },
};
