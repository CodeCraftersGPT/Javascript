//User
//Demonstration of JSON => create employee object with name,age,salary,married etc and access its properties . convert to json string . acces props you wont be able to parse to object back and you will be able to


const employee = {
    name: "Alice",
    age: 30,
    salary: 100000,
    married: true
    };

console.log(employee.name);

const employeeJSON = JSON.stringify(employee);

console.log(employeeJSON);

console.log(employeeJSON.name); // undefined
console.log(employeeJSON.age); // undefined

const employeeObject = JSON.parse(employeeJSON);

console.log(employeeObject.name);
console.log(employeeObject.age);


