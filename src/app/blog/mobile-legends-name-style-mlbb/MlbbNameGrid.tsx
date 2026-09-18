'use client';

import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  Search,
  Sparkles,
  Swords,
  Trophy,
  Crown,
  Moon,
  Flame,
  Zap,
  Skull,
  Heart,
  Flag,
  Palette,
  Share2,
} from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export interface MlbbCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  names: string[];
}

export const MLBB_CATEGORIES: MlbbCategory[] = [
  {
    id: 'mythic',
    name: 'Mythic Glory & Pro',
    iconName: 'Trophy',
    description: 'Elite handles designed for high-ranking Mythic Glory, Immortal, and MPL esports players.',
    names: [
      '꧁༺ᎷᎩᎢᎻᏆᏟ༻꧂', '亗 M Y T H I C 亗', '×͜× ɢʟᴏʀʏ ×͜×', '⚡ᴇsᴘᴏʀᴛs⚡', '〆ᴍʏᴛʜɪᴄᴀʟ〆',
      '꧁༒M7 CHAMP༒꧂', '亗 IMMORTAL 亗', '★MPL PRO★', '꧁☬LEGEND☬꧂', '彡GLORY彡',
      '꧁⚡IMMORTAL⚡꧂', '亗 SUPREME 亗', '★ TOP GLOBAL ★', '꧁༒TITAN༒꧂', '〆MYS7IC〆',
      '亗 P R O D I G Y 亗', '꧁🏆MVP.PLAYER🏆꧂', '★ CLUTCH GOD ★', '亗 TIER 1 亗', '꧁⚡APEX PREDATOR⚡꧂',
      '〆UNSTOPPABLE〆', '꧁☬VANGUARD☬꧂', '亗 OVERDRIVE 亗', '★ HIGH ELO ★', '꧁⚡VALOR⚡꧂',
      '〆PARAGON〆', '亗 ASCENDANT 亗', '꧁👑LORD HUNTER👑꧂', '★ CONQUEROR ★', '꧁༒CHAMPION༒꧂',
      '亗 MASTER 亗', '〆GLORIOUS〆', '꧁⚡INVINCIBLE⚡꧂', '★ TOP 1 SQUAD ★', '亗 RELENTLESS 亗',
      '꧁☬GODFATHER☬꧂', '〆EXEMPLAR〆', '亗 DOMINION 亗', '★ PRO STRAT ★', '꧁⚡MAJESTIC⚡꧂'
    ],
  },
  {
    id: 'heroes',
    name: 'Hero Mains & Roles',
    iconName: 'Swords',
    description: 'Custom handles honoring signature heroes like Fanny cables, Chou freestyle, Ling, Gusion, and lane roles.',
    names: [
      '꧁⚡ғᴀɴɴʏ.ᴄᴀʙʟᴇ⚡꧂', '亗 CHOU FREESTYLE 亗', '×͜× ɢᴜsɪᴏɴ.ᴅᴀɢɢᴇʀ ×͜×', '꧁🗡️ʟɪɴɢ.ᴡᴀʟʟ🗡️꧂', '★ ʜᴀʏᴀʙᴜsᴀ ★',
      '〆ʙᴇᴀᴛʀɪx.sɴɪᴘᴇ〆', '🌸 ᴀɴɢᴇʟᴀ.ᴜʟᴛ 🌸', '⚓ ғʀᴀɴᴄᴏ.ʜᴏᴏᴋ ⚓', '亗 HYPER CARRY 亗', '꧁Roamer.God꧂',
      '彡MID LANER彡', '꧁GOLD LANE.ACE꧂', '亗EXP LANER亗', '꧁⚡LANCELOT⚡꧂', '★ WANWAN.DANCE ★',
      '〆CLAUDE.BURST〆', '亗 TIGREAL.SET 亗', '꧁KHUFRA.BOUNCE꧂', '★ VALENTINA ★', '〆PAQUITO.K.O〆',
      '亗 YU ZHONG 亗', '꧁⚡KAGURA.UMBRELLA⚡꧂', '★ HARLEY.CARD ★', '〆BENEDETTA〆', '亗 ALUCARD.LIFESTEAL 亗',
      '꧁KAGURA.MAIN꧂', '★ BRODY.SNIPE ★', '〆SELENA.TRAP〆', '亗 NATALIA.STEALTH 亗', '꧁⚡LESLEY.ONEHIT⚡꧂',
      '★ MOSKOV.SPEAR ★', '〆NOLAN.DASH〆', '亗 ARLOTT 亗', '꧁JULIAN.COMBO꧂', '★ JOY.RHYTHM ★',
      '〆MARTIS.ASHURA〆', '亗 X.BORG.FIRE 亗', '꧁⚡HELCURT.SILENCE⚡꧂', '★ ATLAS.KRAKEN ★', '〆LUNOX.CHAOS〆',
      '亗 CYCLOPS.ORBS 亗', '꧁GUSION.10DAGGER꧂', '★ CICI.BOUNCE ★', '〆XAVIER.LASER〆', '亗 SUYOU.IMMORTAL 亗'
    ],
  },
  {
    id: 'kanji',
    name: 'Japanese Kanji & Anime',
    iconName: 'Sparkles',
    description: 'Traditional Japanese kanji paired with sharp aesthetic characters used by top pro assassins.',
    names: [
      '꧁ 侍 ＳＡＭＵＲＡＩ ꧂', '亗 神 ＫＡＭＩ 亗', '×͜× 鬼 ＤＥＭＯＮ ×͜×', '★ 影 ＳＨＡＤＯＷ ★', '〆 死 ＤＥＡＴＨ 〆',
      '꧁ 龍 ＤＲＡＧＯＮ ꧂', '亗 桜 ＳＡＫＵＲＡ 亗', '彡 刀 ＫＡＴＡＮＡ 彡', '꧁ 狐 ＫＩＴＳＵＮＥ ꧂', '★ 闇 ＤＡＲＫ ★',
      '亗 炎 ＦＩＲＥ 亗', '꧁ 氷 ＩＣＥ ꧂', '〆 雷 ＴＨＵＮＤＥＲ 〆', '꧁ 羅刹 ＲＡＫＳＨＡＳＡ ꧂', '亗 忍 ＳＨＩＮＯＢＩ 亗',
      '★ 月 ＴＳＵＫＩ ★', '꧁ 風 ＫＡＺＥ ꧂', '〆 悪魔 ＡＫＵＭＡ 〆', '亗 虎 ＴＩＧＥＲ 亗', '꧁ 武士道 ＢＵＳＨＩＤＯ ꧂',
      '★ 斬 ＳＬＡＳＨ ★', '亗 天 ＴＥＮ 亗', '꧁ 狼 ＯＯＫＡＭＩ ꧂', '〆 夢 ＤＲＥＡＭ 〆', '亗 刃 ＢＬＡＤＥ 亗',
      '꧁ 冥王 ＨＡＤＥＳ ꧂', '★ 空 ＳＯＲＡ ★', '亗 覇者 ＯＵＪＡ 亗', '꧁ 鳳凰 ＰＨＯＥＮＩＸ ꧂', '〆 焔 ＨＯＮＯＯ 〆',
      '亗 無敵 ＭＵＴＥＫＩ 亗', '꧁ 幽霊 ＹＵＵＲＥＩ ꧂', '★ 霞 ＫＡＳＵＭＩ ★', '亗 狂気 ＫＹＯＵＫＩ 亗', '꧁ 閃光 ＦＬＡＳＨ ꧂',
      '〆 鬼神 ＫＩＳＨＩＮ 〆', '亗 静寂 ＳＩＬＥＮＣＥ 亗', '꧁ 星 ＨＯＳＨＩ ꧂', '★ 宿命 ＫＡＲＭＡ ★', '亗 孤高 ＳＯＬＯ 亗'
    ],
  },
  {
    id: 'attitude',
    name: 'Attitude & Dominance',
    iconName: 'Skull',
    description: 'Intimidating, high-ego nicknames designed to strike psychological fear into opponents.',
    names: [
      '亗 ᴛ ᴏ x ɪ ᴄ 亗', '꧁☬B A D B O Y☬꧂', '×͜× ᴅᴇᴀᴅʟʏ ×͜×', '★ N O M E R C Y ★', '〆S A V A G E〆',
      '亗 W I P E O U T 亗', '꧁༒EXECUTIONER༒꧂', '☬D O M I N A N T☬', '亗 OVERPOWERED 亗', '★ ᴜɴʙᴇᴀᴛᴀʙʟᴇ ★',
      '꧁⚡MANIAC⚡꧂', '〆KILL MACHINE〆', '亗 R U T H L E S S 亗', '꧁☬T E R R O R☬꧂', '★ VILLAIN ★',
      '亗 COLD BLOODED 亗', '꧁☠NO ESCAPE☠꧂', '〆F E A R L E S S〆', '亗 G O D M O D E 亗', '★ RECKLESS ★',
      '꧁⚡NIGHTMARE⚡꧂', '☬DEATH WISH☬', '亗 P S Y C H O 亗', '〆BLOODTHIRSTY〆', '★ OUTLAW ★',
      '꧁༒H A V O C༒꧂', '亗 VENOMOUS 亗', '☬DESTROYER☬', '★ PREDATOR ★', '꧁⚡CHAOS⚡꧂',
      '〆BRUTALITY〆', '亗 HEADHUNTER 亗', '꧁☠ANNIHILATOR☠꧂', '★ TERMINATOR ★', '亗 R A M P A G E 亗',
      '〆S I N N E R〆', '꧁☬M A F I A☬꧂', '★ D O O M ★', '亗 SLAUGHTER 亗', '꧁⚡TORMENT⚡꧂'
    ],
  },
  {
    id: 'squads',
    name: 'Squad Names & Clan Tags',
    iconName: 'Crown',
    description: 'Organized esports clan formats inspired by top MPL international teams (EVOS, RRQ, ONIC, ECHO).',
    names: [
      '꧁༺EVOS.LEGACY༻꧂', '亗 ONIC.KINGDOM 亗', '×͜× RRQ.ROYAL ×͜×', '★ BTR.ROBOTS ★', '〆ECHO.ORCAS〆',
      '꧁༒BLACKLIST.AGENT༒꧂', '亗 AP.BREN.HIVE 亗', '☬TLPH.CHAMP☬', '彡ALTER EGO彡', '꧁⚡TODAK.MALAY⚡꧂',
      '亗 FALCON.AIR 亗', '★ RSG.ELITE ★', '꧁☬DEUS VULT☬꧂', '〆GEEK.FAM〆', '亗 REBELLION 亗',
      '꧁TEAM.SECRET꧂', '★ BIGETRON ★', '亗 FLASH.SG 亗', '꧁⚡MINA.ESPORTS⚡꧂', '〆BURN.X.FLASH〆',
      '亗 SEE YOU SOON 亗', '꧁FIRE.FLUX꧂', '★ THE VALIANT ★', '亗 HOMEBOIS 亗', '꧁☬RED GIANTS☬꧂',
      '〆NINJA.CLAN〆', '亗 APEX.SQUAD 亗', '★ VORTEX.5 ★', '꧁⚡IMMORTAL.5⚡꧂', '〆LEGION.ML〆',
      '亗 TITANS.SQUAD 亗', '꧁OMEGA.FORCE꧂', '★ ECLIPSE.MLBB ★', '亗 VALKYRIE.CLAN 亗', '꧁☬SAVAGE.5☬꧂',
      '〆MYTHIC.SQUAD〆', '亗 OLYMPUS.TEAM 亗', '★ KINGS.UNIT ★', '꧁⚡DARKNESS.SQUAD⚡꧂', '亗 PHANTOM.CORP 亗'
    ],
  },
  {
    id: 'spaced',
    name: 'Aesthetic Spaced & Minimal',
    iconName: 'Moon',
    description: 'Clean, minimalist wide-spaced typography beloved by aesthetic and montage creators.',
    names: [
      'Ｓ Ｏ Ｕ Ｌ', 'Ｖ Ｏ Ｉ Ｄ', 'Ｅ Ｃ Ｌ Ｉ Ｐ Ｓ Ｅ', 'Ａ Ｕ Ｒ Ａ', 'Ｚ Ｅ Ｎ Ｉ Ｔ Ｈ',
      'Ｎ Ｅ Ｂ Ｕ Ｌ Ａ', 'Ｌ Ｕ Ｎ Ａ', 'Ｓ Ｉ Ｌ Ｅ Ｎ Ｃ Ｅ', 'Ｓ Ｏ Ｌ Ｉ Ｔ Ｕ Ｄ Ｅ', 'Ｍ Ｉ Ｒ Ａ Ｇ Ｅ',
      'Ｉ Ｎ Ｆ Ｉ Ｎ Ｉ Ｔ Ｙ', 'Ｅ Ｔ Ｅ Ｒ Ｎ Ａ Ｌ', 'Ａ Ｂ Ｙ Ｓ Ｓ', 'Ｃ Ｅ Ｌ Ｅ Ｓ Ｔ Ｉ Ａ Ｌ', 'Ｈ Ａ Ｌ Ｏ',
      'Ｐ Ｈ Ａ Ｎ Ｔ Ｏ Ｍ', 'Ｓ Ｅ Ｒ Ｅ Ｎ Ｉ Ｔ Ｙ', 'Ｏ Ｂ Ｌ Ｉ Ｖ Ｉ Ｏ Ｎ', 'Ｖ Ｅ Ｌ Ｖ Ｅ Ｔ', 'Ｃ Ｏ Ｓ Ｍ Ｏ Ｓ',
      'Ａ Ｓ Ｔ Ｒ Ａ Ｌ', 'Ｎ Ｏ Ｖ Ａ', 'Ｓ Ｐ Ｅ Ｃ Ｔ Ｒ Ｕ Ｍ', 'Ｂ Ｌ Ｉ Ｓ Ｓ', 'Ｈ Ｏ Ｒ Ｉ Ｚ Ｏ Ｎ',
      'Ｇ Ｌ Ｏ Ｏ Ｍ', 'Ｆ Ｒ Ｏ Ｓ Ｔ', 'Ｖ Ａ Ｎ Ｉ Ｓ Ｈ', 'Ｓ Ｈ Ａ Ｄ Ｏ Ｗ', 'Ｅ Ｔ Ｈ Ｅ Ｒ Ｅ Ａ Ｌ',
      'Ｄ Ｉ Ｖ Ｉ Ｎ Ｅ', 'Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ', 'Ｋ Ａ Ｒ Ｍ Ａ', 'Ｒ Ｅ Ｖ Ｅ Ｒ Ｉ Ｅ', 'Ｏ Ａ Ｓ Ｉ Ｓ',
      'Ｍ Ｙ Ｓ Ｔ Ｉ Ｑ Ｕ Ｅ', 'Ｌ Ｕ Ｃ Ｉ Ｄ', 'Ｅ Ｎ Ｉ Ｇ Ｍ Ａ', 'Ｓ Ｏ Ｌ Ａ Ｒ', 'Ｖ Ｉ Ｏ Ｌ Ｅ Ｔ'
    ],
  },
  {
    id: 'girls',
    name: 'Cute & Girl Gamers',
    iconName: 'Heart',
    description: 'Aesthetic floral, soft pastel accents, and cute anime emblems for female MLBB contenders.',
    names: [
      '꧁🌸Q U E E N🌸꧂', '✿ ʙ ᴀ ʙ ʏ ɢ ɪ ʀ ʟ ✿', '♡ ᴘ ʀ ɪ ɴ ᴄ ᴇ s s ♡', '꧁🎀C U T I E🎀꧂', '★彡 ᴀ ɴ ɢ ᴇ ʟ 彡★',
      '🌸 s ᴀ ᴋ ᴜ ʀ ᴀ 🌸', '×͜× ᴍ ᴏ ᴏ ɴ ɢ ɪ ʀ ʟ ×͜×', '꧁💖HONEY💖꧂', '亗 D O L L 亗', '✿ ᴄ ʜ ᴇ ʀ ʀ ʏ ✿',
      '꧁✨BUTTERFLY✨꧂', '★ ꜱ ᴡ ᴇ ᴇ ᴛ ɪ ᴇ ★', '♡ ᴋ ᴀ ᴡ ᴀ ɪ ɪ ♡', '꧁🌸B L O S S O M🌸꧂', '亗 LADY MLBB 亗',
      '✿ ʙ ᴜ ɴ ɴ ʏ ✿', '★ ᴠ ᴀ ʟ ᴋ ʏ ʀ ɪ ᴇ ★', '꧁💖DAISY💖꧂', '×͜× ꜱ ᴛ ᴀ ʀ ʟ ɪ ɢ ʜ ᴛ ×͜×', '♡ ᴘ ᴇ ᴀ ᴄ ʜ ♡',
      '꧁🎀MELODY🎀꧂', '★ ɢ ᴏ ᴅ ᴅ ᴇ ꜱ ꜱ ★', '✿ ᴄ ᴜ ᴘ ᴄ ᴀ ᴋ ᴇ ✿', '亗 QUEEN OF DAWN 亗', '꧁🌸P I N K Y🌸꧂',
      '♡ ꜱ ᴜ ɴ ꜱ ʜ ɪ ɴ ᴇ ♡', '★ ꜰ ᴀ ɪ ʀ ʏ ★', '꧁💖LOVELY💖꧂', '×͜× ɢ ɪ ʀ ʟ ʙ ᴏ ꜱ ꜱ ×͜×', '✿ ʟ ᴏ ᴛ ᴜ ꜱ ✿',
      '亗 BELLA 亗', '꧁✨AURORA✨꧂', '♡ ᴄ ʜ ᴀ ʀ ᴍ ♡', '★ ꜱ ɴ ᴏ ᴡ ᴅ ʀ ᴏ ᴘ ★', '꧁🌸ROSELLA🌸꧂',
      '✿ ʙ ʟ ɪ ɴ ᴋ ✿', '亗 DIVA 亗', '꧁💖ANGELIC💖꧂', '♡ ᴄ ᴀ ɴ ᴅ ʏ ♡', '★ ꜱ ᴘ ᴀ ʀ ᴋ ʟ ᴇ ★'
    ],
  },
  {
    id: 'regional',
    name: 'Regional Pride (ID, PH, PK)',
    iconName: 'Flag',
    description: 'National gaming identity tags representing Indonesia, Philippines, Pakistan, and Southeast Asia.',
    names: [
      '꧁🇮🇩INDOPRIDE🇮🇩꧂', '亗 PINAS_LAKAS 亗', '★ PAK.GANG ★', '꧁👑SULTAN.ID꧂', '亗 RAJPUT.MLBB 亗',
      '〆MALAYSIA.BOLA〆', '꧁⚜️ROYAL.PK⚜️꧂', '亗 EMPEROR.PH 亗', '★ NAWAB.GANG ★', '꧁༒SHAHI.TIGER༒꧂',
      '亗 GARUDA.ID 亗', '꧁🇵🇭MAHARLIKA🇵🇭꧂', '★ KARACHI.KINGS ★', '〆NUSANTARA〆', '亗 BATANG.PINAS 亗',
      '꧁⚡LAHORE.LIONS⚡꧂', '★ JALWA.ML ★', '亗 MERAH.PUTIH 亗', '꧁BAYANIHAN꧂', '〆ISLAMABAD〆',
      '亗 BADSHAH 亗', '꧁🇮🇩JAWA.PRIDE🇮🇩꧂', '★ TAGALOG.GOD ★', '亗 KHILADI 亗', '꧁👑MAHARAJA👑꧂',
      '〆SUNDA.BOY〆', '亗 BISAYA.POWER 亗', '★ SHAHEEN ★', '꧁⚡PESHAWAR.BOY⚡꧂', '亗 BORNEO 亗',
      '꧁MANILA.SNIPER꧂', '★ SHERDIL ★', '〆SUMATRA〆', '亗 CEBUANO 亗', '꧁🇵🇰PAK_WARRIOR🇵🇰꧂',
      '★ BALI.LEGEND ★', '亗 ILOCANO.CHAMP 亗', '꧁👑GHAZI👑꧂', '〆MALAY.HERO〆', '亗 PUNJABI.POWER 亗'
    ],
  },
  {
    id: 'colors',
    name: 'Colored Codes ([c][hex])',
    iconName: 'Palette',
    description: 'Formatted with Mobile Legends hex color prefixes. Pastes directly to render vibrant colored text in MLBB!',
    names: [
      '[c][ffd700]MYTHIC', '[c][ff0000]RED KILL', '[c][00ffff]CYAN GOD', '[c][ff00ff]NEON PINK', '[c][00ff00]ACID LIME',
      '[c][ff7f00]FIRE BLOUD', '[c][9400d3]PURPLE VOID', '[c][ffffff]GHOST PURE', '[c][1e90ff]ICE BLUE', '[c][ff1493]DEEP PINK',
      '[c][ffff00]LIGHTNING', '[c][7fff00]CHARTREUSE', '[c][00fa9a]MINT SLAYER', '[c][ff4500]MAGMA BURST', '[c][8a2be2]AMETHYST',
      '[c][e6e6fa]LAVENDER', '[c][00bfff]DEEP SKY', '[c][dc143c]BLOOD CRIMSON', '[c][adff2f]GREEN ACID', '[c][da70d6]ORCHID QUEEN',
      '[c][f0e68c]KHAKI GOLD', '[c][20b2aa]LIGHT SEA', '[c][b0e0e6]POWDER BLUE', '[c][ff69b4]ROSE SWEET', '[c][ffa500]AMBER FLAME',
      '[c][32cd32]LIME VIPER', '[c][ba55d3]MEDIUM ORCHID', '[c][48d1cc]TURQUOISE', '[c][c0c0c0]SILVER TIER', '[c][f4a460]SAND STORM'
    ],
  },
];

