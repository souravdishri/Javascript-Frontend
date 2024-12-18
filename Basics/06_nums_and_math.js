const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));     //Output: 100.00(use case. ecommerce,..)

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));     //Output: 124
console.log(otherNumber.toPrecision(4));     //Output: 123.9 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);       //Object
// console.log(Math.abs(-4));   //(-) changes to (+)
// console.log(Math.round(4.6));    //shows roundup value
// console.log(Math.ceil(4.2));     //choose top value
// console.log(Math.floor(4.9));    //choose bottom value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());     //value ranges between (0 - 1)
console.log((Math.random()*10) + 1);    //(use like this to avoid may be '0' or 'BODMAS' rule)
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// Remember this formula, use this when we need any range
console.log(Math.floor(Math.random() * (max - min + 1)) + min)