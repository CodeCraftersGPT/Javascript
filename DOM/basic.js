// define array with number from 1 to 10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using map function create new array with square values of numbers array
var squareNumbers = numbers.map(function (number) {
    return number *number;
}
);
console.log(squareNumbers);


