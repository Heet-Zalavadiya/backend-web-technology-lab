const fs = require('fs')

if (fs.existsSync('config.json')) {
    console.log("Exist");
}
else {
    console.log('Not Exist');
}