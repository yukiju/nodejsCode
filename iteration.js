/*
    Iteration is the process of writing code that can be executed
    in repetition given some expression.

    1. while-loop
    2. do-while-loop
    3. for-loop
    4. Enhanced for-loop
*/
let x = 0;

// we are executing logic WHILE the condition is true
while(x < 10) {
    console.log(x++);
}

let y = -10;
// do-while loop will always run at least once
do {
    // code to be executed iteratively
    console.log(y -= 2);
} while (y > 0);

// For loops are a bit more complicated and combine common expressions that
// we might be tempted to put before a while loop
// for(/*declaration*/;/*predicate*/;/*mutation*/);
for(let x = 0; x < 10; x++) {
    console.log(x);
}