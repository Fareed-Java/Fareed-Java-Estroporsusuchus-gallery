const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, 'media');
const playlistFile = path.join(mediaDir, 'playlist.json');
const supportedExts = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];

const files = fs.readdirSync(mediaDir)
  .filter(file => supportedExts.includes(path.extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

fs.writeFileSync(playlistFile, JSON.stringify(files, null, 2) + '\n');
console.log(`Wrote ${files.length} tracks to ${playlistFile}`);
