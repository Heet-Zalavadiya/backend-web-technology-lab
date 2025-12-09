const fs = require('fs');
data = 'hello this is demo file'
fs.writeFile('demo.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})