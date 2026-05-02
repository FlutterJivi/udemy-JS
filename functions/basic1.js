const greet = function (name) {
  return "Hello " + name;
};

console.log(greet("IMRAN"));

//arrow function

const greet1 = (name1) => {
  return "Hello " + name1;
};
console.log(greet1("Imran"));

//agar ek parameter hai toh
const greet2 = (name1) => {
  return "Hello " + name1;
};
greet2();

// agar ek line mai hi likhna ho toh
const greet3 = (name) => "Hello " + name;
console.log(greet3("john"));

const square = (n) => n * 2;

const isEven = n => n % 2 === 0 ? "True" : "False"
console.log(isEven(10));

const isOdd = num => num % 2 !== 0 ? "True" : "False"
console.log(isOdd(10));

const power = (base, exponent = 2) => base ** exponent
console.log(power(10,3));
