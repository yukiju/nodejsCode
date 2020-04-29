/*
    Array Functions
    ---------------------
    There are a number of array processing functions which accept callbackk functions
    and can be chained together in a functional programming style
    .forEach - Accepts a callback function that consumes objects in the array
    .map - Accepts a callback function which maps a value to a new value
    .filter - Accepts a callback function that acts as a predicate to filter out
            values that map to falsy values
    .reduce - Accepts a callback function that reduces an array to single value
                by pairing items together until one is left
*/

const myArr = [1,2,3,4,5,6,7,8,9,10];

const val = myArr
    .map((value) => value * 3)
    //.filter((value) => value % 2 == 0)
    .filter((value) => value % 2 === 0)
    //.forEach((value) => console.log(value));
    .reduce((a, b) => Math.max(a,b));
    //.reduce((a, b) => {return a + b});

console.log(val);