
function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// sayMyName    //(reference)
// sayMyName()  //(execute)

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){   //this is called 'parameters'

    // let result = number1 + number2
    // return result
    return number1 + number2
    //console.log("This will not executed");  //(this will not executed as it is after return)
    
}

const result = addTwoNumbers(3, 5)  //this is called 'arguments'

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){    //default values
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sourav"))
// console.log(loginUserMessage("sourav"))


function calculateCartPrice(val1, val2, ...num1){   //(rest/spread) operator
    return num1     //returns [500, 2000]
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "sourav",
    prices: 199
}

//How to pass 'object' in function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   //Mandatory object name

handleObject({
    username: "sam",
    price: 399
})


//How to pass 'array' in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));