const getDiscount = function(price, discountPercent){
    discountAmount = price * (discountPercent / 100)
    return discountAmount;
}

const d1 = getDiscount(1000,10)
console.log(d1);

const d2 = getDiscount(2500,20);
console.log(d2);