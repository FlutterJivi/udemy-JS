//1. Global Scope
const name1 = "Imran";// global

function greet() {
    console.log(name1);
}

greet();
console.log(name1);

//2. Function Scope also known as Local Scope
function test() {
    const city = "GANDHINAGAR";
    var state = "Gujarat"
    console.log(city);
    console.log(state);
}
test();


// console.log(city); -> ReferenceError: city is not defined

//3. Block Scope 
// koi bhi {} ke andar declare kiya toh let and const vairiable bas uss block ke andar hi dikhta hai

function test1() {
    if (true) {
        var a = 10;
        let b = 20;
    }
    console.log(a);// ye fuction scope hai and ye block ko ignore karata hai
    console.log(b);// ye block scope hai and ye block ki respect karta hai
}
test1()

