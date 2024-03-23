// Define a function that will be passed as a parameter
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Define a function that takes another function as a parameter and a name
function processUserInput(callback, name) {
    // Invoke the passed-in function with the name
    callback(name);
}

// Call processUserInput, passing in the greet function and a name
processUserInput(greet, 'Alice');
