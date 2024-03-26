// Arrow function with reducer.

let numbers = [1,2,3,4,5,6,7,8,9,10];

     // calculate the sum using the reduce method.
    // tradition functin
 
    let sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue
    );
    console.log(sum);

// Arrow functions with map

let aknumbers = [1,2,3,4,5,6,7,8,9,10];
let square = aknumbers.map(number => number * number);
