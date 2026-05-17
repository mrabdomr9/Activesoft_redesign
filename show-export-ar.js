import fs from 'fs';

const ar = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));

console.log('ar.services.exportModule:', JSON.stringify(ar.services.exportModule, null, 2));
console.log('ar.services.exportManagement:', JSON.stringify(ar.services.exportManagement, null, 2));
