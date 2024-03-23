// add all product related code here.

// Define Product class with product id, product name, product price, product description, product rating and some random methods
// Define Product Array.

export class Product {
    constructor(productId,productName,productPrice,productDescription,productRating) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productRating = productRating;
    }

    // define a method to print product details
    printProductDetails() {
        console.log(`Product Id: ${this.productId} Product Name: ${this.productName} Product Price: ${this.productPrice} Product Description: ${this.productDescription} Product Rating: ${this.productRating}`);
    }
}

// Define an array of products

export let products = [
    new Product(1,"Samsung Galaxy M31",14999,"Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(2,"Redmi Note 9 Pro",13999,"Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)",4.5),
    new Product(3,"Redmi Note 9 Pro Max",18999,"Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage)",4.5),
    new Product(4,"Iphone 13x",45000,"Iphone 13x (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(5,"Samsung Galaxy M31",14999,"Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(6,"Redmi Note 9 Pro",13999,"Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)",4.5),
    new Product(7,"Redmi Note 9 Pro Max",18999,"Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage)",4.5),
    new Product(8,"Iphone 13x",45000,"Iphone 13x (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(9,"Samsung Galaxy M31",14999,"Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(10,"Redmi Note 9 Pro",13999,"Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)",4.5),
    new Product(11,"Redmi Note 9 Pro Max",18999,"Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage)",4.5),
    new Product(12,"Iphone 13x",45000,"Iphone 13x (Space Black, 6GB RAM, 128GB Storage)",4.5),
    new Product(13,"Samsung Galaxy M31",14999,"Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",4.5),
];