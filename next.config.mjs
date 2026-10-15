/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // ── Previously existing ──────────────────────────────────────────────
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
      // ── Free Fire sub-pages → hub ─────────────────────────────────────────
      {
        source: '/free-fire-names-for-boys',
        destination: '/free-fire-names',
        permanent: true,
      },
      {
        source: '/free-fire-names-for-girls',
        destination: '/free-fire-names',
        permanent: true,
      },
      {
        source: '/free-fire-attitude-names',
        destination: '/free-fire-names',
        permanent: true,
      },
      // ── Gaming consolidation ──────────────────────────────────────────────
      {
        source: '/gaming-name-generator',
        destination: '/pro-gaming-names',
        permanent: true,
      },
      {
        source: '/cool-gaming-names',
        destination: '/pro-gaming-names',
        permanent: true,
      },
      {
        source: '/unique-gaming-names',
        destination: '/pro-gaming-names',
        permanent: true,
      },
      {
        source: '/aesthetic-gaming-names',
        destination: '/aesthetic-usernames',
        permanent: true,
      },
      {
        source: '/short-gaming-names',
        destination: '/3-letter-gaming-names',
        permanent: true,
      },
      // ── Social consolidation ──────────────────────────────────────────────
      {
        source: '/aesthetic-username-generator',
        destination: '/aesthetic-usernames',
        permanent: true,
      },
      {
        source: '/instagram-name-generator',
        destination: '/instagram-names',
        permanent: true,
      },
      // ── Roblox sub-pages → hub ────────────────────────────────────────────
      {
        source: '/roblox-name-generator-for-boys',
        destination: '/roblox-name-generator',
        permanent: true,
      },
      {
        source: '/roblox-name-generator-for-girls',
        destination: '/roblox-name-generator',
        permanent: true,
      },
      {
        source: '/roblox-names-for-boys',
        destination: '/roblox-name-generator',
        permanent: true,
      },
      {
        source: '/roblox-names-for-girls',
        destination: '/roblox-name-generator',
        permanent: true,
      },
      // ── Blog consolidation ────────────────────────────────────────────────
      {
        source: '/blog/free-fire-guild-names',
        destination: '/free-fire-clan-names',
        permanent: true,
      },
      {
        source: '/blog/invisible-name-free-fire-blank-trick',
        destination: '/free-fire-invisible-name',
        permanent: true,
      },
      {
        source: '/blog/best-pubg-stylish-names-copy-paste',
        destination: '/pubg-names',
        permanent: true,
      },
      {
        source: '/blog/bgmi-name-style-indian-player-names',
        destination: '/pubg-names',
        permanent: true,
      },
      {
        source: '/blog/best-instagram-stylish-names-girls-boys',
        destination: '/instagram-names',
        permanent: true,
      },
      {
        source: '/blog/clan-name-ideas-gaming-squads',
        destination: '/free-fire-clan-names',
        permanent: true,
      },
      {
        source: '/blog/how-to-change-free-fire-name-guide',
        destination: '/free-fire-names',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
