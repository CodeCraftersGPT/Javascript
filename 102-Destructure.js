// Basic array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Skipping elements
const [x, , z] = numbers;
console.log(x); // Output: 1
console.log(z); // Output: 3

// Default values
const [p, q, r, s = 4] = numbers;
console.log(s); // Output: 4 (s uses the default value because there's no corresponding element in 'numbers')


// Basic object destructuring
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

// Renaming variables during destructuring
const { firstName: fName, lastName: lName } = person;
console.log(fName); // Output: John
console.log(lName); // Output: Doe

// Default values
const { age = 30 } = person;
console.log(age); // Output: 30 (age uses the default value because it's not present in 'person')

