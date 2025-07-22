// Modern syntax
// we will use this when we don't want everyone to access properties directly 

class User {
    constructor(email, password) {
        //when we create the properties, it automatically creates getter(), setter() method in the same name
        this.email = email;
        this.password = password
    }

    //it's overriding the default getter() and setter() methods
    //we can use different variable name to avoid confusion with the constructor method
    //method names should be same as the property names
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }


    get password() {
        return `${this._password}sourav`
    }

    set password(value) {
        this._password = value
    }
}


const sourav = new User("s@sourav.ai", "abc")
console.log(sourav.email);