// object with nested object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:30,
    isStudent:false,
    greet:function(){
      console.log("wecome to " + this.firstName);
    },
    address:{
      street: "123 main street",
      city:"New York"
    }
}

console.log(person.address.street)




