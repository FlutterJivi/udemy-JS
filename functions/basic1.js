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
