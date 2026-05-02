function calculateBill(itemName, pricePerItem, quantity){
  const total = pricePerItem * quantity; 
  console.log("Item: " + itemName +  ", Quantity: " + quantity + ", Total: ₹" + total);
}
calculateBill("Pen",50,5)
calculateBill("Notebook",45,10);

function calculateBill1(price, quantity) {
  const total = price * quantity;
  return total;
}

const billAmount = calculateBill1(100,5);
console.log(billAmount);

const gst = billAmount * 0.18
console.log("GST: " + gst);
const delivery = 50;

const finalAmount = billAmount + gst + delivery;
console.log("Final amount: " + finalAmount);

function add(num1, num2) {
    return num1 + num2;
}


function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(add(5,3), 2));

