const products = [
    {name: 'shampoo', price: 300, quantity: 5},
    {name: 'chiruni', price: 100, quantity: 5},
    {name: 'shirt', price: 700, quantity: 5},
    {name: 'pant', price: 1200, quantity: 5}
]

function cartTotal(products){
    let shoppingCost = 0;
    for (const product of products) {
        shoppingCost = shoppingCost + product.price * product.quantity;
    }
    return shoppingCost;
}

const totalCost = cartTotal(products);
console.log(totalCost);
