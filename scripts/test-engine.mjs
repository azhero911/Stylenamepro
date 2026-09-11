// Direct runtime verification of mathematical font transforms and limits
console.log('=== Testing NameStylePro Runtime Transformations ===');

function buildAlphabetMap(capsStart, lowerStart, digitsStart) {
  const map = {};
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

const BOLD_MAP = buildAlphabetMap(0x1d400, 0x1d41a, 0x1d7ce);
const FRAKTUR_MAP = {
  ...buildAlphabetMap(0x1d504, 0x1d51e),
  C: 'ℭ', H: 'ℌ', I: 'ℑ', R: 'ℜ', Z: 'ℨ',
};

function mapString(str, map) {
  return str.split('').map(c => map[c] || c).join('');
}

const testName = 'Shadow';
const boldRes = mapString(testName, BOLD_MAP);
const frakturRes = mapString(testName, FRAKTUR_MAP);

console.log('Input:', testName);
console.log('Math Bold:', boldRes);
console.log('Gothic Fraktur:', frakturRes);

if (!boldRes.includes('𝐒') || !frakturRes.includes('𝔖')) {
  throw new Error('Font transformation failed');
}

// Test Unicode length
function getUnicodeLength(text) {
  return Array.from(text).length;
}

const ffLimit = 12;
const pubgLimit = 16;
const framed = '亗 ' + boldRes + ' 亗';
console.log('Framed style:', framed);
console.log('Unicode length:', getUnicodeLength(framed));

if (getUnicodeLength(framed) > ffLimit) {
  console.log('Correctly flags > 12 for Free Fire warning.');
} else {
  console.log('Fits within Free Fire 12 character limit.');
}

console.log('All runtime math transformations verified successfully!');
