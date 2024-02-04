const {writeFileSync} =  require('fs');

for(let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}`, {flag: 'a'}, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('done with this task');
    })
};