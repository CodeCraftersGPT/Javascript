// define array with books
const books = [ 'Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities' ];
//console.log(books); // [ 'Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities' ]
//push new book to the array
books.push('Oliver Twist');
//console.log(books); // [ 'Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities', 'Oliver Twist' ] 

// define another books array with different books call it is book1
const book1 = [ 'Don Quixote', 'The Hobbit', 'Alice in Wonderland', 'Tale of Two Cities' ];

books = book1; // TypeError: Assignment to constant variable.