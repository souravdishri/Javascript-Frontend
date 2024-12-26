// reduce() method executes a user-supplied 'reducer' callback function on each element of the array 

// accumulator, first time it takes initial value then, 
// afterwards it takes sum of (accumulator + currentValue) and so on..
// Callback Function Arguments:

// accumulator: The value being accumulated during the iteration.
// currentValue: The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The array being reduced.
// Initial Value (optional):

// If provided, it sets the starting value for the accumulator. If not, the first element of the array is used as 
// the initial value, and the iteration starts from the second element.

// The reduce() method in JavaScript is a powerful array method used to reduce an array to a single value 
// by applying a callback function repeatedly for each element.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);




// When to Use reduce():
// When you need to calculate a single value (sum, product, max, etc.) from an array.
// When you need to transform an array into a different structure (e.g., object, concatenated string).
// When combining elements or applying custom accumulation logic.

// Tip:
// Start with simpler methods like map() or filter() when appropriate.
// Use reduce() when the task requires cumulative calculations or transformations.




// // Examples:
// ### **Step-by-Step Explanation**

// ---

// ### **Example 1: Finding the Maximum Value in an Array**

// #### **Code:**
// ```javascript
// const numbers = [10, 5, 8, 12, 3];
// const max = numbers.reduce((accumulator, currentValue) => 
//   currentValue > accumulator ? currentValue : accumulator
// );

// console.log(max); // Output: 12
// ```

// #### **Step-by-Step:**
// 1. **Purpose**: Find the largest number in the array.
// 2. **Initial Setup**: 
//    - The `reduce()` method starts with the first element (`10`) as the `accumulator` because no `initialValue` is provided.
// 3. **Iteration Steps**:
//    - **First Iteration**:
//      - `accumulator = 10`, `currentValue = 5`.
//      - Compare: `5 > 10` → False.
//      - Result: `accumulator` remains `10`.
//    - **Second Iteration**:
//      - `accumulator = 10`, `currentValue = 8`.
//      - Compare: `8 > 10` → False.
//      - Result: `accumulator` remains `10`.
//    - **Third Iteration**:
//      - `accumulator = 10`, `currentValue = 12`.
//      - Compare: `12 > 10` → True.
//      - Result: Update `accumulator` to `12`.
//    - **Fourth Iteration**:
//      - `accumulator = 12`, `currentValue = 3`.
//      - Compare: `3 > 12` → False.
//      - Result: `accumulator` remains `12`.
// 4. **Final Output**:
//    - The largest value in the array is `12`.



// ---

// ### **Example 2: Transforming an Array into an Object**

// #### **Code:**
// ```javascript
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];

// const userObject = users.reduce((accumulator, user) => {
//   accumulator[user.id] = user.name;
//   return accumulator;
// }, {});

// console.log(userObject);
// // Output: { 1: "Alice", 2: "Bob", 3: "Charlie" }
// ```

// #### **Step-by-Step:**
// 1. **Purpose**: Convert an array of objects into a single object where `id` is the key and `name` is the value.
// 2. **Initial Setup**:
//    - Start with an empty object `{}` as the `accumulator` (provided as the `initialValue`).
// 3. **Iteration Steps**:
//    - **First Iteration**:
//      - `user = { id: 1, name: "Alice" }`.
//      - Add: `accumulator[1] = "Alice"`.
//      - Result: `accumulator = { 1: "Alice" }`.
//    - **Second Iteration**:
//      - `user = { id: 2, name: "Bob" }`.
//      - Add: `accumulator[2] = "Bob"`.
//      - Result: `accumulator = { 1: "Alice", 2: "Bob" }`.
//    - **Third Iteration**:
//      - `user = { id: 3, name: "Charlie" }`.
//      - Add: `accumulator[3] = "Charlie"`.
//      - Result: `accumulator = { 1: "Alice", 2: "Bob", 3: "Charlie" }`.
// 4. **Final Output**:
//    - The array is transformed into the object: `{ 1: "Alice", 2: "Bob", 3: "Charlie" }`.

// ---

// ### **Key Points**:
// - **Example 1** finds the maximum value by comparing each element.
// - **Example 2** builds an object dynamically by using keys (`id`) and values (`name`) from the array elements.