function sayGoodMorning() {
  console.log("Good Morning Bhai!");
}

sayGoodMorning();
sayGoodMorning();
sayGoodMorning();

function multiply(num1, num2) {
  console.log(num1 + " ka " + num2 + " se multiplication = " + num1 * num2);
}

multiply(5, 3);
multiply(50, 30);
multiply(52, 32);

function showMessage() {
  console.log("Mai function ke andar hu");
}

console.log("Line 1");
console.log("Line 2");
console.log("Line 3");

function introduce(name, age) {
  console.log("Mera naam " + name + " hai, mai " + age + " saal ka hu");
}

introduce("imran", 29);
introduce(26, "imran"); // ye maat karo bhai

function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(5,3,10)// first do hi dhyna mai lega
multiply(5)// ek hi define kiya hai toh ek nhi hai to wo undefined hai iss liye multiply kiya toh NaN aayega

// 1.
// Parameters: movieName, seatNumber, showTime
// Arguments: "Pathaan", "A12", "9 PM"

// 2. 
// 1. Rahul and iss ke baad undefined
// 2. Priya and Delhi
// 3. undefined and undefined

// 3.
function calculateBill(itemName, pricePerItem, quantity){
  const total = pricePerItem * quantity; 
  console.log("Item: " + itemName +  ", Quantity: " + quantity + ", Total: ₹" + total);
}
calculateBill("Pen",50,5)
calculateBill("Notebook",45,10);

function calculateBill(price, quantity) {
  const total = price * quantity;
  return total;
}

const billAmount = calculateBill(100,5);
console.log(billAmount);
