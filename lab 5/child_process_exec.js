const child_process = require('child_process');

// child_process.exec('node -v', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`Current Node.js version: ${stdout}`);
// });


child_process.exec('python 1.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`Python code run from nodejs: ${stdout}`);
});

