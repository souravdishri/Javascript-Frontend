const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/souravdishri')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all




// Note:

//     A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// 🧩 Key Components:
//     resolve(value): Marks the promise as fulfilled with a value.

//     reject(error): Marks the promise as failed with an error.

//     .then(onFulfilled): Handles the success case.

//     .catch(onRejected): Handles the error case.

//     .finally(): Runs regardless of success or failure.


// The fetch() function is used to make HTTP requests. It returns a Promise.






// 🚀 Modern Best Practices (2025)

// Here’s what’s hot and recommended now:

// ✅ Use async/await over .then/.catch for readability

// ✅ Always handle errors with try/catch

// ✅ Use const and let (never var)

// ✅ Use optional chaining (?.) and nullish coalescing (??)

// ✅ Modularize code with ES Modules (import/export)

// ✅ Avoid callback hell by chaining Promises or using async/await

// ✅ Use fetch() with AbortController for cancelable requests

// ✅ Prefer declarative code (e.g., map, filter, reduce)



// Let’s take a look at how both`.then()` / `.catch()` and `async/await` can work with `Promise.all()` to handle multiple asynchronous operations.

// ### 🔗 `Promise.all()` Explained

// `Promise.all()` takes an array of Promises and returns a single Promise that resolves when ** all ** of them are resolved, or rejects if ** any one ** fails.



// ### ✅ Using`.then()` / `.catch()`

//     ```js
// const fetchUser = () => fetch("https://api.example.com/user").then(res => res.json());
// const fetchPosts = () => fetch("https://api.example.com/posts").then(res => res.json());
// const fetchComments = () => fetch("https://api.example.com/comments").then(res => res.json());

// Promise.all([fetchUser(), fetchPosts(), fetchComments()])
//   .then(([user, posts, comments]) => {
//     console.log("User:", user);
//     console.log("Posts:", posts);
//     console.log("Comments:", comments);
//   })
//   .catch(error => {
//     console.error("Something went wrong:", error);
//   });
// ```

// ---



// ### 🌟 Using`async/await`

//     ```js
// async function getAllData() {
//   try {
//     const [user, posts, comments] = await Promise.all([
//       fetch("https://api.example.com/user").then(res => res.json()),
//       fetch("https://api.example.com/posts").then(res => res.json()),
//       fetch("https://api.example.com/comments").then(res => res.json())
//     ]);

//     console.log("User:", user);
//     console.log("Posts:", posts);
//     console.log("Comments:", comments);
//   } catch (error) {
//     console.error("Something went wrong:", error);
//   }
// }

// getAllData();
// ```



// ### 🎯 Which One's Better?

// - Both approaches **do exactly the same thing **.
// - But`async/await` is generally preferred for ** clarity **, especially when dealing with more complex logic or nested flows.
// - If you're inside a `map()` or dealing with short callbacks, chaining with `.then()` might still make sense.
