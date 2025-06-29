// singleton        //made by constructor
// Object.create

// object literals

//this is how we declare 'Symbol' and used as key in object
const mySym = Symbol("key1")


const JsUser = {
    name: "Sourav",
    "full name": "Sourav Dishri",
    [mySym]: "mykey1",
    age: 18,
    location: "Barpali",
    email: "sourav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)

// console.log(JsUser["email"])     //we should used this
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])       //we should use like this to use 'Symbol' as 'datatype'


JsUser.email = "sourav@chatgpt.com"
// Object.freeze(JsUser)        //by the use of this, values will not change/propagate
JsUser.email = "sourav@microsoft.com"
// console.log(JsUser);


//we are adding functions inside object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //we have to use 'this' when we want reference to the 'same object'
}

console.log(JsUser.greeting);       //function not executed but get the reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());