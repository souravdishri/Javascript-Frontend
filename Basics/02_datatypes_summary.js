//  Primitive (call by value)   (use stack memory)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// Symbol (used to make any value unique (ex. Component - button))
// BigInt (Scientific value/big values)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')    //return type will be symbol
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

// const bigNumber = 3456543576654356754n



// Non primitive (Call by Reference)    (use heap memory)

// Array, Objects, Functions
//  Return type will be object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sourav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory

// Stack Memory = (Primitive, here we got the copy)
// Heap Memory = (Non-Primitive, here we got the reference)