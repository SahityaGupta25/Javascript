function getEL(arr,el=1){
let arry = [];
for (let index = 0; index < el; index++) {
    arry.push(arr[index]);
    

}
return arry;
}
console.log(getEL([2,66,29,16,25],3));