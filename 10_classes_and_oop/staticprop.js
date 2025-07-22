class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    // Static method, it does not give the access
    static createId() {
        return `123`
    }
}

const sourav = new User("sourav")
// console.log(sourav.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());