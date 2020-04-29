/*
    Conditional Expressions allow us to write code which executes
    conditionally given some predicate or evaluation.
    1. if statements
    2. switches
    3. ternary operations
*/
// simple if statement

const value = 10;
const comparison = 10;

if (value < comparison) {
    // This code block executes conditionally based upon the predicate
    console.log('value was less than ' + comparison);
} else if (value === comparison) {
    // This predicate is checked if the previous predicate is not
    console.log('Value is exactly equal to '+ comparison);
} else {
    // This code block runs when the predicate is false
    console.log("Value was not less than " + comparison);
}

// Switch Statement
const person = 'Abby';
let favoriteFood;

switch(person) {
    case 'abby':
    case 'Abby':    favoriteFood = 'Ice Cream'; break;
    case 'Billy':   favoriteFood = 'Pizza';     break;
    case 'Cindy':   favoriteFood = 'Cupcakes';  break;
    default:        favoriteFood = 'Lobster';   break;
}
console.log(favoriteFood);

// Ternary Operations
// Ternary operations are a great way to include simple logic in an assignment
// Ternary operations are terrible to express complicated logic in an  --finish this
const catsOwned = 3;
let name = 'Abby';
//predicate ? true-result : false-result;
name = catsOwned > 2 ? 'cat lady' : name;
console.log(name);

const x = value > 15 ? 7 < 2 ? value > 10 ? 2 > 5 : 7 : 9 : 10;
console.log(x);

/* Math Comparisons */
/*
    ==
    ===
    <
    >
    <=
    >=
    !=
    !==
*/

/* Logical Operators */
/*
    == - equality
    && - short-circuit and
    & - and
    || - short circuit or
    | - or
    ! - not
*/
function myFunc(a) {
    console.log(a);
    return true;
}
const b = myFunc('hello') | myFunc('World');