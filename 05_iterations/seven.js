const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


// comparison between `map()` and `filter()`

// Feature:    	map()
// Purpose:    	Transforms each element in an array and returns a new array with the transformed elements.
// Output Size:	Output array is always the same length as the input array (unless explicitly filtered inside)
// Returns:    	New array with modified elements
// Callback Function: The callback function modifies each element (e.g., transforming or calculating)
// Use Case:   	Use when you need to modify or transform each element of the array


// Feature:    	filter()
// Purpose:    	Filters the elements of an array based on a condition and returns a new array with only matching elements.
// Output Size:	Output array may be smaller than the input array, depending on the condition.
// Returns:    	New array with elements that meet the condition.
// Callback Function: The callback function decides whether an element is included (returns true) or excluded (false).
// Use Case:   	Use when you need to extract a subset of the array based on a condition.
