// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //insert element to infront of the array (time consuming)
// myArr.shift()        //delete element from infront of the array

//questionable methods

// console.log(myArr.includes(9));  //check whether '9' is there or not (returns true/false)
// console.log(myArr.indexOf(3));   //returns the index no. of '3'

// const newArr = myArr.join()      //bind & convert it into 'string'

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      //extract a portion of an array without modifying the original array.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //To add, remove, or replace elements in an array and modifies the original array.
console.log("C ", myArr);
console.log(myn2);                  //returns new array with removed elements

console.log("D ", myn2);
// Adding elements to myn2 using splice (at index 1, remove 0 elements, add "hero1", "hero2")
myn2.splice(1, 0, "hero1", "hero2");
console.log("After adding elements to myn2:", myn2);

console.log("D ", myn2);

// Replacing elements in myn2 using splice (at index 2, remove 1 element, add "replacedHero")
myn2.splice(2, 1, "replacedHero");
console.log("After replacing an element in myn2:", myn2);


//Difference between slice & splice

// (slice)
// Effect: Does not change the original array
// Purpose: Extracts elements into a new array
// Returns:	New array with extracted elements	

// Syntax: array.slice(startIndex, endIndex)
// startIndex: The index to start the extraction (inclusive).
// endIndex: The index to stop the extraction (exclusive).




// (splice)
// Effect: Changes the original array
// Purpose: Adds, removes, or replaces elements
// Returns: New array with removed elements (if any)

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: The index where changes will begin.
// deleteCount: The number of elements to remove.
// item1, item2, ...: Elements to add at the startIndex (optional).