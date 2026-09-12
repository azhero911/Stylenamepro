import fs from 'fs';
import path from 'path';

// Unicode transformation maps
const BOLD = (str) => {
  const chars = {
    a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣',
    k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭',
    u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳',
    A: '𝐀', B: '𝐁', C: '𝐂', D: '𝐃', E: '𝐄', F: '𝐅', G: '𝐆', H: '𝐇', I: '𝐈', J: '𝐉',
    K: '𝐊', L: '𝐋', M: '𝐌', N: '𝐍', O: '𝐎', P: '𝐏', Q: '𝐐', R: '𝐑', S: '𝐒', T: '𝐓',
    U: '𝐔', V: '𝐕', W: '𝐖', X: '𝐗', Y: '𝐘', Z: '𝐙',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const GOTHIC = (str) => {
  const chars = {
    a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏',
    k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓', o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙',
    u: '𝖚', v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟',
    A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲', H: '𝕳', I: '𝕴', J: '𝕵',
    K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹', O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿',
    U: '𝖀', V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const FRAKTUR = (str) => {
  const chars = {
    a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧',
    k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱',
    u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷',
    A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: 'ℌ', I: 'ℑ', J: '𝔍',
    K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗',
    U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const SCRIPT = (str) => {
  const chars = {
    a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: 'ℯ', f: '𝒻', g: 'ℊ', h: '𝒽', i: '𝒾', j: '𝒿',
    k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: 'ℴ', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉',
    u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
    A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
    K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
    U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const BOLD_SCRIPT = (str) => {
  const chars = {
    a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳',
    k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽',
    u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
    A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙',
    K: '𝓚', L: '𝓛', M: '𝓜', N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣',
    U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const DOUBLE = (str) => {
  const chars = {
    a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛',
    k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥',
    u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
    A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾', H: 'ℍ', I: '𝕀', J: '𝕁',
    K: '𝕂', L: '𝕃', M: '𝕄', N: 'ℕ', O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋',
    U: '𝕌', V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

const SMALL_CAPS = (str) => {
  const chars = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
    k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ',
    u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
    K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 'ꜱ', T: 'ᴛ',
    U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
  };
  return str.split('').map((c) => chars[c] || c).join('');
};

function getUnicodeLength(text) {
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
  return Array.from(segmenter.segment(text)).length;
}

// 5 Anime universes with 18-20 iconic characters each
const UNIVERSES = [
  {
    id: 'naruto',
    title: 'Naruto & Boruto',
    characters: [
      'Itachi', 'Sasuke', 'Kakashi', 'Minato', 'Naruto', 'Madara', 'Obito',
      'Jiraiya', 'Pain', 'Gaara', 'Hinata', 'Shikamaru', 'Tsunade', 'Hashirama',
      'Tobirama', 'Boruto', 'Kawaki', 'Neji', 'RockLee', 'Deidara',
    ],
    patterns: [
      (c) => `꧁☬${GOTHIC(c)}☬꧂`,
      (c) => `★彡${BOLD_SCRIPT(c)}彡★`,
      (c) => `亗${GOTHIC(c)}亗`,
      (c) => `꧁༒${FRAKTUR(c)}༒꧂`,
      (c) => `★${BOLD(c)}★`,
      (c) => `☬${FRAKTUR(c)}☬`,
      (c) => `彡${BOLD_SCRIPT(c)}彡`,
      (c) => `꧁⚡${GOTHIC(c)}⚡꧂`,
      (c) => `⚡${c}⚡`,
      (c) => `影 ${BOLD(c)} 影`,
    ],
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    characters: [
      'Tanjiro', 'Zenitsu', 'Inosuke', 'Nezuko', 'Rengoku', 'Giyu', 'Shinobu',
      'Muichiro', 'Tengen', 'Sanemi', 'Akaza', 'Kokushibo', 'Muzan', 'Kanao',
      'Mitsuri', 'Obanai', 'Yoriichi', 'Genya', 'Daki', 'Gyutaro',
    ],
    patterns: [
      (c) => `꧁✿${BOLD_SCRIPT(c)}✿꧂`,
      (c) => `★${SCRIPT(c)}★`,
      (c) => `꧁🌸${GOTHIC(c)}🌸꧂`,
      (c) => `彡${BOLD_SCRIPT(c)}彡`,
      (c) => `亗${GOTHIC(c)}亗`,
      (c) => `꧁༒${FRAKTUR(c)}༒꧂`,
      (c) => `꧁⚡${DOUBLE(c)}⚡꧂`,
      (c) => `炎 ${BOLD(c)} 炎`,
      (c) => `刃 ${GOTHIC(c)} 刃`,
      (c) => `鬼 ${SMALL_CAPS(c)} 鬼`,
    ],
  },
  {
    id: 'dragon-ball-solo',
    title: 'Dragon Ball & Solo Leveling',
    characters: [
      'Goku', 'Vegeta', 'Gohan', 'Trunks', 'Broly', 'Piccolo', 'Frieza',
      'Cell', 'MajinBuu', 'Beerus', 'Jinwoo', 'Beru', 'Igris', 'Iron',
      'Bellion', 'ChaHaeIn', 'Thomas', 'Jiren', 'Gogeta', 'Vegito',
    ],
    patterns: [
      (c) => `亗${GOTHIC(c)}亗`,
      (c) => `★彡${BOLD_SCRIPT(c)}彡★`,
      (c) => `꧁⚡${DOUBLE(c)}⚡꧂`,
      (c) => `☬${BOLD(c)}☬`,
      (c) => `★${GOTHIC(c)}★`,
      (c) => `彡${BOLD_SCRIPT(c)}彡`,
      (c) => `꧁☬${FRAKTUR(c)}☬꧂`,
      (c) => `影 ${BOLD(c)} 影`,
      (c) => `⚡ ${GOTHIC(c)} ⚡`,
      (c) => `亗『${SMALL_CAPS(c)}』亗`,
    ],
  },
  {
    id: 'one-piece-bleach',
    title: 'One Piece & Bleach',
    characters: [
      'Luffy', 'Zoro', 'Sanji', 'Shanks', 'Ace', 'Sabo', 'Law',
      'Kid', 'Whitebeard', 'Kaido', 'Katakuri', 'Mihawk', 'Ichigo',
      'Aizen', 'Kisuke', 'Byakuya', 'Kenpachi', 'Toshiro', 'Yamamoto', 'Grimmjow',
    ],
    patterns: [
      (c) => `꧁🏴☠️${BOLD_SCRIPT(c)}🏴☠️꧂`,
      (c) => `★彡${GOTHIC(c)}彡★`,
      (c) => `亗${FRAKTUR(c)}亗`,
      (c) => `꧁⚡${BOLD_SCRIPT(c)}⚡꧂`,
      (c) => `⚔️ ${BOLD(c)} ⚔️`,
      (c) => `꧁༒${GOTHIC(c)}༒꧂`,
      (c) => `★${DOUBLE(c)}★`,
      (c) => `刃 ${BOLD_SCRIPT(c)} 刃`,
      (c) => `彡${GOTHIC(c)}彡`,
      (c) => `々 ${SMALL_CAPS(c)} 々`,
    ],
  },
  {
    id: 'jjk-dark-anime',
    title: 'Jujutsu Kaisen & Dark Anime',
    characters: [
      'Gojo', 'Sukuna', 'Megumi', 'Yuji', 'Toji', 'Geto', 'Nanami',
      'Yuta', 'Maki', 'Mahito', 'Kenjaku', 'Kaneki', 'Touka', 'Levi',
      'Eren', 'Mikasa', 'Armin', 'Light', 'Ryuk', 'Denji',
    ],
    patterns: [
      (c) => `꧁☠${GOTHIC(c)}☠꧂`,
      (c) => `★${GOTHIC(c)}★`,
      (c) => `꧁༒${FRAKTUR(c)}༒꧂`,
      (c) => `亗${GOTHIC(c)}亗`,
      (c) => `☬${FRAKTUR(c)}☬`,
      (c) => `꧁☬${BOLD(c)}☬꧂`,
      (c) => `亗『${GOTHIC(c)}』亗`,
      (c) => `鬼 ${BOLD(c)} 鬼`,
      (c) => `꧁⚡${FRAKTUR(c)}⚡꧂`,
      (c) => `乂 ${SMALL_CAPS(c)} 乂`,
    ],
  },
];

const allNames = [];
let idCounter = 1;

UNIVERSES.forEach((uni) => {
  uni.characters.forEach((char) => {
    uni.patterns.forEach((pattern) => {
      const styledText = pattern(char);
      allNames.push({
        id: `an-${idCounter++}`,
        name: styledText,
        character: char,
        universeId: uni.id,
        universeTitle: uni.title,
        charCount: getUnicodeLength(styledText),
        fitsFF: getUnicodeLength(styledText) <= 12,
        fitsPubg: getUnicodeLength(styledText) <= 16,
      });
    });
  });
});

console.log(`Generated ${allNames.length} stylish anime names!`);

const fileContent = `export interface ReadyAnimeName {
  id: string;
  name: string;
  character: string;
  universeId: string;
  universeTitle: string;
  charCount: number;
  fitsFF: boolean;
  fitsPubg: boolean;
}

export const ANIME_UNIVERSES = [
  { id: 'all', title: 'All Anime (${allNames.length})' },
  { id: 'naruto', title: 'Naruto & Boruto' },
  { id: 'demon-slayer', title: 'Demon Slayer' },
  { id: 'dragon-ball-solo', title: 'Dragon Ball & Solo' },
  { id: 'one-piece-bleach', title: 'One Piece & Bleach' },
  { id: 'jjk-dark-anime', title: 'JJK & Dark Anime' },
];

export const READY_ANIME_NAMES: ReadyAnimeName[] = ${JSON.stringify(allNames, null, 2)};
`;

const outputPath = path.join(process.cwd(), 'src', 'data', 'anime-names-data.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Written to ${outputPath}`);
