import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, HelpCircle, ChevronRight, Swords } from 'lucide-react';
import { ReadyMadeAnimeGrid } from './ReadyMadeAnimeGrid';
import { AdSlot } from '@/components/ui/AdSlot';
import { FaqJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Anime Stylish Name Generator — Free Fire, PUBG & Socials',
  description:
    'Generate anime-style stylish names for Free Fire, PUBG, Instagram and TikTok on NameStylePro. Naruto, Itachi, Demon Slayer inspired fonts. Copy in one tap.',
  alternates: {
    canonical: 'https://namestylepro.online/anime-names',
  },
  openGraph: {
    title: 'Anime Stylish Name Generator — NameStylePro',
    description:
      'Generate anime-inspired stylish names for Free Fire, PUBG, Instagram and TikTok. Naruto, Sasuke, Demon Slayer fonts. Free, no login, one-tap copy.',
    url: 'https://namestylepro.online/anime-names',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime Stylish Name Generator — NameStylePro',
    description:
      'Generate anime-inspired stylish names for Free Fire, PUBG, Instagram and TikTok. Naruto, Sasuke, Demon Slayer fonts. Free, no login, one-tap copy.',
  },
};

const ANIME_FAQS = [
  {
    question: 'Can I use anime names in Free Fire?',
    answer:
      'Yes. Free Fire supports Unicode characters in nicknames. Anime-style names generated on NameStylePro work directly in the game. The key thing to watch is the 12-character limit, which the FF counter at the top of the page tracks in real time. Character names like Itachi (6 chars) and Sasuke (6 chars) fit within the limit with room for symbols on either side. Tanjiro (7 chars) and Kakashi (7 chars) also fit with minimal framing. Visit our Free Fire names page (https://namestylepro.online/free-fire-names) for anime styles pre-confirmed at 12 characters or fewer.',
    answerNode: (
      <span>
        Yes. Free Fire supports Unicode characters in nicknames. Anime-style names generated on NameStylePro work directly in the game. The key thing to watch is the 12-character limit, which the FF counter at the top of the page tracks in real time. Character names like Itachi (6 chars) and Sasuke (6 chars) fit within the limit with room for symbols on either side. Tanjiro (7 chars) and Kakashi (7 chars) also fit with minimal framing. Visit our{' '}
        <Link
          href="https://namestylepro.online/free-fire-names"
          className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
        >
          Free Fire names page
        </Link>{' '}
        for anime styles pre-confirmed at 12 characters or fewer.
      </span>
    ),
  },
  {
    question: 'Which anime character names work best in PUBG?',
    answer:
      'PUBG allows 16 characters, giving you more flexibility. Most anime character names work well with light framing. Some of the most popular anime-themed PUBG names in South Asia include Itachi, Sasuke, Tanjiro, Goku, Vegeta, Kaneki, and Eren. Type any of these into NameStylePro, filter to the Anime or Gothic category, and you will get dozens of styled versions instantly.',
  },
  {
    question: 'Do anime font styles work on Instagram?',
    answer:
      'Yes, most of them do. Instagram supports Unicode characters in both usernames and bios. Cursive and script styles like 𝓘𝓽𝓪𝓬𝓱𝓲 work particularly well for anime fan accounts. Heavy gothic styles with lots of symbol frames work better in bios than in usernames, where readability in search results still matters. See our Instagram names page (https://namestylepro.online/instagram-names) for anime-compatible social media styles.',
    answerNode: (
      <span>
        Yes, most of them do. Instagram supports Unicode characters in both usernames and bios. Cursive and script styles like 𝓘𝓽𝓪𝓬𝓱𝓲 work particularly well for anime fan accounts. Heavy gothic styles with lots of symbol frames work better in bios than in usernames, where readability in search results still matters. See our{' '}
        <Link
          href="https://namestylepro.online/instagram-names"
          className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
        >
          Instagram names page
        </Link>{' '}
        for anime-compatible social media styles.
      </span>
    ),
  },
  {
    question: 'Is the anime name generator free?',
    answer:
      'Completely free. NameStylePro requires no registration, no payment, and no app download. Every style, every category, and every copy is free with no limits.',
  },
  {
    question: 'What if my anime character name is too long for Free Fire?',
    answer:
      'Use a shortened version of the name or a character nickname. For example, instead of Tanjiro Kamado (13 characters before styling), just use Tanjiro (7 characters) which leaves room for symbols. The FF: 0/12 counter updates live as you type so you can trim until it fits.',
  },
  {
    question: 'Can my whole squad have matching anime names?',
    answer:
      'Yes. Visit the clan name maker (https://namestylepro.online/clan-names) and generate coordinated styles for your entire team. Many squads choose a theme — all Naruto characters, all Demon Slayer characters, all Dragon Ball characters — and generate matching font styles so the whole team looks unified in the lobby.',
    answerNode: (
      <span>
        Yes. Visit the{' '}
        <Link
          href="https://namestylepro.online/clan-names"
          className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
        >
          clan name maker
        </Link>{' '}
        and generate coordinated styles for your entire team. Many squads choose a theme — all Naruto characters, all Demon Slayer characters, all Dragon Ball characters — and generate matching font styles so the whole team looks unified in the lobby.
      </span>
    ),
  },
];

