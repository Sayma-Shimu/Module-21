const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color:'black'},
    {name: 'Xoami', price: 18000, camera: '12mp', color:'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color:'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color:'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color:'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color:'black'}
]

function cheapestPhone(array){
    let cheapPhone = phones[0];
    for (const element of array) {

        if(element.price < cheapPhone.price){
            cheapPhone = element
        }        
    }
    return cheapPhone;
}

const  phonePrice = cheapestPhone(phones);
console.log(phonePrice);
