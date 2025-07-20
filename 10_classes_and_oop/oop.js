const user = {
    username: "sourav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("sourav", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// Note :

// `new` keyword:
//     1: after writing `new` keyword, first it creates a empty object {}, called instance
//     2: then it call a constructor function because of new keyword, (it packs all arguments inside and give it to us)
//     3: then all the arguments inject inside `this` keyword
//     4: now we get all values inside our function