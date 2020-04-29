const fs = require('fs');

// create an object
// store some object data to a file
// restore that object data back into memory by reading the file
// do something with object

class Person {

    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
}

const danny = new Person('Danny');

fs.writeFile('./person.txt', danny.firstName, () => {
    delete danny;
    const fileName = './person.txt';
    fs.readFile(fileName, (err, data) => {
        const name = data.toString();
        const person = new Person(name);
        person.sayHello();
        console.log(`Read person from fileName ${fileName}`);
    })
    console.log('Saving completed')
});

//setTimeout(console.log(danny), 2000);