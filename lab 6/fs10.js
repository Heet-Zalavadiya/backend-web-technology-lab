const fs = require('fs');

const fileToWatch = 'watchme.txt';

fs.watch(fileToWatch, (eventType) => {
    if (eventType === 'change') {
        console.log("File Changed");
    }
});

console.log(`Watching for changes in ${fileToWatch}...`);
