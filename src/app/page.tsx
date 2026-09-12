import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, HelpCircle } from 'lucide-react';
import { HomeGenerator } from '@/components/home/HomeGenerator';
import { AdSlot } from '@/components/ui/AdSlot';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'NameStylePro — Free Stylish Name Generator for Free Fire & PUBG',
  description:
    'Generate 1000+ stylish names for Free Fire, PUBG, Instagram and WhatsApp on NameStylePro. Fancy fonts, Unicode symbols, invisible name trick — free, no login.',
  alternates: {
    canonical: 'https://namestylepro.online/',
  },
};

const FAQ_ITEMS = [
  {
    question: 'Can I use these stylish names in Free Fire?',
    answer:
      'Yes. Free Fire supports the Unicode characters that NameStylePro generates. Copy any style from the Free Fire category or the main generator, open Free Fire, go to your profile, tap the edit icon next to your nickname, paste the new name, and confirm with a Name Change Card or 390 Garena diamonds. Our real-time FF counter ensures the name you copy is within the 12-character limit.',
  },
  {
    question: 'Will stylish names work on Instagram and TikTok?',
    answer:
      'Most of them will. Instagram and TikTok both support Unicode characters in display names and bios. A small number of complex symbol combinations may not display on every device, so if a particular style does not appear correctly, try a simpler one from the Bold, Italic, or Cursive categories, which have the broadest platform support. Visit our Instagram names page (https://namestylepro.online/instagram-names) for styles specifically chosen for social media.',
    answerNode: (
      <span>
        Most of them will. Instagram and TikTok both support Unicode characters in display names and bios. A small number of complex symbol combinations may not display on every device, so if a particular style does not appear correctly, try a simpler one from the Bold, Italic, or Cursive categories, which have the broadest platform support. Visit our{' '}
        <Link href="https://namestylepro.online/instagram-names" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
          Instagram names page
        </Link>{' '}
        for styles specifically chosen for social media.
      </span>
    ),
  },
  {
    question: 'Is NameStylePro completely free?',
    answer:
      'Yes, completely free. There is no subscription, no premium tier, and no hidden charges. Every style, every category, and every copy is free with no limits on usage.',
  },
  {
    question: 'Do I need to download any font or app?',
    answer:
      'No. Everything NameStylePro generates uses standard Unicode characters that are already built into your device. Nothing needs to be installed or configured. The tool works entirely in your browser on any device.',
  },
  {
    question: 'How does the invisible blank name work?',
    answer:
      'The invisible name trick uses special Unicode characters like Hangul Filler (U+3164) that the game accepts as valid characters but renders as completely invisible pixels. This makes your in-game nickname appear blank in the lobby and kill feed. Visit the dedicated invisible name generator (https://namestylepro.online/invisible-name) page for the current working method and step-by-step instructions.',
    answerNode: (
      <span>
        The invisible name trick uses special Unicode characters like Hangul Filler (U+3164) that the game accepts as valid characters but renders as completely invisible pixels. This makes your in-game nickname appear blank in the lobby and kill feed. Visit the dedicated{' '}
        <Link href="https://namestylepro.online/invisible-name" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
          invisible name generator
        </Link>{' '}
        page for the current working method and step-by-step instructions.
      </span>
    ),
  },
  {
    question: 'Can I save my favorite name styles?',
    answer:
      'Yes. Tap the heart icon on any style card to save it to your favorites. Saved names are stored in your browser locally and remain there until you clear them. No login required.',
  },
  {
    question: 'What if a name is too long for my game?',
    answer:
      "Use the live character counters below the input box — FF: 0/12 and PUBG: 0/16. These update as you type and tell you exactly how many characters your current input uses. Shorten your base name until the counter shows a number within the game's limit, then browse the generated styles.",
  },
  {
    question: 'Do you have a clan name generator?',
    answer:
      'Yes. Visit the clan and guild name maker (https://namestylepro.online/clan-names) page for styles built specifically for team names, guild tags, and squad identities in Free Fire and PUBG.',
    answerNode: (
      <span>
        Yes. Visit the{' '}
        <Link href="https://namestylepro.online/clan-names" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
          clan and guild name maker
        </Link>{' '}
        page for styles built specifically for team names, guild tags, and squad identities in Free Fire and PUBG.
      </span>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-12">
      {/* SECTION 1 — H1 + SUBTITLE (above the tool input) */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-purple-50 text-brand-700 border border-purple-200/80 shadow-xs">
          <Zap className="w-4 h-4 text-brand-600 fill-brand-600 shrink-0" />
          <span>1000+ styles generated instantly</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Stylish Name Generator — Free Fire, PUBG, Instagram & More
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Type your name and get 500+ fancy font styles, Unicode symbols, and gaming nicknames instantly. Works in Free Fire, PUBG, BGMI, Instagram, TikTok, WhatsApp, and Facebook. One tap to copy, no login needed, completely free.
        </p>
      </section>

      {/* INTERACTIVE TOOL GENERATOR (NameInput + Ad + CategoryTabs + StyleGrid) */}
      <HomeGenerator />

      {/* Mid-Content Ad Slot */}
      <AdSlot slotType="rectangle" />

      {/* SECTION 2 — HOW TO USE (below tool results) */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            How to Use NameStylePro
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Getting your stylish name takes less than ten seconds. Here is the full process:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 1 — Type your name</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enter your nickname in the input box. NameStylePro starts generating results the moment you type your first letter, so there is no button to press and no loading screen to wait for.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 2 — Check the character counter</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You will see two live counters right below the input — FF: 0/12 and PUBG: 0/16. These update as you type so you always know whether your name fits the game&apos;s limit before you copy it. Free Fire allows a maximum of 12 characters and PUBG allows up to 16.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 3 — Browse by category</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Styles are organized into tabs: All, Gaming, Free Fire, PUBG, Aesthetic, Love, Urdu/Pak, Symbols, Glitch, and more. Tap any tab to jump straight to the style group that matches your vibe.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 4 — Copy with one tap</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you find a style you like, tap the Copy button. The stylish name goes straight to your clipboard and a confirmation message appears so you know it worked.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 md:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              5
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 5 — Paste anywhere</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open your game, Instagram bio, WhatsApp name, or wherever you want to use it, and paste. Done.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 space-y-3 text-sm sm:text-base text-slate-600">
          <p>
            <strong>For Free Fire:</strong> open the game, go to Profile, tap the edit icon next to your nickname, paste the copied name, and confirm. You will need a Name Change Card or 390 Garena diamonds to save the change.
          </p>
          <p>
            <strong>For PUBG and BGMI:</strong> go to your profile, tap your current name, delete it, paste your new stylish name, and confirm.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT IS A STYLISH NAME GENERATOR */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          What is a Stylish Name Generator?
        </h2>
        <p className="text-base md:text-lg">
          A stylish name generator is a free online tool that converts plain, ordinary text into hundreds of fancy Unicode font styles, decorative symbol designs, and eye-catching nicknames in one second. You type your name, the tool maps each letter through dozens of different Unicode font tables simultaneously, and you get a full list of ready-to-copy stylish versions.
        </p>
        <p className="text-base md:text-lg">
          These stylish fonts are not images or downloaded files. They are real Unicode characters supported by almost every platform and operating system in the world, which means the text you generate on NameStylePro works directly in Free Fire, PUBG, Instagram, TikTok, WhatsApp, Facebook, Discord, and most other apps without any extra steps.
        </p>
        <p className="text-base md:text-lg">
          The reason sites like NameStylePro can offer thousands of style variations is that the Unicode standard contains entire parallel alphabets inside its mathematical and symbol blocks. Every letter from A to Z has a bold version, an italic version, a cursive version, a gothic version, a bubble version, and many more, all available as standard characters that any modern device can display.
        </p>
      </section>

      {/* SECTION 4 — GAMING */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Stylish Names for Free Fire, PUBG, BGMI and Mobile Legends
          </h2>
          <p className="text-base md:text-lg">
            In any battle royale game, your name is visible in the lobby, on the kill feed, on leaderboards, and in every screenshot your opponents share. A plain, unformatted name disappears into the crowd. A stylish name with the right font and symbols creates a lasting impression before the match even begins.
          </p>
          <p className="text-base md:text-lg">
            NameStylePro is built with South Asian gamers in mind. Our Gaming and Free Fire style categories are the most popular on the platform, and every style is tested to confirm it copies and pastes correctly into actual games.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Free Fire Stylish Name
          </h3>
          <p className="text-base">
            Free Fire allows up to 12 characters in a nickname and supports the full Unicode character set, which means every style you generate on NameStylePro works directly in the game. The most popular Free Fire name styles in 2026 combine gothic or cursive fonts with symbol frames built from crowns, skulls, swords, and stars.
          </p>
          <p className="text-base">
            Our dedicated{' '}
            <Link
              href="https://namestylepro.online/free-fire-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Free Fire name generator
            </Link>{' '}
            page gives you hundreds of pre-built Free Fire names organized by style — attitude names, pro player names, clan names, royal names, and cute names. If you want names built specifically for the 12-character FF limit, head there and every result is already optimized for the game.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            PUBG and BGMI Stylish Name
          </h3>
          <p className="text-base">
            PUBG Mobile and BGMI give you up to 16 characters, which allows a bit more creative room than Free Fire. The most popular styles among PUBG players use aggressive bold fonts paired with weapon symbols like swords, guns, and shields to project confidence in the lobby.
          </p>
          <p className="text-base">
            Our{' '}
            <Link
              href="https://namestylepro.online/pubg-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              PUBG and BGMI nickname generator
            </Link>{' '}
            page is specifically organized for PUBG and BGMI players with pre-made styles that stay within the 16-character limit. Every name there is ready to copy and paste directly into the game.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Mobile Legends and Other Games
          </h3>
          <p className="text-base">
            The same Unicode styles that work in Free Fire and PUBG also work in Mobile Legends, Call of Duty Mobile, Clash of Clans, Roblox, Among Us, and virtually any game that accepts Unicode characters in usernames. Generate your style here and test it directly in the game&apos;s name field.
          </p>
        </div>
      </section>

      {/* SECTION 5 — SOCIAL MEDIA */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Stylish Names for Instagram, TikTok, WhatsApp and Facebook
          </h2>
          <p className="text-base md:text-lg">
            A large part of the NameStylePro community comes here not for games but for social media. A stylish username or bio font makes your profile look more polished, more personal, and more memorable than the millions of standard plain-text accounts on every platform.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Stylish Name for Instagram
          </h3>
          <p className="text-base">
            Instagram fully supports Unicode characters in both usernames and bios. A well-chosen stylish font on your Instagram username makes you more memorable when someone sees your handle in a comments section or a tagged story.
          </p>
          <p className="text-base">
            The best approach for Instagram is to keep the name readable while adding personality through font choice. A cursive style like 𝓨𝓸𝓾𝓻𝓝𝓪𝓶𝓮 or a clean double-struck style like 𝕐𝕠𝕦𝕣ℕ𝕒𝕞🇪 works better than heavy symbol-loaded names on Instagram because readability matters when someone is trying to search or tag you.
          </p>
          <p className="text-base">
            Our{' '}
            <Link
              href="https://namestylepro.online/instagram-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Instagram and TikTok bio fonts page
            </Link>{' '}
            has styles selected specifically for social media compatibility, where clean aesthetics matter more than gaming intensity.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Stylish Name for WhatsApp
          </h3>
          <p className="text-base">
            WhatsApp display names support Unicode characters and have no character limit on the display name field, giving you the most freedom of any platform. Decorative frames, heart symbols, small caps, and mixed font styles are all popular choices for WhatsApp names. Generate your style on NameStylePro, copy it, open WhatsApp, go to Settings, tap your name, and paste.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            TikTok and Facebook
          </h3>
          <p className="text-base">
            TikTok supports Unicode in display names and bios. Your TikTok display name is the first thing someone reads on your profile, so a unique stylish font immediately separates your account from standard profiles. Facebook display names also support Unicode characters, though it is best to keep them clean and readable to stay within Facebook&apos;s name guidelines.
          </p>
        </div>
      </section>

      {/* SECTION 6 — INVISIBLE NAME */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Invisible Name Generator for Free Fire
        </h2>
        <p className="text-base md:text-lg">
          One of the most searched name tricks in Free Fire is the invisible name, also called the blank name trick. This is a method where players use special Unicode characters with zero visible width to make their in-game nickname appear completely empty in the lobby. No letters, no symbols, just blank space where a name should be.
        </p>
        <p className="text-base md:text-lg">
          This works because certain Unicode characters, specifically Hangul Filler (U+3164) and Braille Blank (U+2800), are recognized as valid characters by the game but render as invisible pixels on screen. Players use this to add mystery to their profile and stand out in the kill feed in a completely different way than stylish fonts do.
        </p>
        <p className="text-base md:text-lg">
          NameStylePro has a dedicated{' '}
          <Link
            href="https://namestylepro.online/invisible-name"
            className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
          >
            invisible blank name generator
          </Link>{' '}
          page where you can generate the exact invisible character strings that work in the current version of Free Fire, along with instructions for how to paste them correctly in the game.
        </p>
        <p className="text-base md:text-lg text-slate-600">
          Note that Garena occasionally patches the invisible name method in updates, so if it stops working after a game update, check the invisible name page for the latest working method.
        </p>
      </section>

      {/* SECTION 7 — FONT STYLES SECTION */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Font Styles and Categories on NameStylePro
        </h2>
        <p className="text-base md:text-lg">
          NameStylePro currently offers 565 different style variations across more than 10 font categories and several decorative frame groups. Here is a look at the most popular ones.
        </p>
        <div className="space-y-3 text-base md:text-lg pt-2">
          <p>
            <strong>Bold and Gothic fonts</strong> like 𝐁𝐨𝐥𝐝 and 𝔊𝔬𝔱𝔥𝔦𝔠 are the top choices in gaming because they look powerful and are still easy to read on small mobile screens.
          </p>
          <p>
            <strong>Cursive and Script fonts</strong> like 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 are the most popular for Instagram bios, couple names, and love-themed profiles. They carry a handwritten elegance that looks genuinely unique compared to standard text.
          </p>
          <p>
            <strong>Double-Struck fonts</strong> like 𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜 have a clean, academic style that has become popular on social media for its distinctive look without being hard to read.
          </p>
          <p>
            <strong>Bubble and Circled fonts</strong> like Ⓑⓤⓑⓑⓛⓔ are eye-catching in short usernames and work particularly well as display names where you want maximum visual impact in fewer characters.
          </p>
          <p>
            <strong>Aesthetic Fullwidth fonts</strong> like Ａｅｓｔｈｅｔｉｃ spread letters apart for a wide, airy look that is very popular in TikTok and Instagram aesthetics.
          </p>
          <p>
            <strong>Small Capitals</strong> like ꜱᴍᴀʟʟ ᴄᴀᴘꜱ give a refined, subtle style that many users prefer for personal branding because the name looks different without being distracting.
          </p>
          <p>
            Our <strong>Urdu and Pakistan category</strong> is built specifically for South Asian users who want styles that work with Roman Urdu names like Zain, Arham, Fatima, and Hira. This is one of the few stylish name tools to include a dedicated regional category for Pakistani and Indian users.
          </p>
          <p>
            For clans and squads, our{' '}
            <Link
              href="https://namestylepro.online/clan-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              clan and guild name maker
            </Link>{' '}
            page generates matching name styles for entire teams so every member has a coordinated look in the game lobby.
          </p>
          <p>
            Anime fans can visit our dedicated{' '}
            <Link
              href="https://namestylepro.online/anime-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              anime name generator
            </Link>{' '}
            for Naruto, Demon Slayer, and Dragon Ball inspired styles.
          </p>
        </div>
      </section>

      {/* SECTION 8 — WHY NAMESTYLEPRO */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Why NameStylePro
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            There are other name generator tools online. Here is what makes NameStylePro worth bookmarking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">Everything updates live</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The moment you type a letter, all 565 styles update on your screen simultaneously. There is no Generate button to press and no delay between typing and seeing results.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">The character counters are built for gamers</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Most name generators show you styles with no indication of whether they fit in your game. NameStylePro shows FF: 0/12 and PUBG: 0/16 counters that update in real time as you type. You never paste a name into Free Fire only to find it is too long.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">WhatsApp sharing is built in</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every style card has a WhatsApp share button. Tap it to send your stylish name directly to a friend, a group chat, or your own saved messages. This makes it easy to share cool names with your squad and get second opinions before committing to a change.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">Save your favorites</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Found a style you love but not ready to use it right now? Tap the heart icon to save it. Your saved names stay in your browser and are there whenever you come back, with no account or login needed.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">No registration, ever</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              NameStylePro requires no account, no email verification, and no personal information of any kind. You open the page, generate names, copy your choice, and leave. That is the entire experience.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
            <h3 className="font-bold text-slate-900 text-lg">Dark mode is included</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Gamers spend hours on screens and dark mode is not optional for most of them. NameStylePro has a dark mode toggle built in, and your preference is saved so the interface loads the way you like it every time.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5 md:col-span-2">
            <h3 className="font-bold text-slate-900 text-lg">The tool is 100% free</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              No paid tier, no premium styles locked behind a subscription, no limit on how many names you generate or copy. Every style, every category, and every feature on NameStylePro is free forever.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — BLOG CTA */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Learn More in the NameStylePro Blog
        </h2>
        <p className="text-base md:text-lg">
          If you want to go deeper, the{' '}
          <Link
            href="https://namestylepro.online/blog"
            className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
          >
            NameStylePro blog
          </Link>{' '}
          covers everything from how to pick the best Free Fire name for your play style to complete guides on invisible names, clan naming strategies, and how Unicode fonts actually work.
        </p>
        <p className="text-base md:text-lg">
          Some of the guides currently available include how to change your Free Fire name step by step, the best PUBG names for boys and girls in 2026, how to make your Instagram bio stand out using fancy fonts, and the complete guide to the invisible name trick for Free Fire updated for the current game version.
        </p>
        <p className="text-base md:text-lg text-slate-600">
          New articles are published regularly, so if you are serious about your gaming identity or social media presence, the blog is worth checking back on.
        </p>
      </section>

      {/* SECTION 10 — FAQ (with FAQPage schema & collapsible accordion) */}
      <section className="space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-brand-600 shrink-0" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-5 open:ring-2 open:ring-brand-200 transition-all cursor-pointer"
            >
              <summary className="flex items-center justify-between font-bold text-slate-900 text-base md:text-lg select-none list-none">
                <span>{faq.question}</span>
                <span className="text-brand-600 text-xl font-black group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.answerNode || faq.answer}
              </div>
            </details>
          ))}
        </div>

        <FaqJsonLd faqs={FAQ_ITEMS} />
      </section>

      {/* SECTION 11 — CLOSING PARAGRAPH */}
      <section className="bg-gradient-to-br from-purple-50/70 to-indigo-50/40 rounded-3xl p-6 md:p-10 border border-purple-100 space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Start Building Your Stylish Identity
        </h2>
        <p className="text-base md:text-lg">
          There is no reason to use the same plain username as everyone else when NameStylePro can generate something genuinely unique in under ten seconds. Type your name above, find the style that fits your personality, and copy it. Whether you are heading into a Free Fire match, setting up your Instagram bio, or changing your WhatsApp display name, your stylish name is ready the moment you need it.
        </p>
        <p className="text-base md:text-lg text-slate-600">
          New font styles and categories are added to NameStylePro regularly. Come back any time to explore fresh designs and keep your online identity looking sharp across every platform you use.
        </p>
      </section>
    </div>
  );
}
