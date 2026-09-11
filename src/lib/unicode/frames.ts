import { ToolCategory } from '@/types';

export interface FrameDefinition {
  id: string;
  prefix: string;
  suffix: string;
  category: ToolCategory;
  name: string;
}

export const FRAMES: FrameDefinition[] = [
  // ==================== GAMING & ESPORTS ====================
  { id: 'g-1', prefix: '꧁༺ ', suffix: ' ༻꧂', category: 'gaming', name: 'Royal Wings' },
  { id: 'g-2', prefix: '亗 ', suffix: ' 亗', category: 'gaming', name: 'Crown Lord' },
  { id: 'g-3', prefix: '⚡ ', suffix: ' ⚡', category: 'gaming', name: 'Electric God' },
  { id: 'g-4', prefix: '〆 ', suffix: ' 〆', category: 'gaming', name: 'Shime Slash' },
  { id: 'g-5', prefix: '×͜× ', suffix: '', category: 'gaming', name: 'Dead Eye' },
  { id: 'g-6', prefix: '☬ ', suffix: ' ☬', category: 'gaming', name: 'Khanda Warrior' },
  { id: 'g-7', prefix: '☠️ ', suffix: ' ☠️', category: 'gaming', name: 'Skull Raider' },
  { id: 'g-8', prefix: '🔥 ', suffix: ' 🔥', category: 'gaming', name: 'Blaze Master' },
  { id: 'g-9', prefix: '『 ', suffix: ' 』', category: 'gaming', name: 'Esports Tag' },
  { id: 'g-10', prefix: '〖 ', suffix: ' 〗', category: 'gaming', name: 'Black Bracket' },
  { id: 'g-11', prefix: '【 ', suffix: ' 】', category: 'gaming', name: 'Lenticular Frame' },
  { id: 'g-12', prefix: '⚔️ ', suffix: ' ⚔️', category: 'gaming', name: 'Dual Swords' },
  { id: 'g-13', prefix: '🎯 ', suffix: ' 🎯', category: 'gaming', name: 'Sniper Crosshair' },
  { id: 'g-14', prefix: '♛ ', suffix: ' ♛', category: 'gaming', name: 'Black Queen' },
  { id: 'g-15', prefix: '♚ ', suffix: ' ♚', category: 'gaming', name: 'Black King' },
  { id: 'g-16', prefix: '༄ᶦᶰᵈ᭄ ', suffix: '࿐', category: 'gaming', name: 'Indo Swirl' },
  { id: 'g-17', prefix: '★彡 ', suffix: ' 彡★', category: 'gaming', name: 'Star Meteor' },
  { id: 'g-18', prefix: '• BadBoy • ', suffix: '', category: 'gaming', name: 'BadBoy Tag' },
  { id: 'g-19', prefix: 'ᴳᵒᵈ ', suffix: '', category: 'gaming', name: 'God Prefix' },
  { id: 'g-20', prefix: 'ᶦᵃᵐ ', suffix: '', category: 'gaming', name: 'I Am Tag' },

  // ==================== FREE FIRE SPECIAL ====================
  { id: 'ff-1', prefix: '꧁ঔৣ☬✞ ', suffix: ' ✞☬ঔৣ꧂', category: 'free-fire', name: 'FF Boss Aura' },
  { id: 'ff-2', prefix: '✿ ', suffix: ' ✿', category: 'free-fire', name: 'FF Blossom' },
  { id: 'ff-3', prefix: '⚡ᴳᵒᵈ ', suffix: '⚡', category: 'free-fire', name: 'FF God Lightning' },
  { id: 'ff-4', prefix: '父 ', suffix: ' 父', category: 'free-fire', name: 'FF Father Kanji' },
  { id: 'ff-5', prefix: '么 ', suffix: ' 么', category: 'free-fire', name: 'FF Clan Tag' },
  { id: 'ff-6', prefix: '࿐ ', suffix: '', category: 'free-fire', name: 'FF Swirl Tail' },
  { id: 'ff-7', prefix: '亗『 ', suffix: ' 』亗', category: 'free-fire', name: 'FF King Tag' },
  { id: 'ff-8', prefix: '░ ', suffix: ' ░', category: 'free-fire', name: 'FF Shaded' },
  { id: 'ff-9', prefix: '✦ ', suffix: ' ✦', category: 'free-fire', name: 'FF Diamond Sparkle' },
  { id: 'ff-10', prefix: '亗 ᴛ ᴏ x ɪ ᴄ 亗 ', suffix: '', category: 'free-fire', name: 'Toxic King' },
  { id: 'ff-11', prefix: '꧁༺ᴷᴵᴺᴳ༻꧂ ', suffix: '', category: 'free-fire', name: 'King Crown' },
  { id: 'ff-12', prefix: 'ᶦᶰᵈ᭄✿ ', suffix: ' ࿐', category: 'free-fire', name: 'Ind Floral Swirl' },
  { id: 'ff-13', prefix: '⪻ ', suffix: ' ⪼', category: 'free-fire', name: 'FF Angle Guard' },
  { id: 'ff-14', prefix: '۝ ', suffix: ' ۝', category: 'free-fire', name: 'FF Arabic End' },
  { id: 'ff-15', prefix: '⫷ ', suffix: ' ⫸', category: 'free-fire', name: 'Triple Angle' },

  // ==================== PUBG / BGMI SPECIAL ====================
  { id: 'pubg-1', prefix: 'OP・', suffix: '', category: 'pubg', name: 'OP Dot' },
  { id: 'pubg-2', prefix: '么 ', suffix: ' 々', category: 'pubg', name: 'PUBG Clan Suffix' },
  { id: 'pubg-3', prefix: 'ɪᴍ ', suffix: '', category: 'pubg', name: 'PUBG Mini I Am' },
  { id: 'pubg-4', prefix: '亗 ', suffix: ' 亗', category: 'pubg', name: 'PUBG Conqueror' },
  { id: 'pubg-5', prefix: '『MR』', suffix: '', category: 'pubg', name: 'PUBG Mister Tag' },
  { id: 'pubg-6', prefix: '『NOOB』', suffix: '', category: 'pubg', name: 'PUBG Noob Irony' },
  { id: 'pubg-7', prefix: '๛ ', suffix: ' ๛', category: 'pubg', name: 'PUBG Thai Whistle' },
  { id: 'pubg-8', prefix: '〆B L O O D〆 ', suffix: '', category: 'pubg', name: 'Bloodline Shime' },
  { id: 'pubg-9', prefix: '• VIP • ', suffix: '', category: 'pubg', name: 'VIP Dot' },
  { id: 'pubg-10', prefix: '꧁༒☬ ', suffix: ' ☬༒꧂', category: 'pubg', name: 'Ghost Warrior' },
  { id: 'pubg-11', prefix: '★彡[ ', suffix: ' ]彡★', category: 'pubg', name: 'Bracket Meteor' },
  { id: 'pubg-12', prefix: '༺LeGeNd༻ ', suffix: '', category: 'pubg', name: 'Legend Tag' },

  // ==================== AESTHETIC & SOFT ====================
  { id: 'a-1', prefix: '°•. ', suffix: ' .•°', category: 'aesthetic', name: 'Dew Drops' },
  { id: 'a-2', prefix: '┊ ', suffix: ' ┊', category: 'aesthetic', name: 'Pillar Calm' },
  { id: 'a-3', prefix: '⋆｡˚ ', suffix: ' ˚｡⋆', category: 'aesthetic', name: 'Starry Sky' },
  { id: 'a-4', prefix: '✧･ﾟ: *', suffix: '*:･ﾟ✧', category: 'aesthetic', name: 'Glitter Wave' },
  { id: 'a-5', prefix: '˗ˏˋ ', suffix: ' ˎˊ˗', category: 'aesthetic', name: 'Accent Rays' },
  { id: 'a-6', prefix: '·:¨༺ ', suffix: ' ༻¨:·', category: 'aesthetic', name: 'Aesthetic Tiara' },
  { id: 'a-7', prefix: 'ੈ✩‧₊˚ ', suffix: ' ˚₊· ͟͟͞͞➳❥', category: 'aesthetic', name: 'Cupid Arrow' },
  { id: 'a-8', prefix: '‧̍̊˙· 𓆝.° ', suffix: ' 𓆟·˙‧̍̊', category: 'aesthetic', name: 'Koi Pond' },
  { id: 'a-9', prefix: '✦.˳·˖✶ ', suffix: ' ✶˖·˳.✦', category: 'aesthetic', name: 'Celestial Dust' },
  { id: 'a-10', prefix: '☁️ ', suffix: ' ☁️', category: 'aesthetic', name: 'Soft Clouds' },
  { id: 'a-11', prefix: '₍ᐢ. ̫.ᐢ₎ ', suffix: '', category: 'aesthetic', name: 'Cute Bunny' },
  { id: 'a-12', prefix: '☕ ', suffix: ' ✨', category: 'aesthetic', name: 'Coffee Spark' },

  // ==================== LOVE & CUTE ====================
  { id: 'l-1', prefix: '❤️ ', suffix: ' ❤️', category: 'love', name: 'Red Heart' },
  { id: 'l-2', prefix: '♡ ', suffix: ' ♡', category: 'love', name: 'White Heart' },
  { id: 'l-3', prefix: '❀ ', suffix: ' ❀', category: 'love', name: 'Cherry Blossom' },
  { id: 'l-4', prefix: 'ᶫᵒᵛᵉᵧₒᵤ ', suffix: ' 💕', category: 'love', name: 'Love You Mini' },
  { id: 'l-5', prefix: '♥(ˆ⌣ˆԅ) ', suffix: '', category: 'love', name: 'Cheek Kiss' },
  { id: 'l-6', prefix: 'ʚĭɞ ', suffix: ' ʚĭɞ', category: 'love', name: 'Little Butterfly' },
  { id: 'l-7', prefix: '💍 ', suffix: ' 💍', category: 'love', name: 'Eternal Ring' },
  { id: 'l-8', prefix: '🧸 ', suffix: ' 🧸', category: 'love', name: 'Teddy Hug' },
  { id: 'l-9', prefix: '💖 ', suffix: ' 💖', category: 'love', name: 'Sparkle Heart' },
  { id: 'l-10', prefix: '🌹 ', suffix: ' 🌹', category: 'love', name: 'Red Rose' },

  // ==================== URDU / PAKISTAN REGIONAL ====================
  { id: 'u-1', prefix: '🇵🇰 ', suffix: ' 🇵🇰', category: 'urdu-pak', name: 'Pakistan Pride' },
  { id: 'u-2', prefix: '★ خـان ★ ', suffix: '', category: 'urdu-pak', name: 'Khan Saab' },
  { id: 'u-3', prefix: 'بـادشـاہ 👑 ', suffix: '', category: 'urdu-pak', name: 'Badshah King' },
  { id: 'u-4', prefix: 'شـیـر 🐅 ', suffix: '', category: 'urdu-pak', name: 'Sher Tiger' },
  { id: 'u-5', prefix: 'نـواب 🎩 ', suffix: '', category: 'urdu-pak', name: 'Nawab Saab' },
  { id: 'u-6', prefix: 'مـلـنـگ 💫 ', suffix: '', category: 'urdu-pak', name: 'Malang Soul' },
  { id: 'u-7', prefix: '🇵🇰亗 ', suffix: ' 亗🇵🇰', category: 'urdu-pak', name: 'Pak Conqueror' },
  { id: 'u-8', prefix: 'چوہدری صاحب 👑 ', suffix: '', category: 'urdu-pak', name: 'Chaudhry Title' },
  { id: 'u-9', prefix: 'سردار ⚡ ', suffix: '', category: 'urdu-pak', name: 'Sardar Leader' },
  { id: 'u-10', prefix: 'جٹ صاحب 🌾 ', suffix: '', category: 'urdu-pak', name: 'Jatt Saab' },

  // ==================== SYMBOLS & BORDERS ====================
  { id: 's-1', prefix: '━╤デ╦︻ ', suffix: '', category: 'symbols', name: 'AWM Sniper Rifle' },
  { id: 's-2', prefix: '︻╦̵̵͇̿̿̿̿╤── ', suffix: '', category: 'symbols', name: 'AK47 Rifle' },
  { id: 's-3', prefix: '⎝⎝ ', suffix: ' ⎠⎠', category: 'symbols', name: 'Curved Brackets' },
  { id: 's-4', prefix: '⫷⫸ ', suffix: ' ⫷⫸', category: 'symbols', name: 'Chevron Crest' },
  { id: 's-5', prefix: '★ ', suffix: ' ★', category: 'symbols', name: 'Classic Star' },
  { id: 's-6', prefix: '۞ ', suffix: ' ۞', category: 'symbols', name: 'Rub el Hizb Star' },
  { id: 's-7', prefix: '༒ ', suffix: ' ༒', category: 'symbols', name: 'Tibetan Cross' },
  { id: 's-8', prefix: '꧁ ', suffix: ' ꧂', category: 'symbols', name: 'Lotus Flourish' },
  { id: 's-9', prefix: '༗ ', suffix: ' ༗', category: 'symbols', name: 'Sacred Knot' },
  { id: 's-10', prefix: '⚚ ', suffix: ' ⚚', category: 'symbols', name: 'Hermes Staff' },
];
