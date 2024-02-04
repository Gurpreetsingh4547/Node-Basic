const { log } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {highWaterMark: 90000, encoding: 'utf8'});

stream.on('data', (data) => {
    log(data);
});

stream.on('error', (data) => {
    log(data);
})