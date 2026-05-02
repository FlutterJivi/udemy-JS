// Function Exprssion
const greet = function() {
    console.log("Hello bhai");
};

greet()

// function declration mai hosting chalta hai jab ki expression mai nhi chalta

// Anonymouse function
const greet1 = function () {
    console.log("Hi");
};

greet1()

// Named 
const greet2 = function sayHi() {
    console.log("Hi");
}

greet2();
sayHi();// ye debugging and recursion ke liye kaam aata hai bas

//                      --- Function declaration ---
// top lvl utility functions banani ho jo file kahi bhi use hone wali ho
// hoisting ka benifit chahiye
// code readable rakhna ho (function ka naam clearly dikh ta hai)

function calculateTax(amount) {
    return amount * 0.18;
}

//                      --- Function Expression ---  
// function ko dusre function mai pass karna ho bole toh callback bhai
// conditionally function banana ho
// function ko object ya array ka part banana ho

const onClick = function () {
    console.log("button clicked");
};

button.addEventListener("click", onClick);

//covention in function expression
// const use karo
// semicolon last mai lagao
// anaonymous use karo named tab use karo jab jarurat ho
// variable ka naam descriptive ho

// Exercises
const calaclateArea = function (length, width) {
    return length * width;
}
console.log(calaclateArea(5,3));

//Hello
//sayBye is not defined wala error aayega. bcz expression mai aap hoisting nhi kar sakte. jo likha hai wo load hi nhi hota toh phir print ki baat hi duur hai
// wave

const getDiscount = function(price, discountPercent){
    const discountAmount = price * (discountPercent / 100)
    return discountAmount;
}

const d1 = getDiscount(1000,10)
console.log(d1);

const d2 = getDiscount(2500,20);
console.log(d2);
