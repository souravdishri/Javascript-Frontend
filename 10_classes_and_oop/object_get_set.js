// Older syntax
// we will use this when we don't want everyone to access properties directly 

const User = {
    _email: 's@sd.com',
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

// here we are using factory function to create an object
const tea = Object.create(User)
console.log(tea.email);