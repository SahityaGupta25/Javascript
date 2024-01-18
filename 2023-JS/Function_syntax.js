// function multply(a,b){

//     console.log(a*b);
// }


// multply(5,25)


// Q. Add unlimited numbers which are given in parameter

// function addno(){
//     let sum = 0
//     let i;
//     for (i = 0 ; i<arguments.length;i+=1){

//         sum = arguments[i]+sum;
//     }
//     return sum
//     }
    
//     The arguments is an object which is local to a function.
// console.log(addno(25,66,93,16,2,29));


// Another Approach



function addno(...ans){
    let sum = 0
    let i;
    for (i = 0 ; i<arguments.length;i+=1){

        sum = arguments[i]+sum;
    }
    return sum
    }

    let ans = addno(25,66,93,11,2,29)
    console.log(ans);