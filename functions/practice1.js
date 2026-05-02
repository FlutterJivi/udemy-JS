//Q.1
const greet = function() {
    return "Namaste!";
}
console.log(greet());

//Q.2
const cube = num1 => num1 ** 3;
console.log(cube(3));

//Q.3
const isAdult = age => age >= 18 ? "Adult" : "Minor";
console.log(isAdult(1));

//Q.4
const multiply = (a,b = 1) => {return a * b}
console.log(multiply(5));

//Q.5
const getLength = stringName => stringName.length
console.log(getLength("hello"));

//Q.6
console.log(addA(2,3));
console.log(addB(2,3));

function addA(a, b) {
  return a + b;
}

const addB = (a, b) => a + b;

//Q.7
const grade = (marks) => 
marks >= 90 ? "A": 
marks >= 75 ? "B" : 
marks >= 60 ? "C" :
"Fail";

console.log(grade(90));
console.log(grade(76));
console.log(grade(74));
console.log(grade(59));


