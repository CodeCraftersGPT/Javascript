
const numbers1 = [1, 2, 3];
const doubledNumbers = numbers1.map((number) => number * 2);


// array map method.

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((number)=>{
    return number * number;
})
console.log(squaredNumbers);

// use cases.

const celsiusTemperatures = [22, 30, 15, 10];
const fahrenheitTemperatures = celsiusTemperatures.map((celsius) => (celsius * 9/5) + 32);


// use case 2.

const prices = [10, 20, 30];
const discountedPrices = prices.map((price) => price * 0.9); // Applying a 10% discount

