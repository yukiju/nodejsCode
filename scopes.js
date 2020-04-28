/*
    Variable declaration and Variable Scope
    JavaScript is a loosely typed language.

    Prior to ES6 JS, there was one specific keyword for declaring a variable
    1. var

    After ES6, two new keywords were introduced
    2. let
    3. const

    var vs let
    Variables declared with var have fewer possible scopes than those declared
    with let. Scope is way of describing where within code execution a variable
    is considered valid and referenceable. Any variable declared with var can have
    one of two scopes:
    1) Function Scope - The variable is scoped to the function it is declared within.
    2) Global Scope - The variable is scoped to the global session.

    Variables declared with let and const can be in block scope in addition
    to the scopes available to var.
    3) Block Scope - The variable is scoped to a code block (if statement, loop, etc)
*/

var x = 20;
var name = 'Abby';

let y = 10;
let lastName = 'Adams';
lastName = 30;

/*
    A function is code abstracted to a reusable function that can be called
    when needed.
*/
const myFunction = function() {
    // Arbitrary block
    {
        var myVar = 'hello'; // var will be scoped to the function
        let myLet = 'world'; // let will be scoped to this block
    }

    console.log(myvar);
    console.log(myLet); // Error - myLet is not defined
}

myFunction();