// 5. Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-89,  B
// c. 60-69,  C
// d. 50-59,  D
// e. 0-49,   E

const score=66;
if (score>=80 && score<=100){
    console.log('Grade A');
}
else if (score>=70 && score<=89){
    console.log('Grade B');
}
else if (score>=60 && score<=69){
    console.log('Grade C');
}
else if (score>=50 && score<=59){
    console.log('Grade D');
}
else if (score>=0 && score<=49){
    console.log('Grade E');
}