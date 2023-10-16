// Set time out
setTimeout(()=>{
    console.log('Ram Ram');
},2000)

a=90
b=0

// Promise with set time out
let x = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
})

x.then((data)=>{
    b=data
    console.log(a+b);
})