var mobiles = [

    {
        "name": "Samsung Galaxy S10",
        "price": 50000,
        "image": "images/samsung-galaxy-s10.jpg",
        "description": "Samsung Galaxy S10 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy S10",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 1,
        "ram": "8GB"
    },
    {
        "name": "Samsung Galaxy S20",
        "price": 70000,
        "image": "images/samsung-galaxy-s20.jpg",
        "description": "Samsung Galaxy S20 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy S20",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 2,
        "ram": "12GB"
    },
    {
        "name": "Samsung Galaxy A50",
        "price": 20000,
        "image": "images/samsung-galaxy-a50.jpg",
        "description": "Samsung Galaxy A50 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A50",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 3,
        "ram": "4GB"
    },
    {
        "name": "Samsung Galaxy A70",
        "price": 25000,
        "image": "images/samsung-galaxy-a70.jpg",
        "description": "Samsung Galaxy A70 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A70",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 4,
        "ram": "6GB"
    },
    {
        "name": "Samsung Galaxy A80",
        "price": 30000,
        "image": "images/samsung-galaxy-a80.jpg",
        "description": "Samsung Galaxy A80 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A80",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 5,
        "ram": "8GB"
    },

    {
        "name": "Samsung Galaxy A90",
        "price": 35000,
        "image": "images/samsung-galaxy-a90.jpg",
        "description": "Samsung Galaxy A90 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A90",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 6,
        "ram": "8GB"
    },
    {
        "name": "Samsung Galaxy A10",
        "price": 10000,
        "image": "images/samsung-galaxy-a10.jpg",
        "description": "Samsung Galaxy A10 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A10",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 7,
        "ram": "2GB"
    },
    {
        "name": "Samsung Galaxy A20",
        "price": 15000,
        "image": "images/samsung-galaxy-a20.jpg",
        "description": "Samsung Galaxy A20 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A20",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 8,
        "ram": "3GB"
    },
    {
        "name": "Samsung Galaxy A30",
        "price": 18000,
        "image": "images/samsung-galaxy-a30.jpg",
        "description": "Samsung Galaxy A30 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A30",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 9,
        "ram": "4GB"
    },
    {
        "name": "Samsung Galaxy A40",
        "price": 19000,
        "image": "images/samsung-galaxy-a40.jpg",
        "description": "Samsung Galaxy A40 is a line of Android-based smartphones manufactured, released and marketed by Samsung Electronics.",
        "model": "Samsung Galaxy A40",
        "brand": "Samsung",
        "category": "Smartphone",
        "stock": 10,
        "id": 10,
        "ram": "4GB"
    },
  ];

  mobiles.forEach(function (mobile,index,array) {
    console.log(`Mobile Name: ${mobile.name} and Price: ${mobile.price}`);
    console.log(`index of item in the array${index}`);
    console.log(`Array length: ${array.length}`);
    console.log("-------------------------------------------------");
    console.log(`Array length: ${array}`);
  });

  let filteredMobiles =  mobiles.filter(function (mobile) {
    return (mobile.price >= 10000 && mobile.price <= 20000 && mobile.ram >= "6GB") 
   }
   );
    console.log(`Filtered Mobiles: ${filteredMobiles}`); 

// Array map method
// define array with number from 1 to 10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using map function create new array with square values of numbers array
var squareNumbers = numbers.map(function (number) {
    return number *number;
}
);


  

