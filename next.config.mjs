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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'venture-assets.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
