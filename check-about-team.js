import fs from 'fs';

const en = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

console.log('en.about.team:', en.about ? en.about.team : 'undefined about');
console.log('ar.about.team:', ar.about ? ar.about.team : 'undefined about');
