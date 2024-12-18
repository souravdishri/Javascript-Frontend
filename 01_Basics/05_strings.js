const name = "sourav"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new = (object), String = (constructor)
const gameName = new String('sourav-sd-com', 'aa')
// String is the object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 8)
// 0   1   2   3   4   5   6   7   8   9   10  11  12
// 's   o   u   r   a   v   -   s   d   -   c   o   m'
// -13 -12 -11 -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

console.log(anotherString);

// Rule of slicing (slice(start, end)):
// Slicing works left-to-right (start index must be less than end index)
// Since slicing doesn’t work in reverse, the result is an empty string ("")

const newStringOne = "   sourav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sourav.com/sourav%20dishri"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// console.log(gameName.split());

// const str = gameName.split('-');
// console.log(str[2]);  




