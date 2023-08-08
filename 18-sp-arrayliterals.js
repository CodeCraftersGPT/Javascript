// Using Spread Parameter with Array Literals:
const fruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];

const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // Output: ["apple", "banana", "orange", "grape"]


//cloning arrays;
const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];

console.log(cloneArray); // Output: [1, 2, 3]
console.log(originalArray === cloneArray); // Output: false (they are separate arrays)
