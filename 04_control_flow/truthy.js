const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// **truthy** and **falsy** values determine how expressions evaluate in boolean contexts, 
// such as in conditional statements (`if`, `while`, etc.).


// ### **Falsy Values**
// A **falsy** value is a value that, when converted to a boolean, evaluates to `false`.  
// The following values are considered **falsy** in JavaScript:

// 1. `false`  
// 2. `0` (zero)  
// 3. `-0` (negative zero)  
// 4. `""` (empty string)  
// 5. `null`  
// 6. `undefined`  
// 7. `NaN` (Not-a-Number)

// #### Example:
// ```javascript
// if (0) {
//   console.log("This won't run because 0 is falsy.");
// }

// if ("") {
//   console.log("This won't run because an empty string is falsy.");
// }
// ```




// ---

// ### **Truthy Values**
// A **truthy** value is any value that is not **falsy**. 
// This means all values except the seven falsy ones listed above are considered **truthy**.  

// #### Examples of Truthy Values:
// - `true`
// - Any non-zero number (e.g., `1`, `-42`, `3.14`)
// - Any non-empty string (e.g., `"hello"`, `"false"`)
// - Objects and arrays (e.g., `{}`, `[]`)
// - `Infinity` and `-Infinity`

// #### Example:
// ```javascript
// if (1) {
//   console.log("This will run because 1 is truthy.");
// }

// if ("hello") {
//   console.log("This will run because 'hello' is a non-empty string, which is truthy.");
// }

// if ({}) {
//   console.log("This will run because an object is truthy.");
// }
// ```

// ---

// ### **Explicit Conversion**
// To explicitly check the boolean value of something, you can use the `Boolean()` function or 
// the double bang `!!` operator:

// ```javascript
// console.log(Boolean(0));         // false
// console.log(Boolean("hello"));   // true
// console.log(!!null);             // false
// console.log(!!42);               // true
// ```
