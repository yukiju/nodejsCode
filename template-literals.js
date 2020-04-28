
const people = ['Abby', 'Billy', 'Cindy'];
const abby = {
    firstName: 'Abby',
    lastName: 'Adams',
    birthDate: '2000-01-01'
};



console.log("output 1")
// in loops - Iterating over keys/index values
// For each iteration of this loop, a property of the object abby will be assigned
// to a variable named 'propery'
for(const property in abby) {
    // ES6 JS feature - Template Literal
    // Useful for string interpolation in JS
    //console.log(property);
    console.log(`${property}: ${abby[property]}`);
}



console.log("output 2");
// of loops
for(const person of people) {
    console.log(person);
}


// Template literals allow us to embed other values
const descriptor = 'fun';
//const str = 'JavaScript is '+ descriptor;

const str = `JavaScript is ${descriptor}`
console.log(str);

// Template literals can be used for multiline strings
const multiline = `hello \
everyone`;
console.log(multiline);

console.log(`hello`.toUpperCase());