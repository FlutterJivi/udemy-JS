

function sayHi() {
    console.log("Hi");
    
}

function doTask(callback) {
    console.log("Task shuru");
    console.log(callback === sayHi);
    
    callback();
    console.log("Task khatam");
}

doTask(sayHi);

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;

console.log(calculate(10,10,add));
console.log();

function processUser(name, callback) {
    console.log("User process ho raha hai...");
    callback(name)
}

function greet(username) {
    console.log("Hello " + username);
}

processUser("Imran",greet)