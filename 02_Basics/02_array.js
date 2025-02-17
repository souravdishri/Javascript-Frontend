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



console.log(Array.isArray([1,2]))       //checks if its array or not  
console.log(Array.isArray('Sourav'))       //checks if its array or not  
console.log(Array.from("Sourav"))       //convert to array, we can pass objects, strings as well
console.log(Array.from({name: "sourav"})) // interesting, returns empty array as it can't convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //returns a new array from a set of elements