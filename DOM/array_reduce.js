//array reduce.
let mobiles = [
    {
    name: "Samsung Galaxy M31",
    price: 14999,
    },
    {
    name: "Redmi Note 9 Pro",
    price: 13999,
    },
    {
    name: "Redmi Note 9 Pro Max",
    price: 18999,
    },
    {
    name: "Iphone 13x",
    price: 45000,
    }
    ];


   // reduce method
    let totalPrice = mobiles.reduce((total,item)=>{
        total = total + item['price'];
       return total;
       },100);

       console.log(totalPrice);


       

       