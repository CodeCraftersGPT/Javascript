//spread parameters in the array literals

const fruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];

const result = [...fruits,...moreFruits];

// for (let index = 0; index < moreFruits.length; index++) {
//     const element = moreFruits[index];
//     result.push(element);
    
// }

// for (let index = 0; index < fruits.length; index++) {
//     const element = moreFruits[index];
//     result.push(element);
    
// }

console.log(result);