// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}





// In JavaScript,
//  !== is the strict inequality operator. It checks whether two values are not equal in both value and type.

// Key Points:
// Strict comparison: !== does not perform type coercion (automatic conversion of data types).
// It evaluates to true if:
// The values are of different types, or
// The values are the same type but not equal.


// Example Usage:
// console.log(5 !== '5'); // true (number vs string, different types)
// console.log(5 !== 5);   // false (same type and value)
// console.log('hello' !== 'Hello'); // true (case-sensitive comparison)
// console.log(false !== 0); // true (different types: boolean vs number)