const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/library-data.ts');
const content = fs.readFileSync(filePath, 'utf8');

const coverMatches = content.match(/"coverUrl": "https:\/\/covers\.openlibrary\.org\/b\/id\/\d+-L\.jpg"/g);
if (!coverMatches || coverMatches.length !== 10000) {
  throw new Error(`Expected exactly 10000 Open Library cover URLs, found ${coverMatches ? coverMatches.length : 0}`);
}

console.log(JSON.stringify({ status: 'SUCCESS', totalLibrarySize: 10000, verifiedCovers: coverMatches.length }, null, 2));
