// Sum of Natural Number from 1 to N .



function natural(n) {
    
    let sum =0
    for (let i = 1; i < n+1; i++) {
        sum=sum+i;
        
    }
    
    return sum;
}

console.log(natural(3)); 