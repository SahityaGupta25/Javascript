/* 1. In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk',
'Coffee', 'Tea', 'Honey']




a. add 'Meat' in the beginning of your shopping cart if it has not been already
added*/
let x = shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
let y = x.unshift('Meat');
console.log(x);







/*b. add Sugar at the end of you shopping cart if it has not been already added*/


let x1 = shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
let y1 = x1.splice(4,0,'Sugar');
console.log(x1);




/*c. remove 'Honey' if you are allergic to honey*/


let x2 = shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
let y2 = x2.pop();
console.log(x2);




/*d. modify Tea to 'Green Tea'*/

let x3 = shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
let y3 = x3.pop();
console.log(x2);