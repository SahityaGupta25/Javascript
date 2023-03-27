/*
3. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
a) Sort the array and find the min and max age
b) Find the median age(one middle item or two middle items divided by two)
c) Find the average age(all items divided by number of items)
d) Find the range of the ages(max minus min)
e) Compare the value of (min - average) and (max - average), use abs()
method
*/

// a) Sort the array and find the min and max age


// Sorting.......
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log('This is Your "Sorted Array"',ages.sort());

// Finding Min

console.log('This is the Minimum in this Array=',ages.shift());

//Finding Max
console.log('This is the Minimum in this Array=',ages.pop());



// b) Find the median age(one middle item or two middle items divided by two)


console.log(`The Median Age is=`,ages.slice(5,6)/2);


// c) Find the average age(all items divided by number of items)


sum=0
for (let i = 0; i < ages.length; i++) {
    sum = sum+ages[i]
    
}

console.log(`The Averages of Ages=`,sum);




// d) Find the range of the ages(max minus min)


const x=ages.shift();

const y=ages.pop();

const z=y-x

console.log(`The Range is=`,z);


// e) Compare the value of (min - average) and (max - average), use abs() method


const a=console.log(`(min - average)`,Math.abs(x-sum));
const b=console.log(`(max - average)`,Math.abs(y-sum));

