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
      {
        source: '/blog/free-fire-guild-names-cool-symbols',
        destination: '/blog/free-fire-guild-names',
        permanent: true,
      },
      {
        source: '/invisible-name',
        destination: '/free-fire-invisible-name',
        permanent: true,
      },
      {
        source: '/clan-names',
        destination: '/free-fire-clan-names',
        permanent: true,
      },
      {
        source: '/roblox-names',
        destination: '/roblox-name-generator',
        permanent: true,
      },
      {
        source: '/roblox-display-names',
        destination: '/blog/roblox-display-names-ideas',
        permanent: true,
      },
      {
        source: '/roblox-name-generator-for-boys',
        destination: '/roblox-names-for-boys',
        permanent: true,
      },
      {
        source: '/roblox-name-generator-for-girls',
        destination: '/roblox-names-for-girls',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