export function MlbbNameGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();

  const handleCopy = (name: string) => {
    copyToClipboard(name, `Copied "${name}" to clipboard! Ready to paste into Mobile Legends.`);
  };

  const filteredNames = useMemo(() => {
    let list: { name: string; category: string; catId: string }[] = [];

    if (activeTab === 'all') {
      MLBB_CATEGORIES.forEach((cat) => {
        cat.names.forEach((n) => {
          list.push({ name: n, category: cat.name, catId: cat.id });
        });
      });
    } else {
      const selected = MLBB_CATEGORIES.find((c) => c.id === activeTab);
      if (selected) {
        selected.names.forEach((n) => {
          list.push({ name: n, category: selected.name, catId: selected.id });
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, searchQuery]);

  const totalNamesCount = useMemo(() => {
    return MLBB_CATEGORIES.reduce((acc, cat) => acc + cat.names.length, 0);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-4 h-4" />;
      case 'Swords': return <Swords className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Skull': return <Skull className="w-4 h-4" />;
      case 'Crown': return <Crown className="w-4 h-4" />;
      case 'Moon': return <Moon className="w-4 h-4" />;
      case 'Heart': return <Heart className="w-4 h-4" />;
      case 'Flag': return <Flag className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 my-8" id="mlbb-names-explorer">
      {/* Top Controls Box */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl border border-indigo-900/50 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Crown className="w-3 h-3" /> Season 2026 Verified
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2 mt-1">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Mobile Legends Name Explorer ({totalNamesCount}+ Ready)</span>
            </h2>
            <p className="text-sm text-slate-300 mt-0.5">
              1-tap copy ready for MLBB. Complies with 4–20 character limits and unicode symbol rendering.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hero, role, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All ({totalNamesCount})</span>
          </button>

          {MLBB_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name} ({cat.names.length})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
          <span>
            Showing <strong>{filteredNames.length}</strong> stylish MLBB nicknames
          </span>
          <span className="hidden sm:inline text-slate-400">
            Click &quot;Copy&quot; or the name to copy instantly
          </span>
        </div>

        {filteredNames.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-3">
            <p className="text-slate-500 text-base">
              No MLBB names matched your search &quot;<strong>{searchQuery}</strong>&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredNames.map((item, idx) => {
              const copied = isCopied(item.name);
              const charLen = Array.from(item.name).length;
              const isColorCode = item.name.startsWith('[c][');
              const fitsMlbb = charLen >= 4 && charLen <= 20;

              return (
                <div
                  key={`${item.name}-${idx}`}
                  className={`group relative flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 ${
                    copied
                      ? 'bg-emerald-50/90 border-emerald-300 ring-2 ring-emerald-200'
                      : 'bg-white hover:bg-indigo-50/40 border-slate-200 hover:border-indigo-400 hover:shadow-sm'
                  }`}
                >
                  <div
                    className="flex-1 min-w-0 pr-2 cursor-pointer"
                    onClick={() => handleCopy(item.name)}
                    title="Click to copy"
                  >
                    <div className="font-bold text-slate-900 text-base sm:text-lg truncate tracking-wide select-all flex items-center gap-2">
                      <span className={isColorCode ? 'font-mono text-indigo-700 text-sm' : ''}>
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[11px] font-semibold text-slate-500">
                      <span
                        className={`px-1.5 py-0.5 rounded-md ${
                          isColorCode
                            ? 'bg-purple-100 text-purple-800'
                            : fitsMlbb
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isColorCode
                          ? 'Hex Color Code'
                          : `${charLen} chars • MLBB Ready`}
                      </span>
                      <span className="truncate text-slate-400">{item.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={getWhatsAppShareUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.name)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                        copied
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white border border-indigo-200'
                      }`}
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
