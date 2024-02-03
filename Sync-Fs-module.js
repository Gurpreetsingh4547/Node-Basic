const { readFileSync, writeFileSync } = require("fs");

// Read file
const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

console.log(firstFile, secondFile);

// Create new file
// Flag a while append new text in file
writeFileSync('./content/result-sync.txt', `Here is the result :- ${firstFile}, ${secondFile}`, { flag: 'a' });