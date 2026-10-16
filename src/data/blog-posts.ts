import 'server-only';

import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'roblox-display-names-ideas',
    title: '150+ Aesthetic Roblox Display Names (2026) | NameStylePro',
    description:
      'Explore 150+ aesthetic Roblox display names for 2026. Cute, preppy, Da Hood PvP, and matching duo tags ready to copy in 1 tap + free name change guide!',
    category: 'Roblox',
    readTime: '8 min read',
    publishedAt: '2026-09-18',
    author: {
      name: 'AZDeveloper',
      role: 'Lead Developer & Gaming Culture Editor',
    },
    keywords: [
      'roblox display names ideas',
      'aesthetic roblox display names',
      'roblox display names for boys',
      'roblox display names for girls',
      'funny roblox display names',
      'good roblox display names',
      'roblox name generator',
      'roblox aesthetic names',
      'how to change roblox display name',
    ],
    content: `
# 150+ Best Roblox Display Name Ideas (2026): Aesthetic, Boys, Girls & Duo Tags

Looking for a standout, aesthetic display name for your Roblox avatar? While battle royale gamers fill their tags with chaotic symbols, seasoned Roblox players prioritize clean, dreamy **aesthetics**—from soft lowercase typography to spaced lettering and preppy Y2K tags.

Visit our full **[Roblox Display Names Guide](/blog/roblox-display-names-ideas)** to explore all 150+ 1-tap copyable display tags and our step-by-step tutorial!
    `,
  },
  {
    slug: 'mobile-legends-name-style-mlbb',
    title: 'Mobile Legends Name Style — 500+ MLBB Names | NameStylePro',
    description:
      'Get 500+ cool Mobile Legends name style ideas for 2026. Mythic glory, squad tags, hero mains, symbols & colored name codes. 1-tap copy & paste for MLBB.',
    category: 'Mobile Legends',
    readTime: '9 min read',
    publishedAt: '2026-03-10',
    author: {
      name: 'AZDeveloper',
      role: 'Lead Developer & Esports Editor',
    },
    keywords: [
      'mobile legends name style',
      'mlbb stylish name',
      'cool ml names copy paste',
      'mlbb name style 2026',
      'mobile legends squad names',
      'mlbb colored name code',
      'aesthetic mlbb names',
      'japanese mlbb names',
      'mythic glory names mlbb',
    ],
    content: `
# Mobile Legends Name Style — 500+ Cool MLBB Names with Symbols (2026)

In Mobile Legends: Bang Bang, reaching Mythic Glory is an achievement, and your nickname should reflect that prestige. Explore hundreds of Japanese aesthetic characters, wing symbols, squad prefixes, and colored text codes compatible with MLBB.

Visit our dedicated **[Mobile Legends Name Style Guide](/blog/mobile-legends-name-style-mlbb)** to explore all 500+ copyable names and hex color codes!
    `,
  },
  {
    slug: 'stylish-whatsapp-name-about-2026',
    title: 'WhatsApp Stylish Name & About Status Ideas (2026)',
    description:
      'Transform your WhatsApp profile name and About info with unique font styles, symbols, and status quotes. 1-tap copy and paste instructions.',
    category: 'Social Media',
    readTime: '4 min read',
    publishedAt: '2026-03-07',
    author: {
      name: 'AZDeveloper',
      role: 'Lead Developer & Social Media Strategist',
    },
    keywords: [
      'stylish name for whatsapp',
      'whatsapp about stylish font',
      'whatsapp dp name style',
    ],
    content: `
# Stylish WhatsApp Name & About Status Ideas (2026)

WhatsApp is used by over 2.5 billion people daily. By applying clean Unicode font styling to your WhatsApp display name and About section, your contacts immediately notice your messages in busy group chats!

## How to Set a Stylish WhatsApp Name

1. Generate your name on **[NameStylePro](/)**.
2. Tap the **Copy** button.
3. Open WhatsApp > Settings > Tap your profile photo.
4. Tap the pencil icon next to your Name or About field.
5. Paste your copied text and tap **Save**.
    `,
  },
  {
    slug: 'how-fancy-text-generators-work-unicode',
    title: 'How Fancy Text Generators Work — The Science of Unicode Fonts',
    description:
      'Technical breakdown explaining how Unicode Mathematical Alphanumeric Symbols generate stylish fonts in your browser with zero server tracking.',
    category: 'Technology',
    readTime: '5 min read',
    publishedAt: '2026-03-11',
    author: {
      name: 'AZDeveloper',
      role: 'Lead Developer & Founder',
    },
    keywords: [
      'how does fancy text generator work',
      'unicode font generator technical',
      'mathematical alphanumeric symbols javascript',
    ],
    content: `
# How Fancy Text Generators Work: The Science of Unicode

Many internet users assume fancy text generators install custom font files (like .ttf or .otf) onto their device. In reality, tools like **NameStylePro** utilize a native feature of the **Universal Character Set (Unicode)**.

## Understanding Unicode Character Points

In computer systems, standard English letters reside in the basic ASCII block:
- Letter \`A\` is code point \`U+0041\`
- Letter \`a\` is code point \`U+0061\`

However, Unicode designates special blocks known as **Mathematical Alphanumeric Symbols** (\`U+1D400\` to \`U+1D7FF\`) created for scientific research, mathematics, and linguistics:
- Mathematical Bold \`𝐀\` is \`U+1D400\`
- Mathematical Fraktur/Gothic \`𝔄\` is \`U+1D504\`
- Double-Struck \`𝔸\` is \`U+1D538\`

When you type your name into NameStylePro, pure client-side JavaScript reads each input letter, retrieves its mathematical equivalent from our memory lookup table, and outputs the transformed string instantaneously—with zero server tracking and zero latency!
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

const STATIC_BLOG_SLUGS = new Set([
  'roblox-display-names-ideas',
  'mobile-legends-name-style-mlbb',
]);

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug).filter((slug) => !STATIC_BLOG_SLUGS.has(slug));
}
