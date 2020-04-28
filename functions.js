/*
    Functions in JavaScript are often referred to as 'first class members' or
    'first class objects'. These names are meant to constrast functions in JS from
    methods in other languages such as Java or C#. In those languages functions
    strictly attached to objects based on class definition and cannot be changed.
    However, in JavaScript functions can be treated like any other variable. We
    can assign a function to another variable. We can pass functions as parameters
    to other functions. Functions themselves can return functions.

/*
    Very simple usecase for a function, provide reusable
    logic that can be called on demand
*/

function hello() {
    console.log("hello");
}

hello();
hello();
hello();

/*
    Function Parameter - Value or values passed to a function
    from the caller
*/

function saySomething(something) {
    console.log(something);
}

saySomething("hello");
saySomething("World");

/* 
    Functions can return values using the 'return' keyword
*/

function sum(a, b) {
    return a + b;
}
const x = sum(5,10);
console.log(x);

function createObject(name, favoriteFood) {
    const myObject = {
        name: name,
        favoriteFood: favoriteFood
    };
    console.log(myObject.name);
    return myObject; //returning a reference to the object
}

const myObject = createObject('Abby', 'Ice Cream');
console.log(myObject);

// Parameters
// JavaScript does not care what or how many parameters you provide to it
// These are all valid:
sum();
sum(4);
sum(3, 5, 6);

function parameterTest(a, b) {
    console.log(a, b);
}

parameterTest(1, 2);
parameterTest(1); // Any variable not present is considered undefined
parameterTest(1, 2, 3); // We lose 3 - It can't be accessed

// Rest Operator - Gathers extra values into a data structure
// that can be utilized
function parameterTest2(a, b, ...c) {
    console.log(a, b, c);
}
// The rest operator gathers extra values into an array
parameterTest2(1,2,3);
parameterTest2(1,2,3,4,5,6,7);