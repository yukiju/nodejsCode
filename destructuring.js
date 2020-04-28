/* 'Simple' syntax for extracting values from a data structure (arrays/objects) */

// We want to assign the values 1 2 3, to variables a b c
//let a = 1;
//let b = 2;
//let c = 3;
// [a, b, c] - Array Destructuring Syntax - a, b, and c are assigned values
// from the array on the right hand side of the expression
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

console.log(typeof a);
let [d, e, ...f] = [4, 5, 6, 7, 8, 9];
// d and e are just numbers but f is an array
console.log(d, e, f);