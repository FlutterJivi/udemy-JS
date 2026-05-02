function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet(null); // null valid value hai, js ko lagta hai jaanbujh kar null diya hai iss liye default ki jarurat nhi hai
greet(undefined)

// falsy value mai bhi default value nhi aati hai, js ko lagata hai falsy value di hai user ne jaanbujh kar hi di hai

// required value first likho and default value last mai likho

// default mai hum expression bhi likh sakte hai
const getRandomId = function () {
    return Math.floor(Math.random() * 1000)
}

function createUser(name, id = getRandomId()) {
    console.log("Name: " + name +", ID: " + id);
}

createUser("Rahul");
createUser("Priya", 100);

function roundOff(num, decimals = 2) {
    return Number(num.toFixed())
}