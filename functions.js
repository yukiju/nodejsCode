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