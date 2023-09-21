const user = {
    name: "Alice",
    details: {
      age: 28,
      email: "alice@example.com"
    }
  };
  
  const {
    name,
    details: { age, email }
  } = user;
  
  console.log(name);  // Output: Alice
  console.log(age);   // Output: 28
  console.log(email); // Output: alice@example.com


  // Destructuring function parameters
function printUser({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
  }
  
  const akuser = { firstName: "John", lastName: "Doe" };
  printUser(akuser); // Output: John Doe
  
  

  const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
  ];
  
  for (const { name, age } of people) {
    console.log(`${name} is ${age} years old.`);
  }
  // Output:
  // John is 30 years old.
  // Alice is 25 years old.
  // Bob is 35 years old.
  