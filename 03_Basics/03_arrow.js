const user = {
    username: "sourav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // show current context that is.
        // {
        //     username: "sourav",
        //     price: 999,
        //     welcomeMessage: [function: welcomeMessage] 
        // }
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);       //empty object that is '{}' will show on node environment
// 'window {}' is the global object in the browser


// function chai(){
//     let username = "sourav"
//     console.log(this.username);  //(we can't use like this in function as before we are using in object)
// }

// chai()


// const chai = function () {
//     let username = "sourav"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sourav"
    console.log(this.username); //output will be 'undefined'
    console.log(this);          //output will be '{}' empty object
}


// chai()

// const addTwo = (num1, num2) => {     //if we are using "{}" we must have to 'return' keyword
//     return num1 + num2               //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2      //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )   //if we are using "()" we don't need to write 'return' keyword

const addTwo = (num1, num2) => ({username: "sourav"})   //return object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()