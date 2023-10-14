let name1 = 'SaHitya'

// 'length' is a property where as uppercase and toLowerCase are Pre-defined function because they are invoking by '()' are also known as String Methods
console.log(name1.length)
// Upper Case
console.log(name1.toUpperCase())

// Lower Case
console.log(name1.toLowerCase())

// slice
console.log(name1.slice(2,7))

let bike = "R1"

// Replace
console.log(bike.replace("1","6"));


// Concatinate
console.log(name1.concat("  own's Yamaha ", bike))

// TRIM
let x = "a  b   c    d     e     f    g   h  "
let y = "         a b c d e f            "
console.log(x.trim())
console.log(y.trim())

// String are Immutable