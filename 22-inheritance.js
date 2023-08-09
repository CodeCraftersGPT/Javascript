class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greet() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  }

  const person1 = new Person("John", "Doe");
const person2 = new Person("Alice", "Smith");

person1.greet(); // Output: "Hello, John Doe!"
person2.greet(); // Output: "Hello, Alice Smith!"

//Inheritance

class Student extends Person {
    constructor(firstName, lastName, studentId) {
      super(firstName, lastName);
      this.studentId = studentId;
    }
  
    study() {
      console.log(`${this.firstName} is studying.`);
    }
  }

  
  // Inheritance Hierarchy

  class Animal {
    // ...
  }
  
  class Mammal extends Animal {
    // ...
  }
  
  class Dog extends Mammal {
    // ...
  }
  
  const dog = new Dog();