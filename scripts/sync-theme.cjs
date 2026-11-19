// CSS is the source of truth; HTML and the web manifest need literal colors.
const fs = require('node:fs');
const path = require('node:path');

const publicDir = path.join(__dirname, '..', 'public');
const theme = fs.readFileSync(path.join(publicDir, 'design/colors/theme.css'), 'utf8');
const match = theme.match(/--background-rgb:\s*(\d+)\s+(\d+)\s+(\d+)\s*;/);
if (!match || match.slice(1).some(channel => Number(channel) > 255)) {
  throw new Error('Set --background-rgb in theme.css to three RGB channels between 0 and 255.');
}
const background = '#' + match.slice(1).map(channel => Number(channel).toString(16).padStart(2, '0')).join('');

function updateFile(name, transform) {
  const file = path.join(publicDir, name);
  const original = fs.readFileSync(file, 'utf8');
  const updated = transform(original);
  if (updated !== original) fs.writeFileSync(file, updated);
}

updateFile('index.html', html => html.replace(
  /(<meta name="theme-color" content=")[^"]*("\s*\/>)/,
  `$1${background}$2`
));
updateFile('manifest.json', json => json.replace(
  /("(?:theme_color|background_color)"\s*:\s*")[^"]*(")/g,
  `$1${background}$2`
));
console.log(`Browser theme and manifest colors synced to ${background}.`);
