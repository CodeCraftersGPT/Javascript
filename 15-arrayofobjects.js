// array of objects
const books = [
    {
        title:"The Great Gatsby",
        author:"Scott",
        year:1925
    },
    {
        title:"To Kill a Mockingbird",
        author:"Harper",
        year:1960
    },
    {
        title:"1984",
        author:"George Orwell",
        year:1949
    },
]

// for loop and book object

for (let index = 0; index < books.length; index++) {
    const book = books[index];
    console.log(book);
    console.log(book.title);
}