export default function AnimeNamesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-12">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-semibold">
        <Link href="/" className="hover:text-brand-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold">Anime Names</span>
      </nav>

      {/* SECTION 1 — H1 + SUBTITLE */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-purple-50 text-brand-700 border border-purple-200/80 shadow-xs">
          <Swords className="w-4 h-4 text-brand-600 shrink-0" />
          <span>800+ Anime Stylish Names & Fonts</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Anime Stylish Name Generator — Free Fire, PUBG & Instagram
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Type your name and get hundreds of anime-inspired stylish fonts, Japanese-style symbols, and Naruto, Demon Slayer, and Dragon Ball themed name styles. Perfect for Free Fire, PUBG, BGMI, Instagram, and TikTok. One tap to copy, completely free.
        </p>
      </section>

      {/* READY-MADE ANIME STYLISH NAMES VAULT (800+ NAMES) */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6 text-slate-700 leading-relaxed shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-800">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Curated Ready-to-Copy Vault</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Ready-Made Anime Stylish Names to Copy
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            If you want to skip generating and just pick a ready-made anime name, here are some of the most popular styles from our collection organized by anime theme. All of these can be generated directly by typing the character name into NameStylePro and selecting the matching font style.
          </p>
        </div>

        {/* 1000+ Ready Made Names Interactive Explorer */}
        <ReadyMadeAnimeGrid />
      </section>

      <AdSlot slotType="banner" />

      {/* SECTION 2 — WHAT IS AN ANIME STYLISH NAME */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          What is an Anime Stylish Name?
        </h2>
        <p className="text-base md:text-lg">
          An anime stylish name is a username or nickname designed to look and feel like the character names you see in Japanese anime series. These names combine Unicode font styles — gothic lettering, cursive scripts, and bold decorative fonts — with Japanese-inspired symbols like katana icons, cherry blossom markers, and mystical frames to create a name that looks like it belongs on screen next to a Naruto or Demon Slayer character.
        </p>
        <p className="text-base md:text-lg">
          In gaming communities across Pakistan, India, and Southeast Asia, anime has become one of the biggest influences on how players name themselves. Gamers who love Naruto name themselves after characters like Itachi, Sasuke, and Kakashi. Demon Slayer fans use Tanjiro and Zenitsu as bases. Dragon Ball fans go with Goku, Vegeta, and Gohan. One Piece fans build names around Luffy and Zoro. The anime name style adds a visual layer on top of these references that makes them look genuinely impressive on any gaming profile or social media account.
        </p>
        <p className="text-base md:text-lg">
          NameStylePro&apos;s anime name generator takes your name or your favorite anime character name and runs it through a collection of font styles and symbol frames specifically chosen to match the dark, powerful, and expressive aesthetic that anime fans love.
        </p>
      </section>

      {/* SECTION 3 — HOW TO USE */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            How to Use the Anime Name Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Follow these 4 simple steps to style any anime nickname in seconds:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 1 — Type your name or an anime character name</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              You can enter your own nickname, your favorite character&apos;s name like Itachi or Tanjiro, or any word you want styled. The generator works on any English text input.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 2 — Browse the Anime category</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In the category tabs, tap the Anime tab to filter results to anime-specific fonts and frames. You will see gothic styles inspired by dark anime like Tokyo Ghoul, cursive styles that match romance anime aesthetics, and powerful bold fonts suited for battle-focused series like Naruto and Dragon Ball.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 3 — Check your character limit</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If you are using this name in Free Fire, watch the FF: 0/12 counter at the top. PUBG players should watch PUBG: 0/16. Anime-inspired names with frames and symbols can be longer than expected, so the counter is important.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-600 flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Step 4 — Copy and paste</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tap the Copy button on your chosen style. Then paste it directly into your game profile or social media bio.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ANIME CATEGORIES */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Anime Name Styles by Category
          </h2>
          <p className="text-base md:text-lg">
            Different anime series have very different visual aesthetics, and the best stylish name for a Naruto fan looks completely different from what a Demon Slayer fan would want. Here is how our anime name categories break down.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Naruto Name Style</h3>
          <p className="text-base">
            Naruto is the most searched anime among gamers in South Asia and the most commonly referenced when players look for anime-inspired gaming names. The Naruto aesthetic is bold, powerful, and carries a sense of determination. Names styled after characters like Itachi, Sasuke, Kakashi, and Minato tend to use dark gothic fonts, kunai and flame symbols, and dramatic framing elements.
          </p>
          <p className="text-base">
            Popular Naruto-inspired font styles include bold gothic lettering like 𝖄𝖔𝖚𝖗𝕹𝖆𝖒𝖊, fraktur style like 𝔜𝔬𝔲𝔯𝔑𝔞𝔪𝔢, and dramatic frame combinations using symbols like ⚡, ☬, and ★彡.
          </p>
          <p className="text-base">
            Try typing names like Itachi, Sasuke, Kakashi, or your own nickname into the generator and filtering to the Anime or Gothic category to get the closest match to the Naruto visual style.
          </p>
          <p className="text-base">
            You can find more anime gaming name inspiration in our{' '}
            <Link
              href="https://namestylepro.online/free-fire-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Free Fire names page
            </Link>
            , where the gaming category includes frames that work perfectly for Naruto-style nicknames.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Demon Slayer Name Style</h3>
          <p className="text-base">
            Demon Slayer (Kimetsu no Yaiba) became the highest-grossing anime movie of all time and inspired an entire generation of gamers to name themselves after characters like Tanjiro, Zenitsu, Inosuke, Rengoku, and Muzan. The Demon Slayer aesthetic mixes beauty with darkness — delicate floral patterns alongside brutal combat imagery.
          </p>
          <p className="text-base">
            The best font styles for Demon Slayer-inspired names are cursive and script fonts like 𝒯𝒶𝓃𝒿𝒾𝓇𝑜 combined with cherry blossom and flame symbols. Cursive bold styles like 𝓣𝓪𝓷𝓳𝓲𝓻𝓸 with frames like ꧁✿ and ꧂ work beautifully for this aesthetic.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Dragon Ball Name Style</h3>
          <p className="text-base">
            Dragon Ball characters — Goku, Vegeta, Gohan, Piccolo, Frieza — are some of the most recognizable names in anime history and appear constantly in gaming name generators. The Dragon Ball aesthetic is raw power and energy. Bold, aggressive fonts with star and lightning symbols match this vibe best.
          </p>
          <p className="text-base">
            Bold serif fonts like 𝐆𝐨𝐤𝐮 and double-struck fonts like 𝔾𝕠𝕜𝕦 paired with energy symbols like ⚡, 亗, and ★ capture the Dragon Ball energy well in a game profile name.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">One Piece Name Style</h3>
          <p className="text-base">
            One Piece fans favor names inspired by characters like Luffy, Zoro, Sanji, Nami, and Shanks. The One Piece aesthetic is adventurous and bold with a sense of freedom. Fullwidth fonts and jolly roger-inspired symbol frames match this series well.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Tokyo Ghoul and Dark Anime Name Style</h3>
          <p className="text-base">
            Dark anime fans who follow Tokyo Ghoul, Attack on Titan, and Death Note prefer the most dramatic and ominous name styles available. Deep gothic fonts, skull frames, and blood-red symbolic elements define this aesthetic.
          </p>
          <p className="text-base">
            Gothic and Bold Gothic font styles like 𝕿𝖔𝖐𝖞𝖔 𝕲𝖍𝖔𝖚𝖑 combined with frames using ☠, ✝, and ꧁༒ create the dark anime look that this community gravitates toward.
          </p>
          <p className="text-base">
            Our{' '}
            <Link
              href="https://namestylepro.online/pubg-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              PUBG names page
            </Link>{' '}
            has a dedicated dark/attitude section that overlaps well with dark anime aesthetics for players who want their PUBG name to carry that energy.
          </p>
        </div>
      </section>



      <AdSlot slotType="rectangle" />

      {/* SECTION 6 — USE IN GAMES */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Using Anime Names in Free Fire and PUBG
          </h2>
          <p className="text-base md:text-lg">
            Anime names are extremely popular in the South Asian Free Fire and PUBG community. Characters like Itachi, Sasuke, and Tanjiro appear in thousands of player profiles across both games. Here is how to use anime-style names in each game.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Anime Name in Free Fire</h3>
          <p className="text-base">
            Free Fire allows up to 12 characters in your nickname. This is actually the perfect length for most anime character names — Itachi is 6 characters, Sasuke is 6, Tanjiro is 7, Kakashi is 7. You have room for the name itself plus 4 to 5 characters worth of symbols or framing on either side.
          </p>
          <p className="text-base">
            The best approach for an anime Free Fire name is to use one clean symbol before and after the character name. For example, ⚡Itachi⚡ is 9 characters and works within the Free Fire limit while looking clean and powerful on the kill feed.
          </p>
          <p className="text-base">
            To generate your anime Free Fire name, type the character name into NameStylePro, filter to the Anime or Gothic category, and look for styles that the FF counter shows as 12 or fewer characters. Visit our dedicated{' '}
            <Link
              href="https://namestylepro.online/free-fire-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Free Fire names page
            </Link>{' '}
            for a full collection of anime-style Free Fire names that are pre-confirmed to fit within the 12-character limit.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Anime Name in PUBG and BGMI</h3>
          <p className="text-base">
            PUBG and BGMI allow up to 16 characters, giving you more room to include both the character name and decorative framing. This is where you can use full frames like ꧁☬Itachi☬꧂ which looks complete and dramatic on the PUBG leaderboard.
          </p>
          <p className="text-base">
            For BGMI specifically, anime names are particularly popular in India where both BGMI and anime fandoms overlap heavily. Names referencing Naruto, Dragon Ball, and Demon Slayer appear frequently in high-rank lobbies.
          </p>
          <p className="text-base">
            Visit our{' '}
            <Link
              href="https://namestylepro.online/pubg-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              PUBG and BGMI names page
            </Link>{' '}
            to find anime-style names confirmed to work within the 16-character PUBG limit.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Anime Name for Instagram and TikTok</h3>
          <p className="text-base">
            Anime-themed Instagram and TikTok usernames are hugely popular in the anime fan community. An anime username on Instagram signals your fandom identity immediately and helps you connect with other fans in comment sections and tagged posts.
          </p>
          <p className="text-base">
            Cursive and script font styles work best for anime usernames on Instagram because they look unique and elegant without being difficult to read. Bold gothic styles work well for darker anime aesthetics like Tokyo Ghoul or Attack on Titan themed accounts.
          </p>
          <p className="text-base">
            Our{' '}
            <Link
              href="https://namestylepro.online/instagram-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Instagram and TikTok names page
            </Link>{' '}
            has a curated anime section with styles specifically tested for Instagram username and bio compatibility.
          </p>
        </div>
      </section>

      {/* SECTION 7 — WHY NAMESTYLEPRO FOR ANIME NAMES */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Why Use NameStylePro for Anime Names
        </h2>
        <p className="text-base md:text-lg">
          Most stylish name generators have a generic gaming section with no anime-specific organization. NameStylePro is one of the few tools that specifically categorizes anime name styles separately from general gaming styles, making it much faster to find the look you want without scrolling through hundreds of unrelated results.
        </p>
        <p className="text-base md:text-lg">
          The character limit counters matter especially for anime names because character names like Tanjiro, Zenitsu, and Piccolo are longer than typical gaming nicknames, and adding decorative framing pushes them close to game limits quickly. NameStylePro&apos;s live FF and PUBG counters prevent you from spending 390 diamonds on a Free Fire name change only to find it is one character too long.
        </p>
        <p className="text-base md:text-lg">
          Every anime name you generate on NameStylePro has a WhatsApp share button so you can send your favorite style to your squad before committing to the change. This is especially useful when your whole team wants matching anime-themed names.
        </p>
      </section>

      {/* SECTION 8 — RELATED TOOLS */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xs space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          More Stylish Name Tools on NameStylePro
        </h2>
        <p className="text-base md:text-lg">
          Once you have found your anime name, explore the rest of what NameStylePro offers.
        </p>
        <div className="space-y-3 text-base md:text-lg pt-2">
          <p>
            If you play Free Fire, visit the{' '}
            <Link
              href="https://namestylepro.online/free-fire-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Free Fire name generator
            </Link>{' '}
            for a full collection of FF-specific styles including gaming, attitude, anime, clan, and invisible name categories all pre-filtered to the 12-character limit.
          </p>
          <p>
            For PUBG and BGMI players, the{' '}
            <Link
              href="https://namestylepro.online/pubg-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              PUBG name generator
            </Link>{' '}
            has dark and anime categories that work well for the 16-character PUBG name field.
          </p>
          <p>
            To complete your social media identity, the{' '}
            <Link
              href="https://namestylepro.online/instagram-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              Instagram and TikTok names page
            </Link>{' '}
            has anime-appropriate font styles curated specifically for social platforms where readability still matters alongside style.
          </p>
          <p>
            If you want your team to have a coordinated anime-themed identity, the{' '}
            <Link
              href="https://namestylepro.online/clan-names"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              clan and guild name maker
            </Link>{' '}
            generates matching stylish names for your entire squad.
          </p>
          <p>
            And for the completely unique approach, the{' '}
            <Link
              href="https://namestylepro.online/invisible-name"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              invisible name generator
            </Link>{' '}
            creates a blank nickname using special Unicode characters — the ultimate mystery identity for any anime fan who wants to be the unnamed villain of the lobby.
          </p>
          <p>
            For tips on picking the best name for your play style, the{' '}
            <Link
              href="https://namestylepro.online/blog"
              className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
            >
              NameStylePro blog
            </Link>{' '}
            has guides on Free Fire naming strategy, how to match your name to your gaming identity, and the latest anime name trends in 2026.
          </p>
        </div>
      </section>

      {/* SECTION 9 — FAQ (with FAQPage JSON-LD schema) */}
      <section className="space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-brand-600 shrink-0" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {ANIME_FAQS.map((faq, index) => (
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

        <FaqJsonLd faqs={ANIME_FAQS} />
      </section>

      {/* SECTION 10 — CLOSING PARAGRAPH */}
      <section className="bg-gradient-to-br from-purple-50/70 to-indigo-50/40 rounded-3xl p-6 md:p-10 border border-purple-100 space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Find Your Anime Identity on NameStylePro
        </h2>
        <p className="text-base md:text-lg">
          Whether you are a Naruto fan who wants an Itachi-inspired gothic name for Free Fire, a Demon Slayer fan looking for a Tanjiro cursive style for Instagram, or someone who just loves the visual language of anime and wants it reflected in their gaming identity, the anime name generator on NameStylePro has what you need.
        </p>
        <p className="text-base md:text-lg text-slate-600">
          Type your name or your favorite character&apos;s name above, filter to the Anime category, and find the style that feels right. Copy it in one tap and use it anywhere. Come back whenever a new anime season drops and you want to update your gaming identity to match.
        </p>
      </section>
    </div>
  );
}
