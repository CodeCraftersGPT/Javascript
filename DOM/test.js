// define mobile array for mobiles with name, price, image, description,model,brand,category,stock,id,ram

var mobiles = [

    {
        "name": "Samsung Galaxy S10",
        "price": 50000,
       
    },
    {
        "name": "Samsung Galaxy S20",
        "price": 70000,
     
    },
    {
        "name": "Samsung Galaxy A50",
        "price": 20000,
        
    },
    {
        "name": "Samsung Galaxy A70",
        "price": 25000,
       
    },
    {
        "name": "Samsung Galaxy A80",
        "price": 30000,
       
    },

    {
        "name": "Samsung Galaxy A90",
        "price": 35000,
        
    },
    {
        "name": "Samsung Galaxy A10",
        "price": 10000,
        
    },
    {
        "name": "Samsung Galaxy A20",
        "price": 15000,
       
    },
    {
        "name": "Samsung Galaxy A30",
        "price": 18000,
        
    },
    {
        "name": "Samsung Galaxy A40",
        "price": 19000,
       
    },
  ];

// for above array map method to display the mobiles with name and price in html list using template literals

var mobileItems = mobiles.map(function(mobile){
    return `
    <li>${mobile.name}:${mobile.price}</li>
    `
}
);

document.getElementById("root").innerHTML = `<ul>${mobileItems.join('')}</ul>`;







    
