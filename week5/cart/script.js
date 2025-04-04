let shoppingCart=
[
{name:"T-shirt",price:20},
{name:"Jeans",price:50},
{name:"T-shirt",price:80},
{name:"T-shirt",price:30},
];
console.log(shoppingCart);
let total=0;
for(leti=0;i<shoppingCart.length;i++)
{total=total+shoppingCart[i].price;
console.log("Total so far is",total);
}
console.log("Discounted price is",total);
let discount=0.1;
if(total>100)
{
    let discountedPrice=total-total*discount;
    console.log("Discounted price is",discountedPrice);
}
