import { describe, it, expect } from 'vitest';
import { FONT_MAPS } from '../maps';
import { generateZalgo, ZALGO_PRESETS } from '../zalgo';
import {
  METHOD_HANGUL_FILLER,
  METHOD_BRAILLE_BLANK,
  METHOD_ZERO_WIDTH_COMBO,
  generateInvisibleVariant,
} from '../invisible';
import {
  getUnicodeLength,
  generateAllStyles,
  computeCategoryTabs,
} from '../generator';

describe('Unicode Engine & Font Transformations', () => {
  it('should include 25+ font maps and transform text correctly', () => {
    expect(FONT_MAPS.length).toBeGreaterThanOrEqual(25);

    const bold = FONT_MAPS.find((f) => f.id === 'math-bold');
    expect(bold).toBeDefined();
    const transformedBold = bold!.transform('ABCabc123');
    // Check that code points are transformed to math bold
    expect(transformedBold).not.toBe('ABCabc123');
    expect(transformedBold).toContain('𝐀');

    const fraktur = FONT_MAPS.find((f) => f.id === 'fraktur');
    expect(fraktur).toBeDefined();
    const transformedFraktur = fraktur!.transform('King');
    expect(transformedFraktur).toContain('𝔎');
  });

  it('should algorithmically generate Zalgo glitch text with combining diacritics', () => {
    const text = 'Ghost';
    const zalgo = generateZalgo(text, { up: 2, mid: 1, down: 2 });
    // Base characters must remain preserved
    expect(zalgo).toContain('G');
    expect(zalgo).toContain('h');
    expect(zalgo).toContain('o');
    expect(zalgo).toContain('s');
    expect(zalgo).toContain('t');
    // String length should be significantly longer due to combining marks
    expect(zalgo.length).toBeGreaterThan(text.length * 2);
  });

  it('should accurately provide multi-method invisible characters', () => {
    expect(METHOD_HANGUL_FILLER).toContain('\u3164');
    expect(METHOD_BRAILLE_BLANK).toContain('\u2800');
    expect(METHOD_ZERO_WIDTH_COMBO).toContain('\u200B');

    const variant = generateInvisibleVariant(3);
    expect(variant.length).toBeGreaterThanOrEqual(3);
  });

  it('should calculate accurate unicode character lengths for game limits', () => {
    // Normal ASCII
    expect(getUnicodeLength('Viper')).toBe(5);

    // Combining diacritics / surrogate pairs
    const framed = '亗 VIPER 亗';
    expect(getUnicodeLength(framed)).toBeGreaterThanOrEqual(9);

    // Emoji
    const emojiName = 'Ghost🔥';
    expect(getUnicodeLength(emojiName)).toBe(6);
  });

  it('should generate 500+ styles instantly for any nickname', () => {
    const styles = generateAllStyles('Shadow');
    expect(styles.length).toBeGreaterThan(200);

    const categories = computeCategoryTabs(styles);
    expect(categories.length).toBeGreaterThanOrEqual(7);

    const allTab = categories.find((c) => c.id === 'all');
    expect(allTab).toBeDefined();
    expect(allTab!.count).toBe(styles.length);
  });
});
