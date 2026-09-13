/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blog/1000-stylish-names-free-fire-2026',
        destination: '/blog/stylish-names-for-free-fire',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
