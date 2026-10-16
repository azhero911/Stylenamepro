/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // ── Invisible Name & Clan Names canonical aliases ─────────────────────
      {
        source: '/free-fire-invisible-name',
        destination: '/invisible-name',
        permanent: true,
      },
      {
        source: '/free-fire-clan-names',
        destination: '/clan-names',
        permanent: true,
      },

      // ── Free Fire sub-pages & blog consolidation → /free-fire-names ───────
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
      {
        source: '/blog/stylish-names-for-free-fire',
        destination: '/free-fire-names',
        permanent: true,
      },
      {
        source: '/blog/how-to-change-free-fire-name-guide',
        destination: '/free-fire-names',
        permanent: true,
      },
      {
        source: '/blog/1000-stylish-names-free-fire-2026',
        destination: '/free-fire-names',
        permanent: true,
      },

      // ── Anime blog → /anime-names (resolve cannibalization) ───────────────
      {
        source: '/blog/free-fire-anime-name-style',
        destination: '/anime-names',
        permanent: true,
      },

      // ── Clan & Invisible blog posts → hubs ────────────────────────────────
      {
        source: '/blog/clan-name-ideas-gaming-squads',
        destination: '/clan-names',
        permanent: true,
      },
      {
        source: '/blog/free-fire-guild-names',
        destination: '/clan-names',
        permanent: true,
      },
      {
        source: '/blog/free-fire-guild-names-cool-symbols',
        destination: '/clan-names',
        permanent: true,
      },
      {
        source: '/blog/invisible-name-free-fire-blank-trick',
        destination: '/invisible-name',
        permanent: true,
      },

      // ── PUBG blog posts → /pubg-names ─────────────────────────────────────
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

      // ── Roblox consolidation → /roblox-name-generator ─────────────────────
      {
        source: '/roblox-names',
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
        source: '/roblox-display-names',
        destination: '/blog/roblox-display-names-ideas',
        permanent: true,
      },

      // ── Gaming consolidation → /gaming-name-generator & /3-letter ─────────
      {
        source: '/cool-gaming-names',
        destination: '/gaming-name-generator',
        permanent: true,
      },
      {
        source: '/unique-gaming-names',
        destination: '/gaming-name-generator',
        permanent: true,
      },
      {
        source: '/short-gaming-names',
        destination: '/3-letter-gaming-names',
        permanent: true,
      },

      // ── Social consolidation → /aesthetic-usernames & /instagram-names ────
      {
        source: '/aesthetic-gaming-names',
        destination: '/aesthetic-usernames',
        permanent: true,
      },
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
      {
        source: '/blog/best-instagram-stylish-names-girls-boys',
        destination: '/instagram-names',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
