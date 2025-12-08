const child_process = require("child_process")
const {chdir} = require("process")

const child = child_process.spawn("cmd.exe",["/c","dir","/s","C:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`stderr: ${data}`);
})

child.stdout.on('data',(data)=> {
    console.log(`stdout: ${data}`);
})

child.on('close',(data)=>{
    console.log(`close: ${data}`)
})