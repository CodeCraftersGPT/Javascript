// using spread parameter with array literals.

function displayNumbers(a, b, c) {
    console.log(a, b, c);
  }
  
  const numbers = [1, 2, 3];
  
  displayNumbers(...numbers); // Output: 1 2 3


  
  