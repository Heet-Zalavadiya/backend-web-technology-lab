const fs = require('fs');
fs.appendFile('demo.txt',' appended message',(err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
}); 