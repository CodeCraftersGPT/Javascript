const person = { firstName: "Alice", age: 30 };
const details = { lastName: "Smith", city: "New York" };

const mergedPerson = { ...person, ...details };
console.log(mergedPerson);
// Output: { firstName: "Alice", age: 30, lastName: "Smith", city: "New York" }






