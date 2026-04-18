// Explicit Conversion
console.log(String(42));
console.log(String(3.14));

//toString()
const store = (42).toString()
console.log((42).toString());
console.log(typeof(store));

//template literal

let num = 42
let str = `${num}`
console.log(typeof store);


//Number Conversion
console.log(Number("42"));
console.log(Number("3.14")); 
console.log(Number(null));// null represents intentional absence of value so js converts it to 0
console.log(Number(undefined)); // undefined means value not assigned/unkown, js can't convert it to a valid number so it becomes NaN
console.log(Number([]));
console.log(Number([5]));
console.log(Number([1,5]));


// parseInt() extract integer value from string
console.log(parseInt("42px"));

let d = 42 + "";
console.log(d);

let e = "5" * 2
console.log(e);

if ("Hello") {
    console.log("true bhai");
    
}

if ("") {
  // "" → Boolean("") → false → yeh block NAHI chalega
  console.log("yeh nahi chalega");
}

if ([]) {
    console.log("Khalali array bhi truthy hai");
    
}

