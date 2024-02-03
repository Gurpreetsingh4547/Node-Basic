const path = require("path");

console.log(path.sep); // prints the path separator

// Getting any file path from system
const filePath = path.join('/content//', 'subfolder', 'test.txt');
console.log(filePath);

// Get base file name
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);