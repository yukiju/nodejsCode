/*
    Beyond Object.create, JS was eventually updated to unclude a more traditional
    approach to inheritance. This involved the inclusion of the 'new' keyword and
    a way of defining functions to create objects for us - these functions are referred
    to as 'constructor functions'. Creating a constructor function is easy - just
    create a function that assigns values using 'this' and

*/

// Start with capitalized
const Person = function(firstName, birthdate) {
    this.firstName = firstName;
    this.birthdate = birthdate;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
}

const abby = new Person('Abby', new Date());

console.log(Person);
console.log(abby);

