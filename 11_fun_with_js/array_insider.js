const myArr = []
%DebugPrint(myArr)

// JavaScript arrays are dynamic and can hold elements of different types.
// They are implemented as objects with numeric keys.

// Array are of two types:
// 1. Continious (packed) (means no holes inside)
// 2. Holey (simply means holes inside)

// Optimization for arrays in JavaScript are done in 3 types:

// 1. SMI (Small Integer Arrays) (it's a type of Array)
// 2. Packed element
// 3. Double (float, string, function)

// SMI arrays are the most optimized, they are used when all elements are integers
// Packed element arrays are used when all elements are of the same type (e.g., all strings)
// Double arrays are used when elements are of mixed types (e.g., numbers, strings, functions)

// Example of a PACKED_SMI_ELEMENTS array
const arrTwo = [1, 2, 3, 4, 5]

const arr = [1, 2, , 4, 5] // this element has a hole

// now it becomes PACKED_DOUBLE_ELEMENTS 
arrTwo.push(6.0)
// (if we delete this also, we can't go back to PACKED_SMI_ELEMENTS)
// once it downgrade we can't able to upgrade, compiler doesn't allow us to do it

// now it becomes PACKED_ELEMENTS 
arrTwo.push('7')

// now it will becomes HOLEY ELEMENTS because it has included different types and as well as holes
arrTwo[10] = 11

console.log(arrTwo);
console.log(arrTwo.length); // length is 11, but only 6 elements are defined
// output: [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// (<3 empty items>), this makes our array less optimized, as it introduced holes inside 

console.log(arrTwo[19]);
// output: undefined (it's a costly operation)


// when we wants to access elements in Array we have:
// 1. Bound check:
// 2. hasOwnProperty(arrTwo, 9)
// 3. hasOwnProperty(arrTwo.prototype, 9)
// 4. hasOwnProperty(Object.prototype, 9)


// Steps:

// 1. bound check: (easy), array starts from 'x' position and length is 'y', if you ask besides this it shows 'z'

// if we had 'holes' and asking for 'high index' like 'arrTwo[19]', it checks bound and 
// tells you are asking for out of bound values, so it returns 'undefined'

// (difficult case) if we ask 'arrTwo[9]', inside that is HOLEY_ARRAY it has holes it pass the bound case 
// then it goes to  [ 2. hasOwnProperty(arrTwo, 9), checked either True/False], if it returns 'undefined'

// then it goes to  [ 3. hasOwnProperty(arrTwo.prototype, 9)], if it don't get
// then it goes to [4. hasOwnProperty(Object.prototype, 9) ]

// 'hasOwnProperty()' type 'check' is the most expensive in javasript
// holes are very expensive


const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);   // bound check, (optimize done)
console.log(arrThree[8]);   // out of bound, returns undefined (optimize done)


// SMI > DOUBLE > PACKED (Continious)
// same as [PACKED SMI > PACKED DOUBLE > PACKED (PACKED ELEMENTS)]

// H_SMI > H_DOUBLE > H_PACKED (Holes)

// combination of these present in everything like (for, for..of, forEach) present in upto more than 30 variations



const arrFour = new Array(3)    // just three holes, HOLEY_SMI_ELEMENTS
arrFour[0] = '1'    // HOLEY_ELEMENTS. less optimize
arrFour[1] = '2'    // HOLEY_ELEMENTS
arrFour[2] = '3'    // HOLEY_ELEMENTS

//more optimize than the previous one
const arrFive = []
arrFive.push('1')   // PACKED_ELEMENTS
arrFive.push('2')   // PACKED_ELEMENTS
arrFive.push('3')   // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4, 5] //SMI
arrSix.push(NaN)            //PACKED_DOUBLE
arrSix.push(Infinity)    //PACKED_DOUBLE


// Recommended to use internal default methods
// for, for..of, forEach 
