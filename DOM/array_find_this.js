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


    // demonstrate the use of findIndex() method which has price > 13000

//     let index = mobiles.find(function(mobile)  {
//         return mobile.price > this; // hard coding the price which i want to comparen
//     },18000
//     );
// console.log(index);

var  mobiles1 = mobiles.filter((item)=>
{
    return item.price>15000;
});

console.log(mobiles1);