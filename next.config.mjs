/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static assets are properly handled
  assetPrefix: '',
  trailingSlash: false,
  // Exclude assets from being treated as pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Configure static file serving
  async rewrites() {
    return [];
  },
};

export default nextConfig;
