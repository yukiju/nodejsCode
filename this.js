/*
    Arrow functions preserve the context of this at their point of definition
    Defining functions with the function keyword does not do this.
    If a function needs to be passed around and the context of this preserved
    to the original defining object, it should be done using an arrow function
    Arrow functions are ES6 feature
*/
const abby = {
    firstName: 'Abby',
    lastName: 'Adams',
    sayHello: function() {
        console.log(this);
        console.log(`Hello, my name is ${this.firstName}`);
    },
    delayedSayHello: function() {
        // Callback function
        setTimeout(this.sayHello, 2000); // undefined
    },
    delayedSayHelloWorking: function() {
        // Callback function
        // Arrow function "() => function()" preserves the value of Abby 
        setTimeout(() => this.sayHello(), 2000); // Abby
    },
    anotherDelayedSayHello: function() {
        // The arrow is the referencing the same object
        // console.log(this); is storing abby.sayHello() in the property onTimeout
        setTimeout(() => this.sayHello(), 2000);
    }
};

abby.sayHello();

const myFunction = abby.sayHello;
// Abby gets lost once we call another function
myFunction();

abby.delayedSayHello();
abby.delayedSayHelloWorking();
abby.anotherDelayedSayHello();



