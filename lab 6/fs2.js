const fs = require('fs');

try {
    data = fs.readFileSync('demo.txt');
} catch (error) {
    console.log(error); 
}
console.log(data.toString());
