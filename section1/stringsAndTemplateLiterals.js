const firsName = 'Imran'
const job = "Jobless"
const birthYear = 1999
const year = 2026

const imran = "I'm " + firsName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(imran);

function tag(strings,...values) {
    console.log(strings);
    console.log(values);
    
}

let name = "Rahul"
let age = 26

tag`My name is ${name} and I am ${age}`;

