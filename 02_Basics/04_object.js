// singleton        //made by constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sourav",
            lastname: "dishri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// we can do like this as well, '{}' and 'obj1, obj2' is the source
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// find all 'keys' of the 'specified' object & returns it in a new 'array[]'
// console.log(Object.keys(tinderUser));

// find all 'values' of the 'specified' object & returns it in a new 'array[]'
// console.log(Object.values(tinderUser));

// we get 'array inside array', each (key,value) pairs are showed in array format
// console.log(Object.entries(tinderUser));

// checked if the object has 'isLoggedIn' type of property is present or not, & return will be in boolean (true/false)
// use this to 'avoid crash', if it's 'not present' 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// Destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sourav"
}

// course.courseInstructor

//object destructuring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "sourav",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
