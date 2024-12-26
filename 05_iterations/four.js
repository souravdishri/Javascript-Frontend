const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// keys start from '0' and by default it is number
for (const key in programming) {
    //console.log(key);    //keys
    //console.log(programming[key]);    //values
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// Don't work because map is not iterable and (also myObject is not iterable in for of loop )
// for (const key in map) {
//     console.log(key);
// }


// use: 
// for of in map
// for in object
// for of in array