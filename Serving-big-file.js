const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const text = fs.createReadStream('./content/big.txt', 'utf8');
    text.on('open', () => {
        text.pipe(res);
    });
    text.on('error', () => {
        res.end('File not found');
    })
}).listen(5000);