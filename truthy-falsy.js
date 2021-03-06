/* JavaScript is a language in which survivability is considered very important */
/* Any value can be evaluated as if it were a boolean */
/* Most values are tru, with a small subset */

/*
    Falsy values
    1. 0
    2. NaN
    3. undefined
    4. null
    5. ''
    6. false
*/
//const test = 0;
//const test = 1;
//const test = undefined;
const test = {};
//if(test) {
//    console.log(`${test} was truthy`);
//} else {
//    console.log(`${test} was falsy`);
//}

/* When truthy-falsy expressions are evaluated, the can be consider for
truthiness but return the final value that was evaluated in the expression */
const a = 0 && 'dog'; // if a condition is false then the entire statement is false
console.log(a);
const b = 0 || 'dog'; // 
console.log(b);
const c = 0 || NaN;
console.log(c);
const d = 'dog' || NaN;
console.log(d);

/* Default Operator - || */
function sayHello(person) {
    // If they have a 'valid' firstName it will be used, otherwise it will be 'stranger'
    const firstName = person.firstName || 'stranger';
    console.log(`Hello, ${firstName}`);
}
sayHello('Billy');
sayHello({firstName: 'Abby'}); // Hello, Abby
sayHello({}); // Hello, stranger
sayHello({firstName: ''}); // Hello, stranger

/* Guard Operator - && */
/* 
    Operations which access properties can be dangerous if we always assume that
    the property must exist. If there are circumstances (for instance, data is
    sourced from user or external API) in which the data does not exist, then
    we should guard against TypeErrors caused by accessing properties of undefined
*/
//sayHello(undefined);
function dueDatePassed(assignment) {
    const dueDate = assignment.dueDate;
    // we check that dueDate is not undefined if it's not then check the value
    return (dueDate && dueDate.valueOf()) < new Date().valueOf();
}
const assignment = {
    // ISO basic format YYYY-MM-DD
    dueDate: new Date('2020-04-27')
}
console.log(`Assignment overdue: ${dueDatePassed(assignment)}`);
console.log(`Assignment overdue: ${dueDatePassed({})}`);

