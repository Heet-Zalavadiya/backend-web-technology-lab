const os = require('os')
console.log(os.type());
console.log(os.release());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

console.log(os.totalmem()/(1024 ** 3));
console.log(os.freemem()/(1024 ** 3));

console.log(os.userInfo());

console.log(os.uptime());
console.log(os.uptime()/3600);

console.log(os.cpus());
console.log(os.networkInterfaces());


