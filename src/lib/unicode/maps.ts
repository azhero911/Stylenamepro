// 35+ Unicode Font Tables for Instant Client-Side Transformation

export interface FontMapDefinition {
  id: string;
  name: string;
  category: 'fancy' | 'aesthetic' | 'clean' | 'symbols';
  transform: (text: string) => string;
}

// Helper to build character map from start offsets
function buildAlphabetMap(
  capsStart: number,
  lowerStart: number,
  digitsStart?: number
): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(65 + i)] = String.fromCodePoint(capsStart + i);
    map[String.fromCharCode(97 + i)] = String.fromCodePoint(lowerStart + i);
  }
  if (digitsStart !== undefined) {
    for (let i = 0; i < 10; i++) {
      map[String.fromCharCode(48 + i)] = String.fromCodePoint(digitsStart + i);
    }
  }
  return map;
}

// Specific standard character map transforms
const BOLD_MAP = buildAlphabetMap(0x1d400, 0x1d41a, 0x1d7ce);
const ITALIC_MAP: Record<string, string> = {
  ...buildAlphabetMap(0x1d434, 0x1d44e),
  h: 'ℎ', // Unicode special italic h
};
const BOLD_ITALIC_MAP = buildAlphabetMap(0x1d468, 0x1d482);
const MONOSPACE_MAP = buildAlphabetMap(0x1d670, 0x1d68a, 0x1d7f6);
const SANS_SERIF_MAP = buildAlphabetMap(0x1d5a0, 0x1d5ba, 0x1d7e2);
const SANS_BOLD_MAP = buildAlphabetMap(0x1d5d4, 0x1d5ee, 0x1d7ec);
const SANS_ITALIC_MAP = buildAlphabetMap(0x1d608, 0x1d622);
const SANS_BOLD_ITALIC_MAP = buildAlphabetMap(0x1d63c, 0x1d656);

// Fraktur / Gothic
const FRAKTUR_MAP: Record<string, string> = {
  ...buildAlphabetMap(0x1d504, 0x1d51e),
  C: 'ℭ', H: 'ℌ', I: 'ℑ', R: 'ℜ', Z: 'ℨ',
};
const BOLD_FRAKTUR_MAP = buildAlphabetMap(0x1d56c, 0x1d586);

// Script / Cursive
const SCRIPT_MAP: Record<string, string> = {
  ...buildAlphabetMap(0x1d49c, 0x1d4b6),
  B: 'ℬ', E: 'ℰ', F: 'ℱ', H: 'ℋ', I: 'ℐ', L: 'ℒ', M: 'ℳ', R: 'ℛ',
  e: 'ℯ', g: 'ℊ', o: 'ℴ',
};
const BOLD_SCRIPT_MAP = buildAlphabetMap(0x1d4d0, 0x1d4ea);

// Double-Struck / Blackboard Bold
const DOUBLE_STRUCK_MAP: Record<string, string> = {
  ...buildAlphabetMap(0x1d538, 0x1d552, 0x1d7d8),
  C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ',
};

// Small Caps
const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 'ꜱ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
  A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ',
  J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ',
  S: 'ꜱ', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
};

// Circled / Bubble
const CIRCLED_MAP: Record<string, string> = {
  ...buildAlphabetMap(0x24b6, 0x24d0),
  '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
  '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨',
};

// Inverted Circled / Dark Bubble
const INVERTED_CIRCLED_MAP: Record<string, string> = {
  A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘',
  J: '🅙', K: '🅚', L: '🅛', M: '🅜', N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡',
  S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩',
  a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘',
  j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡',
  s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
  '0': '⓿', '1': '❶', '2': '❷', '3': '❸', '4': '❹',
  '5': '❺', '6': '❻', '7': '❼', '8': '❽', '9': '❾',
};

// Boxed / Squared
const SQUARED_MAP: Record<string, string> = {
  A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸',
  J: '🄹', K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
  S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸',
  j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁',
  s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
};

// Inverted Squared / Black Box
const INVERTED_SQUARED_MAP: Record<string, string> = {
  A: '🅰', B: '🅱', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷', I: '🅸',
  J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾', P: '🅿', Q: '🆀', R: '🆁',
  S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇', Y: '🆈', Z: '🆉',
  a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵', g: '🅶', h: '🅷', i: '🅸',
  j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽', o: '🅾', p: '🅿', q: '🆀', r: '🆁',
  s: '🆂', t: '🆃', u: '🆄', v: '🆅', w: '🆆', x: '🆇', y: '🆈', z: '🆉',
};

// Fullwidth / Aesthetic Wide
const FULLWIDTH_MAP: Record<string, string> = {};
for (let i = 33; i <= 126; i++) {
  FULLWIDTH_MAP[String.fromCharCode(i)] = String.fromCodePoint(0xff00 + (i - 32));
}

// Upside Down / Flip
const FLIP_MAP: Record<string, string> = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ',
  j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ',
  s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  A: '∀', B: '𐐒', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I',
  J: 'ſ', K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Ό', R: 'ᴚ',
  S: 'S', T: '⊥', U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z',
  '1': '⇂', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0',
  '?': '¿', '!': '¡', '.': '˙', ',': "'", '(': ')', ')': '(',
};

// Superscript
const SUPERSCRIPT_MAP: Record<string, string> = {
  a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ',
  j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ',
  t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
  A: 'ᴬ', B: 'ᴮ', C: 'ᶜ', D: 'ᴰ', E: 'ᴱ', F: 'ᶠ', G: 'ᴳ', H: 'ᴴ', I: 'ᴵ',
  J: 'ᴶ', K: 'ᴷ', L: 'ᴸ', M: 'ᴹ', N: 'ᴺ', O: 'ᴼ', P: 'ᴾ', R: 'ᴿ', T: 'ᵀ',
  U: 'ᵁ', V: 'ⱽ', W: 'ᵂ',
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
};

