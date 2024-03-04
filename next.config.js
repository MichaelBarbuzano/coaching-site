/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Add this configuration
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other routes here if needed
    };
  },
  // Add this configuration to enable static HTML export
  target: 'serverless',
  // Add this configuration for Next.js 11 and later versions
  // If you are using an older version of Next.js, you may not need this line
  experimental: { output: 'export' },
};
