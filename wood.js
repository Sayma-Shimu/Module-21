function woodQuantity(chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQty * perChairWood;
    const tableTotalWood = tableQty * perTableWood;
    const bedTotalWood = bedQty * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood
}

const wood = woodQuantity(6, 3, 4);
console.log(wood);


// cloth------
function clothQuantity(shirtQty, pantQty, shoeQty){
    const perShirtPrice = 1500;
    const perPantPrice = 1200;
    const perShoePrice = 1200;

    const shirtTotalPrice = perShirtPrice * shirtQty;
    const pantTotalPrice = pantQty * perPantPrice;
    const shoeTotalPrice = shoeQty * perShoePrice;

    const total = shirtTotalPrice + shoeTotalPrice +pantTotalPrice;
    return total;
}

const cloth = clothQuantity(2, 1, 1);
console.log(cloth);

