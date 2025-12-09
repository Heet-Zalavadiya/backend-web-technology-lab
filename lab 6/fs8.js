const fs = require('fs')

fs.copyFile('src.txt','dest.txt',(err) => {
    if(err) throw err
    console.log('source.txt was copied to destination.txt');
})