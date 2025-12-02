const path = require('path');
console.log(path.dirname('C:\\temp\\myfile.html'));
console.log(path.basename('C:\\temp\\myfile.html'));
console.log(path.extname('C:\\temp\\myfile.html'));

console.log(path.join( "users", "arjun", "documents", "project"));

console.log(path.normalize('//folder//subfolder////file.txt'));

console.log(path.isAbsolute('C:\\temp\\myfile.html'));

console.log(path.resolve( "folder", "subfolder", "app.js"));
