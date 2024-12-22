// var c = 300   //Global scope
let a = 300
if (true) {
    let a = 10      //Local scope
    const b = 20
    // console.log("INNER: ", a);

}


// console.log(a);
// console.log(b);
// console.log(c);

// Global scope is different for both 'node environment' and 'browser environment'

function one() {
    const username = "sourav"

    function two() {
        const website = "youtube"
        // A 'closure' in JavaScript is a function that can access the variables in its parent function's scope, 
        // even after the parent function has returned
        console.log(username);  //can access outer function variables, (for it, it is his global scope)
    }
    // console.log(website);    //(can not access)

    two()

}

// one()

if (true) {
    const username = "sourav"
    if (username === "sourav") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);    //(no access)
}

// console.log(username);   //(no access)


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num) {
    return num + 1
}


//here we are holding in a variable, with declaration, so it show 'error'
//addTwo(5)
const addTwo = function (num) {
    return num + 2
}