const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      //array can take any type of data object, boolean as well

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   //combines two or more arrays and returns a new array without modifying any existing arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]        //using spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//returns a new array with all the sub-array elements concatenated into it recursively upto the specified depth
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray([1, 2]))       //checks if its array or not  
console.log(Array.isArray('Sourav'))       //checks if its array or not  

// Array.from() creates a new array from an array-like or iterable object.
console.log(Array.from("Sourav"))       //convert to array, we can pass objects, strings as well

// With an array-like object (has length and numeric keys)
console.log(Array.from({ 0: 'a', 1: 'b', length: 2 })); // ['a', 'b']

// Objects like {name: "sourav"} are not iterable and do not have a length property, so Array.from({name: "sourav"}) returns an empty array:[]
// With a plain object (not iterable, no length)
console.log(Array.from({ name: "sourav" })) // []
// Explanation: Plain objects are NOT iterable by default, so Array.from() returns an empty array.

console.log(Array.from([1, 2, 3]))      // [1, 2, 3]
// Explanation: Arrays are iterable, so Array.from() just copies the elements.

// Example with Set (which is iterable)
console.log(Array.from(new Set([1, 2, 2, 3]))) // [1, 2, 3]

// Example with Map (which is iterable)
console.log(Array.from(new Map([['a', 1], ['b', 2]]))) // [['a', 1], ['b', 2]]

// Example with arguments object (array-like, not iterable)
function example(...args) {
    console.log(args);
}
example(1, 2, 3); // [1, 2, 3]
example({ a: 'x' }, { b: 'y' }) // [{ a: 'x' }, { b: 'y' }]

// If you want to convert an object's values to an array, use Object.values(obj) instead:
console.log(Object.values({name: "sourav"})); // ['sourav']



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //returns a new array from a set of elements



// Key Point
// - Works with iterables: strings, arrays, Sets, Maps.
// - Works with array-like objects: must have numeric keys and a length property.
// - Plain objects (like {name: "sourav"}) are NOT iterable: returns [].
// - Strings: each character becomes an array element.
// - Sets/Maps: their elements/entries become array elements.
// - Arguments object: can be converted to a real array.
// - To get object values as array, use Object.values(obj).