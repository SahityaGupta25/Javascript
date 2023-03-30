// 5. Change each company name to uppercase one by one and print them out

let x=['Facebook','Google','Microsoft','Apple','Oracle','Amazon','Ibm']
for (let i = 0; i < x.length; i++) {
    const y = x.uppercase([i]);
    console.log(y);
    
}