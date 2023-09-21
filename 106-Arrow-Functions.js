// Traditional function expression
const add = function (a, b) {
    return a + b;
  };
  
  // Arrow function
  const addArrow = (a, b) =>{ 
    console.log(a);
    console.log(b);
    return a + b;
  };
  
  console.log(add(5, 3));      // Output: 8
  console.log(addArrow(5, 3)); // Output: 8
  

  const greet = () => "Hello, world!";
console.log(greet()); // Output: "Hello, world!"

const double = (x) => x * 2;
console.log(double(4)); // Output: 8


const triple = x => x * 3;
console.log(triple(4)); // Output: 12


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15

//objects

const person = {
    name: "John",
    sayHello: () => {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  
  person.sayHello(); // Output: "Hello, my name is undefined"
  