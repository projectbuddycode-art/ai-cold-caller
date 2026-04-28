/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  
  /* Image optimizations */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  /* Headers for performance */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  
  /* Redirects */
  async redirects() {
    return [
      // 🔥 FORCE NON-WWW → WWW (CRITICAL FIX)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'projectbuddy.co.in',
          },
        ],
        destination: 'https://www.projectbuddy.co.in/:path*',
        permanent: true,
      },

      // Existing redirect
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;