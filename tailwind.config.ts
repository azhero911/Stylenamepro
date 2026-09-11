import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED', // Primary electric violet accent
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        game: {
          ff: '#10B981',   // Emerald green for Free Fire limit
          pubg: '#059669', // Deep green for PUBG limit
          accent: '#8B5CF6',
        },
      },
      fontSize: {
        // Enforce minimum 16px base size for mobile UX
        xs: ['0.875rem', { lineHeight: '1.25rem' }], // 14px for subtle badges
        sm: ['0.9375rem', { lineHeight: '1.375rem' }], // 15px
        base: ['1rem', { lineHeight: '1.5rem' }],     // 16px standard base
        lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        xl: ['1.25rem', { lineHeight: '1.875rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        glow: '0 0 20px -3px rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
