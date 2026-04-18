// iss mai () ke andar jo name1 likha hai wo parameter hai
function greet(name1) {
    console.log("Hello " + name1);
}

//iss ke andar imran likha ye hai argument
greet("imran")

// aaise likha iss ko bhi function call karna hi bolte hai but without argument call karna bolte hai
greet()

// return statement
function add(num1, num2) {
    return num1 + num2
}

let result = add(10,30);
console.log(result);

// keep noted -> agar ek baar return likh diya toh iss ke baad ki koi line nhi chalegi
function test1() {
    return "Pahela"
    return "Dusra"
}

console.log(test1());

//Q1.
function sayHi() {
    console.log("Hi, kaise ho?");
}
sayHi()

//Q2.
function square(number1){
    return number1 * number1;
}
console.log(square(4));
console.log(square(7));

//Q3. 
function introduce(name,age) {
    console.log(`Mera naam ${name} hai aur main ${age} saal ka hun`);
}

introduce("imran",27)

//Q4.
function isEven(number2) {
    if (number2 % 2 == 0) {
        return true;
    }else{
        return false
    }
}
console.log(isEven(10));


//Q5.
function max(number1,number2) {

    if (number1 >= number2) {
        return number1;
    }else{
        return number2;
    }
    
}
console.log(max(10,10));


//Q6.
function multiply(a, b) {
  return a * b;
}

let answer = multiply(5, 4);
console.log("Answer is: " + answer);

function absoluteValue(number1){
    if (number1 < 0) {
        return -number1;
    }else{
        return number1;
    }
}

console.log(absoluteValue(-10));
