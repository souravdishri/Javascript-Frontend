//Object.getOwnPropertyDescriptor() => (show hidden stuffs)

//'Math' is the object and 'PI' is the property name, that is 'key' whose value is 3.14 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI); //(universal constant, can't be changed)
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we can define property by the help of Object.defineProperty() 
// here we are making the 'name' property non-writable, so it can't be changed
Object.defineProperty(chai, 'name', {
    //writable: false,
    //enumerable: false,    (when we don't want the object's properties to be the part of the loop)
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// Iterating over the properties of 'chai' object
// Object.entries() returns an array of key-value pairs of the object
// We are logging only the properties that are not functions
console.log("Properties of chai object:");
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}