import {customers,Customer,add} from './Customer.js';

export class Order {
    constructor(orderId,orderDate,customerId,customerName,productId,productName,productPrice,quantity,totalPrice) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.customerId = customerId;
        this.customerName = customerName;
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    // define a method to print order details
    printOrderDetails() {
        // create object of customer class
        let cutomer = new Customer(this.customerId,this.customerName);
        console.log(cutomer.name,cutomer.age);
        
        add(10,20);
                
        let customer = customers.find(customer => customer.customerId == this.customerId);
        console.log(customer);

        console.log(`Order Id: ${this.orderId} Order Date: ${this.orderDate} Customer Id: ${this.customerId} Customer Name: ${this.customerName} Product Id: ${this.productId} Product Name: ${this.productName} Product Price: ${this.productPrice} Quantity: ${this.quantity} Total Price: ${this.totalPrice}`);
    }
}

// define an array of orders

export let orders = [
    new Order(1,"2021-09-01",1,"Rajesh",1,"Samsung Galaxy M31",14999,1,14999),
    new Order(2,"2021-09-02",2,"Ramesh",2,"Redmi Note 9 Pro",13999,1,13999),
    new Order(3,"2021-09-03",3,"Rakesh",3,"Redmi Note 9 Pro Max",18999,1,18999),
    new Order(4,"2021-09-04",4,"Rajesh",4,"Iphone 13x",45000,1,45000),
    new Order(5,"2021-09-05",5,"Rajesh",1,"Samsung Galaxy M31",14999,1,14999),
    new Order(6,"2021-09-06",6,"Rajesh",2,"Redmi Note 9 Pro",13999,1,13999),
    new Order(7,"2021-09-07",7,"Rajesh",3,"Redmi Note 9 Pro Max",18999,1,18999),
    new Order(8,"2021-09-08",8,"Rajesh",4,"Iphone 13x",45000,1,45000),
    new Order(9,"2021-09-09",9,"Rajesh",1,"Samsung Galaxy M31",14999,1,14999),
    new Order(10,"2021-09-10",10,"Rajesh",2,"Redmi Note 9 Pro",13999,1,13999),
    new Order(11,"2021-09-11",11,"Rajesh",3,"Redmi Note 9 Pro Max",18999,1,18999),
    new Order(12,"2021-09-12",12,"Rajesh",4,"Iphone 13x",45000,1,45000),
    new Order(13,"2021-09-13",13,"Rajesh",1,"Samsung Galaxy M31",14999,1,14999),
    new Order(14,"2021-09-14",14,"Rajesh",2,"Redmi Note 9 Pro",13999,1,13999),
    new Order(15,"2021-09-15",15,"Rajesh",3,"Redmi Note 9 Pro Max",18999,1,18999)
];

// print all order details using forEach method

//orders.forEach(order => order.printOrderDetails());

// print all order details using filter method

// let filteredOrders = orders.filter(order => order.customerId == 1);

// filteredOrders.forEach(order => order.printOrderDetails());

