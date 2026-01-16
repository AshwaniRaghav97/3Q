// let math = require('./app');
let {sum, mul} = require('./app');



console.log("Sum:", sum(3,3));
console.log("Multiplication:", mul(4,5));

let person= {
    name: "Alice",
    age: 30
}
let {name, age} = person;
console.log("Name:", name);
console.log("Age:", age);