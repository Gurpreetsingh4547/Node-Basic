const { log } = require("console");
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

/**
 * Retrieve text from the specified file path
 * @param {string} path - The file path to read from
 * @returns {Promise<string>} - A promise that resolves with the text content of the file or rejects with an error
 */
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         });
//     });
// };


/**
 * Asynchronously gets the content from the first.txt file and logs it.
 */
const getTextAndCreateFile = async () => {
    try {
       const first = await readFile('./content/first.txt');
       const second = await readFile('./content/second.txt');
       await writeFile('./content/promise-text.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'});
    } catch (error) {
        log(error);
    }
};

getTextAndCreateFile();