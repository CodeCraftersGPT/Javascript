function createGreeting(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

// Get the returned function and invoke it
const greetHello = createGreeting("Hello");
greetHello("Alice"); // Outputs: Hello, Alice!

const greetHi = createGreeting("Hi");
greetHi("Bob"); // Outputs: Hi, Bob!
