// Importing fs module from NodeJS
const fs = require('fs');

/*
    A callback function is passed as an argument to another
    function such that it can be invoked later by that function's execution.
*/

/* In this example () => console.log('hello') is a callback function */
//setTimeout(() => console.log('hello'), 1500);

/*
    Whoever has to implement setTimeout - they need to be able to invoke a function
    that doesn't exist yet
*/

/*
    If we were to do the same thing in Java, we would need to:
    1. create Interface Delayable that defines an abstract function
    2. create setTimeout function which accepts an instance of Delayable
    3. Invoke known method signature of Delayable interface after timeout

    User of setTimeout - consumes
    1. Implement the interface Delayable, providing a concrete implementation
    2. Pass our custom implementation to setTimeout as a kind of Delayable
*/

function randomAction(callbackA, callbackB) {
    if (Math.random() > 0.5) {
        callbackA();
    } else {
        callbackB();
    }
}

// Why does writing a file require a callback function?
// writeFile is asynchronous operation
fs.writeFile('./my-file2.txt','Goodbye everyone!',()=> {
    console.log('File write complete!');
    fs.readFile('./my-file2.txt', (err, data) => {
        console.log(data.toString());
    })
});
console.log('Final line');
//randomAction(() => console.log('Ran from A'), () => console.log('Ran from B'));

