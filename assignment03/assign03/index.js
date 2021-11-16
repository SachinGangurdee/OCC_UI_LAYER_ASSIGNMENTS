// Importing the custom node module with the below statement
var calculator = require('./calculator');

var a = 10 , b = 5

console.log("Addition of " + a + " and " + b + " is " + calculator.add(a, b));

console.log("Subtraction of " + a + " and " + b + " is " + calculator.sub(a, b));

console.log("Multiplication of " + a + " and " + b + " is " + calculator.mul(a, b));

console.log("Division of " + a + " and " + b + " is " + "is"+calculator.div(a,b));