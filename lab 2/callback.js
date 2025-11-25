function a(n,m,b) {
    x = n + m
    console.log(x)
    b(x)
} 

function res(x) {
    console.log('sum = ' + x)
}

a(10,11,res)