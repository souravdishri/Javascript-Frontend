// Immediately Invoked Function Expressions (IIFE)

// Purpose: (To remove the global scope pollution like variables)
// use ';' to stop flow
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sourav')
