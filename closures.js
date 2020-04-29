/* We want to accomplish encapsulation using JavaScript */
/* JavaScript does not have a private keyword */

/* A closure is a language feature of JavaScript that maintains data availability
    after a function has completed when the function returns something that provides
    access to it. Closures are an incredibly powerful and important tool in JavaScript.
    Java has only partial support for closures, so doing tasks that might be easy using
    closures in JS may be challenging in Java. */

function getAbby() {
    // This object is accessible even after the function ends
    // through a closure - the object returned from this function
    // accesses so this data must stay alive
    const abby = {
        firstName: 'Abby',
        lastName: 'Adams',
        
    };

    // What are we returning?
    // We are returning an object with two properties - getFirstName and getLastName
    // both of these properties are functions
    return {
        getFirstName: () => abby.firstName,
        getLastName: () => abby.lastName
    };
}

const abby = getAbby();


// Should not be possible!
abby.firstName = 'Billy';

// This should be possible
console.log(abby.getFirstName());
console.log(abby.getLastName());