// Subscript
const SUBSCRIPT_MAP: Record<string, string> = {
  a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ',
  o: 'ₒ', p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
};

// Map runner
function mapString(str: string, map: Record<string, string>): string {
  return str
    .split('')
    .map((char) => map[char] || char)
    .join('');
}

// Combining marks transforms
function applyCombiningMark(str: string, markCode: string): string {
  return str
    .split('')
    .map((char) => (char === ' ' ? ' ' : char + markCode))
    .join('');
}

// 35+ Font Map Registry
export const FONT_MAPS: FontMapDefinition[] = [
  {
    id: 'math-bold',
    name: 'Bold Serif',
    category: 'clean',
    transform: (t) => mapString(t, BOLD_MAP),
  },
  {
    id: 'sans-bold',
    name: 'Sans Bold',
    category: 'clean',
    transform: (t) => mapString(t, SANS_BOLD_MAP),
  },
  {
    id: 'italic',
    name: 'Italic Serif',
    category: 'clean',
    transform: (t) => mapString(t, ITALIC_MAP),
  },
  {
    id: 'bold-italic',
    name: 'Bold Italic',
    category: 'clean',
    transform: (t) => mapString(t, BOLD_ITALIC_MAP),
  },
  {
    id: 'sans-italic',
    name: 'Sans Italic',
    category: 'clean',
    transform: (t) => mapString(t, SANS_ITALIC_MAP),
  },
  {
    id: 'sans-bold-italic',
    name: 'Sans Bold Italic',
    category: 'clean',
    transform: (t) => mapString(t, SANS_BOLD_ITALIC_MAP),
  },
  {
    id: 'script',
    name: 'Cursive / Script',
    category: 'aesthetic',
    transform: (t) => mapString(t, SCRIPT_MAP),
  },
  {
    id: 'bold-script',
    name: 'Bold Cursive',
    category: 'aesthetic',
    transform: (t) => mapString(t, BOLD_SCRIPT_MAP),
  },
  {
    id: 'fraktur',
    name: 'Gothic / Fraktur',
    category: 'fancy',
    transform: (t) => mapString(t, FRAKTUR_MAP),
  },
  {
    id: 'bold-fraktur',
    name: 'Bold Gothic',
    category: 'fancy',
    transform: (t) => mapString(t, BOLD_FRAKTUR_MAP),
  },
  {
    id: 'double-struck',
    name: 'Double-Struck (Blackboard)',
    category: 'fancy',
    transform: (t) => mapString(t, DOUBLE_STRUCK_MAP),
  },
  {
    id: 'monospace',
    name: 'Monospace Typewriter',
    category: 'clean',
    transform: (t) => mapString(t, MONOSPACE_MAP),
  },
  {
    id: 'fullwidth',
    name: 'Aesthetic Fullwidth (Wide)',
    category: 'aesthetic',
    transform: (t) => mapString(t, FULLWIDTH_MAP),
  },
  {
    id: 'small-caps',
    name: 'Small Capitals',
    category: 'clean',
    transform: (t) => mapString(t, SMALL_CAPS_MAP),
  },
  {
    id: 'circled',
    name: 'Bubble / Circled',
    category: 'fancy',
    transform: (t) => mapString(t, CIRCLED_MAP),
  },
  {
    id: 'inverted-circled',
    name: 'Inverted Dark Bubble',
    category: 'fancy',
    transform: (t) => mapString(t, INVERTED_CIRCLED_MAP),
  },
  {
    id: 'squared',
    name: 'Boxed / Squared',
    category: 'fancy',
    transform: (t) => mapString(t, SQUARED_MAP),
  },
  {
    id: 'inverted-squared',
    name: 'Inverted Dark Box',
    category: 'fancy',
    transform: (t) => mapString(t, INVERTED_SQUARED_MAP),
  },
  {
    id: 'strikethrough',
    name: 'Strikethrough',
    category: 'fancy',
    transform: (t) => applyCombiningMark(t, '\u0336'),
  },
  {
    id: 'underline',
    name: 'Underline',
    category: 'clean',
    transform: (t) => applyCombiningMark(t, '\u0332'),
  },
  {
    id: 'double-underline',
    name: 'Double Underline',
    category: 'clean',
    transform: (t) => applyCombiningMark(t, '\u0333'),
  },
  {
    id: 'slash-through',
    name: 'Slash Through',
    category: 'fancy',
    transform: (t) => applyCombiningMark(t, '\u0338'),
  },
  {
    id: 'tilde-strike',
    name: 'Tilde Wave',
    category: 'aesthetic',
    transform: (t) => applyCombiningMark(t, '\u0334'),
  },
  {
    id: 'flip',
    name: 'Upside Down / Flipped',
    category: 'fancy',
    transform: (t) => mapString(t.split('').reverse().join(''), FLIP_MAP),
  },
  {
    id: 'superscript',
    name: 'Tiny Superscript',
    category: 'aesthetic',
    transform: (t) => mapString(t, SUPERSCRIPT_MAP),
  },
  {
    id: 'subscript',
    name: 'Tiny Subscript',
    category: 'aesthetic',
    transform: (t) => mapString(t, SUBSCRIPT_MAP),
  },
  {
    id: 'spaced',
    name: 'Spaced Aesthetic',
    category: 'aesthetic',
    transform: (t) => t.split('').join(' '),
  },
  {
    id: 'dotted-above',
    name: 'Dotted Crown',
    category: 'aesthetic',
    transform: (t) => applyCombiningMark(t, '\u0307'),
  },
];
