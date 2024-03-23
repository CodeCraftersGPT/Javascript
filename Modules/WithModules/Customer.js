
export function add(a,b) {
    return a + b;
}
export class  Customer {
    constructor(name,age,address,mobile) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.mobile = mobile;
    }
    // define a method to print customer details
    printCustomerDetails() {
        console.log(`Name: ${this.name} Age: ${this.age} Address: ${this.address} Mobile: ${this.mobile}`);
    }
}

// define an array of customers

export let customers = [
    new Customer("Rajesh",21,"Bangalore",1234567890),
    new Customer("Ramesh",22,"Mysore",1234567890),
    new Customer("Rakesh",23,"Mangalore",1234567890),
    new Customer("Rajesh",24,"Chennai",1234567890),
    new Customer("Rajesh",25,"Hyderabad",1234567890),
    new Customer("Rajesh",26,"Delhi",1234567890),
    new Customer("Rajesh",27,"Mumbai",1234567890),
    new Customer("Rajesh",28,"Kolkata",1234567890),
    new Customer("Rajesh",29,"Pune",1234567890),
    new Customer("Rajesh",30,"Ahmedabad",1234567890),
    new Customer("Rajesh",31,"Jaipur",1234567890),
    new Customer("Rajesh",32,"Chandigarh",1234567890),
    new Customer("Rajesh",33,"Lucknow",1234567890),
    new Customer("Rajesh",34,"Kanpur",1234567890),
    new Customer("Rajesh",35,"Patna",1234567890),
    new Customer("Rajesh",36,"Bhopal",1234567890),
    new Customer("Rajesh",37,"Indore",1234567890),
    new Customer("Rajesh",38,"Nagpur",1234567890),
    new Customer("Rajesh",39,"Vishakapatnam",1234567890),
    new Customer("Rajesh",40,"Coimbatore",1234567890),
    new Customer("Rajesh",41,"Kochi",1234567890),
    new Customer("Rajesh",42,"Trivandrum",1234567890),
    new Customer("Rajesh",43,"Kozhikode",1234567890),
    new Customer("Rajesh",44,"Srinagar",1234567890),
    new Customer("Rajesh",45,"Jammu",1234567890),
    new Customer("Rajesh",46,"Shimla",1234567890),
    new Customer("Rajesh",47,"Dehradun",1234567890),
    new Customer("Rajesh",48,"Gangtok",1234567890),
];

// print all customer details using forEach method

customers.forEach(customer => customer.printCustomerDetails());

// print all customer details using filter method

let filteredCustomers = customers.filter(customer => customer.age > 30);

