// from
const set = new Set([1, 2, 3]);
const array = Array.from(set);
console.log(array); // Output: [1, 2, 3]

//of
const array1 = Array.of(1, 2, 3);
console.log(array1); // Output: [1, 2, 3]

//find
const numbers = [10, 20, 30, 40, 50];
const result = numbers.find(num => num > 25);
console.log(result); // Output: 30

//findIndex

const numbers1 = [10, 20, 30, 40, 50];
const index = numbers1.findIndex(num => num > 25);
console.log(index); // Output: 2 (index of the element 30)


//filter

const numbers2 = [10, 20, 30, 40, 50];
const filtered = numbers2.filter(num => num > 25);
console.log(filtered); // Output: [30, 40, 50]


//includes
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.includes(3)); // Output: true
console.log(numbers3.includes(6)); // Output: false

//some
const numbers4 = [1, 2, 3, 4, 5];
const hasEven = numbers4.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

//every
const numbers5 = [1, 2, 3, 4, 5];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true



