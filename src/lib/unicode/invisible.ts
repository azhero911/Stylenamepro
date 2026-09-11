// Multi-Method Invisible / Blank Character Generator
// Specifically engineered to withstand Garena Free Fire and PUBG/BGMI patch updates

export interface InvisibleMethod {
  id: string;
  name: string;
  recommendedFor: string;
  description: string;
  characterString: string;
  displayCode: string;
  instructions: string[];
}

// 1. Hangul Filler (U+3164) with Zero-Width Non-Joiner (U+200C)
// Prevents standard duplicate name errors by interleaving invisible joiners
export const METHOD_HANGUL_FILLER = '\u3164\u200C\u3164';

// 2. Braille Pattern Blank (U+2800)
// Recognized as valid non-empty character in PUBG & BGMI
export const METHOD_BRAILLE_BLANK = '\u2800\u2800\u2800';

// 3. Multi-byte Zero-Width Sequence (U+200B + U+200E + U+200F)
export const METHOD_ZERO_WIDTH_COMBO = '\u200B\u200E\u200F\u200B';

export const INVISIBLE_METHODS: InvisibleMethod[] = [
  {
    id: 'hangul-combo',
    name: 'Method 1: Hangul Filler + ZWNJ (Most Popular)',
    recommendedFor: 'Free Fire (OB44+ Compatible) & Guild Names',
    description:
      'Uses Unicode U+3164 combined with Zero-Width Non-Joiner to bypass Free Fire "Name already exists" error.',
    characterString: METHOD_HANGUL_FILLER,
    displayCode: 'U+3164 + U+200C + U+3164',
    instructions: [
      'Click the "Copy Blank Name" button below.',
      'Open Free Fire / Free Fire MAX and go to your profile.',
      'Click on the Edit icon next to your current nickname.',
      'Paste the copied blank characters into the nickname box.',
      'If the game says "Name already taken", click "Generate Variant" to add a random invisible separator.',
      'Confirm and spend 390 diamonds or your Name Change Card.',
    ],
  },
  {
    id: 'braille-pattern',
    name: 'Method 2: Braille Blank Pattern',
    recommendedFor: 'PUBG Mobile, BGMI & Mobile Legends',
    description:
      'Uses the Braille Blank character (U+2800). PUBG renders this as completely transparent without flagging as empty.',
    characterString: METHOD_BRAILLE_BLANK,
    displayCode: 'U+2800 × 3',
    instructions: [
      'Click "Copy Braille Blank".',
      'Open PUBG Mobile or BGMI inventory and use a Rename Card.',
      'Paste the characters into the name field.',
      'Confirm to see your completely invisible name in kill feeds!',
    ],
  },
  {
    id: 'zero-width-seq',
    name: 'Method 3: Zero-Width Directional Trio',
    recommendedFor: 'WhatsApp DP, Instagram Bio & TikTok',
    description:
      'Zero-Width Space (U+200B) + LTR Mark (U+200E) + RTL Mark (U+200F). Ideal for clean invisible bios and WhatsApp names.',
    characterString: METHOD_ZERO_WIDTH_COMBO,
    displayCode: 'U+200B + U+200E + U+200F',
    instructions: [
      'Copy the Zero-Width Sequence.',
      'Paste into Instagram Bio, WhatsApp Profile Name, or Discord Nickname.',
      'Leaves a clean, minimalist invisible space.',
    ],
  },
];

export function generateInvisibleVariant(length: number = 3): string {
  // Generates unique combinations so user does not get "Name already taken"
  const pieces = ['\u3164', '\u200C', '\u200D', '\u200B', '\u2800'];
  let result = '\u3164';
  for (let i = 0; i < length; i++) {
    result += pieces[Math.floor(Math.random() * pieces.length)];
  }
  return result;
}
