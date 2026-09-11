// Verification script for NameStylePro Unicode Engine
import { readFileSync } from 'fs';

console.log('=== NameStylePro Unicode Verification ===');

// Check maps.ts
const mapsContent = readFileSync('./src/lib/unicode/maps.ts', 'utf-8');
console.log('maps.ts loaded, size:', mapsContent.length, 'bytes');
if (!mapsContent.includes('math-bold') || !mapsContent.includes('fraktur')) {
  throw new Error('maps.ts missing key font definitions');
}

// Check frames.ts
const framesContent = readFileSync('./src/lib/unicode/frames.ts', 'utf-8');
console.log('frames.ts loaded, size:', framesContent.length, 'bytes');
if (!framesContent.includes('Royal Wings') || !framesContent.includes('free-fire')) {
  throw new Error('frames.ts missing key frames');
}

// Check zalgo.ts
const zalgoContent = readFileSync('./src/lib/unicode/zalgo.ts', 'utf-8');
console.log('zalgo.ts loaded, size:', zalgoContent.length, 'bytes');
if (!zalgoContent.includes('\\u0300') && !zalgoContent.includes('\\u030d')) {
  throw new Error('zalgo.ts missing diacritics');
}

// Check invisible.ts
const invisibleContent = readFileSync('./src/lib/unicode/invisible.ts', 'utf-8');
console.log('invisible.ts loaded, size:', invisibleContent.length, 'bytes');
if (!invisibleContent.includes('\\u3164') || !invisibleContent.includes('\\u2800')) {
  throw new Error('invisible.ts missing Hangul filler or Braille blank');
}

// Check server-only in blog-posts.ts
const blogContent = readFileSync('./src/data/blog-posts.ts', 'utf-8');
console.log('blog-posts.ts loaded, size:', blogContent.length, 'bytes');
if (!blogContent.startsWith("import 'server-only';")) {
  throw new Error('blog-posts.ts is missing strict server-only import guard');
}

// Check sitemap and robots
const sitemapContent = readFileSync('./src/app/sitemap.ts', 'utf-8');
console.log('sitemap.ts loaded, size:', sitemapContent.length, 'bytes');
if (!sitemapContent.includes('getAllBlogSlugs()')) {
  throw new Error('sitemap.ts missing blog slugs');
}

console.log('All 6 verification checks PASSED successfully!');
