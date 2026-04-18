if (false) {
    console.log("runs");
}

if (true) {
    console.log("runs - truthy");
    
}

console.log(Boolean(false));
console.log(Boolean(true));
console.log();

console.log(!0);

console.log(!"hello");
console.log(!42);

function greet(name1) {
  name1 = name1 || "Guest";  // if name is falsy, use "Guest"
  console.log("Hello, " + name1);
}

greet()
greet("imran")
greet("")

console.log(1 && 2 && 3);
console.log();

const save = (null || undefined) ?? "yes";
console.log(save);

console.log(null || undefined); // both are falsy value so last falsy value return

