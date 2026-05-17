import fs from 'fs';

const en = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));

console.log('en.services.exportModule:', JSON.stringify(en.services.exportModule, null, 2));
console.log('en.services.exportManagement:', JSON.stringify(en.services.exportManagement, null, 2));
