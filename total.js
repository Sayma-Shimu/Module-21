const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]

function getShoppingTotal(products){
    let total = 0;
    for (const element of products) {
        total = total + element.price;      
    }
    return total
}

const shoppingCost = getShoppingTotal(products);
console.log(shoppingCost);
