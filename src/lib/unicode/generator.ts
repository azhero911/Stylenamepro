import { StyleResult, ToolCategory, CategoryTab } from '@/types';
import { FONT_MAPS } from './maps';
import { FRAMES } from './frames';
import { generateZalgo } from './zalgo';

// Unicode-aware character counter (handles surrogate pairs and emoji)
export function getUnicodeLength(text: string): number {
  if (!text) return 0;
  // Intl.Segmenter is the gold standard for counting perceived user grapheme clusters
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text)).length;
  }
  return Array.from(text).length;
}

// Popular gamer name pool for the "Random" generator button
export const RANDOM_NAME_POOL = [
  'Shadow', 'Viper', 'Ghost', 'Thunder', 'Phoenix', 'Titan', 'Falcon', 'Raptor',
  'Alpha', 'Dragon', 'Ninja', 'Reaper', 'Cyber', 'King', 'Legend', 'Toxic',
  'Demon', 'Frost', 'Hunter', 'Matrix', 'Blaze', 'Wolf', 'Storm', 'Maverick',
  'Badshah', 'Sher', 'Sardar', 'Malang', 'Khan', 'Zaid', 'Striker', 'Tiger',
];

export function getRandomSampleName(): string {
  return RANDOM_NAME_POOL[Math.floor(Math.random() * RANDOM_NAME_POOL.length)];
}

// Main generation function: Combines 35+ Font Maps with 150+ Frames
export function generateAllStyles(inputName: string): StyleResult[] {
  const name = inputName.trim() || 'YourName';
  const results: StyleResult[] = [];

  // 1. Raw Font Transformations (No frame)
  FONT_MAPS.forEach((font) => {
    const transformed = font.transform(name);
    results.push({
      id: `font-${font.id}`,
      styleName: font.name,
      text: transformed,
      category: 'aesthetic',
      charCount: getUnicodeLength(transformed),
    });
  });

  // 2. Add Algorithmic Zalgo Glitch variations
  const zalgoSubtle = generateZalgo(name, { up: 1, mid: 0, down: 1 });
  results.push({
    id: 'zalgo-subtle',
    styleName: 'Cyber Glitch (Subtle)',
    text: zalgoSubtle,
    category: 'glitch',
    charCount: getUnicodeLength(zalgoSubtle),
    isZalgo: true,
  });

  const zalgoMedium = generateZalgo(name, { up: 3, mid: 1, down: 3 });
  results.push({
    id: 'zalgo-medium',
    styleName: 'Zalgo Void (Medium)',
    text: zalgoMedium,
    category: 'glitch',
    charCount: getUnicodeLength(zalgoMedium),
    isZalgo: true,
  });

  const zalgoHeavy = generateZalgo(name, { up: 5, mid: 2, down: 5 });
  results.push({
    id: 'zalgo-heavy',
    styleName: 'Demon Glitch (Heavy)',
    text: zalgoHeavy,
    category: 'glitch',
    charCount: getUnicodeLength(zalgoHeavy),
    isZalgo: true,
  });

  // 3. Combine with Decorative Frames
  FRAMES.forEach((frame) => {
    // Pick compatible fonts: e.g. Bold, Gothic, Script, Monospace, SmallCaps
    const keyFonts = [
      FONT_MAPS.find((f) => f.id === 'math-bold'),
      FONT_MAPS.find((f) => f.id === 'fraktur'),
      FONT_MAPS.find((f) => f.id === 'script'),
      FONT_MAPS.find((f) => f.id === 'small-caps'),
      FONT_MAPS.find((f) => f.id === 'double-struck'),
    ].filter(Boolean);

    keyFonts.forEach((font) => {
      if (!font) return;
      const transformedText = font.transform(name);
      const finalText = `${frame.prefix}${transformedText}${frame.suffix}`;

      results.push({
        id: `frame-${frame.id}-${font.id}`,
        styleName: `${frame.name} (${font.name})`,
        text: finalText,
        category: frame.category,
        charCount: getUnicodeLength(finalText),
      });
    });

    // Also include the frame with raw name (clean)
    const rawFrameText = `${frame.prefix}${name}${frame.suffix}`;
    results.push({
      id: `frame-${frame.id}-raw`,
      styleName: `${frame.name} (Classic)`,
      text: rawFrameText,
      category: frame.category,
      charCount: getUnicodeLength(rawFrameText),
    });
  });

  return results;
}

// Compute live tab counts based on generated results
export function computeCategoryTabs(allStyles: StyleResult[]): CategoryTab[] {
  const counts: Record<ToolCategory, number> = {
    all: allStyles.length,
    gaming: 0,
    'free-fire': 0,
    pubg: 0,
    aesthetic: 0,
    love: 0,
    'urdu-pak': 0,
    symbols: 0,
    glitch: 0,
  };

  allStyles.forEach((style) => {
    if (counts[style.category] !== undefined) {
      counts[style.category]++;
    }
  });

  return [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'gaming', label: 'Gaming', count: counts.gaming },
    { id: 'free-fire', label: 'Free Fire', count: counts['free-fire'] },
    { id: 'pubg', label: 'PUBG', count: counts.pubg },
    { id: 'aesthetic', label: 'Aesthetic', count: counts.aesthetic },
    { id: 'love', label: 'Love', count: counts.love },
    { id: 'urdu-pak', label: 'Urdu/Pak', count: counts['urdu-pak'] },
    { id: 'symbols', label: 'Symbols', count: counts.symbols },
    { id: 'glitch', label: 'Glitch', count: counts.glitch },
  ];
}
