// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toJSON());
// console.log(myDate.toISOString()); 
console.log(myDate.toLocaleDateString());   //only date
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)   //Month starts in '0' on JS because its 'Array'
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")   //for custom
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());        //milliseconds
// console.log(Math.floor(Date.now()/1000));    //seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
