// 6. Write a program which tells the number of days in a month.


// const month=3
// switch (month) {
//     case 4,6,9,11:
//         console.log("30 Days");
        
//         break;
//     case 1,3,5,7,8,10,12:
//         console.log("31 Days");
//         break;
//     case 2:
//         console.log("28 or 29 Days");
//         break;
//     default:
//         console.log("Invalid Operation");
//         break;
// }

const month=6
if (month===1 || month===3 || month===5 || month===7 || month===8  || month===10 || month===12){
    console.log("31 Days");
}
else if (month===4 || month===6 || month===9 || month===11){
    console.log("30 days");
}
else if (month===2){
    console.log('28 or 29 Days');
}
else {
    console.log('Invalid Operation');
}


