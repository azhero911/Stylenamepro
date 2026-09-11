# NameStylePro (namestylepro) 👑⚡

> Free, private, 100% client-side Stylish Name Generator & Unicode Nickname Decorator for Free Fire, PUBG Mobile, BGMI, and social media.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Runs 100% in-browser with zero API costs, zero database costs, and zero server overhead.

---

## 🚀 Key Features

1. **Instant Unicode Transformation (35+ Fonts)**
   - Bold, Italic, Gothic/Fraktur, Script/Cursive, Double-Struck, Monospace, Fullwidth, Bubble, Boxed, Small Caps, Strikethrough, and Flip text.
   - Algorithmic Zalgo glitch diacritics generator (`\u0300`–`\u036F`).
2. **150+ Curated Symbol Frames across 9 Categories**
   - Gaming, Free Fire, PUBG/BGMI, Aesthetic, Love, Urdu/Pakistan regional symbols, Cool, and Emojis.
3. **Dedicated Sub-Tools & Landing Pages**
   - `/free-fire-names`: Free Fire boss nicknames with 12-char limit guard.
   - `/pubg-names`: PUBG & BGMI conqueror tags and sniper symbols with 16-char limit guard.
   - `/instagram-names`: Clean aesthetic cursive and small caps for bios.
   - `/invisible-name`: 3-method working blank name generator (Hangul Filler `\u3164`, Braille Blank `\u2800`, Zero-Width space combos).
   - `/clan-names`: Esports squad & guild name builder.
4. **Mobile-First UX & Typography Guardrails**
   - Clean, high-contrast **Crisp White Theme First** with electric violet accents.
   - Strict minimum font size **>= 16px** on all inputs and body elements to prevent iOS auto-zoom.
   - Dynamic `A-` / `A+` font scaling controls.
   - Grid (`⊞`) and List (`☰`) view toggles.
   - Cross-tab synchronized favorites drawer (saves up to 50 styles in `localStorage`).
   - In-game esports HUD profile simulator card.
   - 1-tap copy with toast notification and direct WhatsApp share link.
5. **SEO & AdSense Foundation**
   - 12 high-intent SEO articles stored in `src/data/blog-posts.ts` guarded with `import 'server-only';`.
   - Programmatic XML sitemap (`/sitemap.xml`) and crawler directives (`/robots.txt`).
   - Rich JSON-LD schemas (`WebApplication`, `FAQPage`, `Article`).
   - CLS-safe `AdSlot` components with layout containment.
   - PWA manifest (`manifest.webmanifest`) and dual-strategy service worker (`sw.js`).

---

## 🛠️ Project Structure

```
namestylepro/
├── public/
│   ├── manifest.webmanifest          # PWA configuration
│   ├── sw.js                         # Dual-strategy service worker
│   ├── og-image.png                  # 1200x630 OG social banner
│   └── icon.svg                      # Vector favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, theme, metadata, header, footer
│   │   ├── page.tsx                  # Flagship generator matching mockup layout
│   │   ├── sitemap.ts                # Programmatic XML sitemap
│   │   ├── robots.ts                 # Clean crawler rules
│   │   ├── free-fire-names/          # Free Fire tool
│   │   ├── pubg-names/               # PUBG tool
│   │   ├── instagram-names/          # Aesthetic social fonts
│   │   ├── invisible-name/           # 3-method blank name generator
│   │   ├── clan-names/               # Clan & guild name generator
│   │   ├── blog/                     # 12 high-intent SEO articles
│   │   ├── about/                    # Creator credentials (E-E-A-T)
│   │   ├── contact/                  # Honeypot-protected contact form
│   │   ├── privacy-policy/           # AdSense & GDPR compliant privacy policy
│   │   ├── terms/                    # Terms of service
│   │   └── dmca/                     # Trademark disclaimers
│   ├── components/
│   │   ├── ui/                       # NameInput, StyleGrid, StyleCard, AdSlot, etc.
│   │   ├── layout/                   # Header, Footer
│   │   └── seo/                      # Structured JSON-LD schemas
│   ├── data/
│   │   └── blog-posts.ts             # 12 SEO articles (server-only)
│   └── lib/
│       ├── unicode/                  # maps.ts, frames.ts, zalgo.ts, invisible.ts, generator.ts
│       └── hooks/                    # useFavorites.ts, useClipboard.ts
```

---

## 🧪 Verification & Testing

```bash
# Run self-contained Unicode and character verification
node scripts/verify-unicode.mjs
node scripts/test-engine.mjs

# Typecheck and Vitest suite
npm run typecheck
npm test
```

---

## 🌐 Deploy to Vercel for $0

1. Push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial launch of NameStylePro"
   gh repo create namestylepro --public --source=. --remote=origin --push
   ```
2. In [Vercel](https://vercel.com), import the repository and deploy.
3. Your site is live globally on Vercel's Edge CDN with zero server cost!
