const person = {
    firstName: 'Abby',
    lastName: 'Adams'
}

console.log(person.firstName);
console.log(person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(`${person['firstName']} ${person.lastName}`);

const food = 'Ice cream';

// Create a property on person with the key favoriteFood and the value of the food
person.favoriteFood = food;

console.log(person.favoriteFood);

// creates two variables referencing the same object
const otherPerson = person;

otherPerson.firstName = 'Billy';
console.log(person.firstName); // Billy


