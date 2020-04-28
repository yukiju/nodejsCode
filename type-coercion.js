// Types can implicitly converted from one type to another
// == is a comparison operator that leverages type coercion
// === is a equality operator that does not leverage type coercion

console.log(5 == '5'); // true - numeric 5 can be interpreted as a string
// and when doing so will be equal to the string '5'
console.log(5 === '5'); // false - We're checking for strict equality - no changing
// of types. 5 and '5' are not equal under these circumstances.

// The plus sign (+) is acctually two different operators
// It handles numeric addition as well as string concatenation
// This means that it can be ambiguous whether the intend was addition or concatenation
// If either variable is valid for concatenation, it will use it!
console.log(1,2); // 3
console.log(1 + '2'); // '12'
console.log('1' + 2); // '12'
console.log('1' + '2'); // '12'

console.log(1 - '2'); // n-1
console.log(1 == '2' - '3'); // true