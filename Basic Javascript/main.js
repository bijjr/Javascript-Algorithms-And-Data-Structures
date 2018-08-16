// Basic Javascript

// var ourName;
//
// ourName = "Hello world";
//
//
// var str = "Hello World!";
// var n = str.length;
//
// console.log("the length of var ourName is:");
// console.log(ourName.length);
// console.log("the length of var str is:");
// console.log(str.length);
// console.log("the length of var n is:");
// console.log(n.length);

// Basic JavaScript: Understanding Uninitialized Variables

// Initialize these three variables
var a;
var a = 5;
var b;
var b = 10;
var c;
var c = "I am a"

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

console.log("======================================");

// Understanding Case Sensitivity in Variables

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log("======================================");

// Incrementing/Decrement a Number with JavaScript

var ranNum = 5;

var printNum = ranNum--;

console.log(printNum);

var incNum = 6;

var subNum = incNum++

console.log(subNum);


console.log("======================================");

//


var raider  = "123456789"

for (var i = 0; i < raider.length; i++) {
  raider[i]
}

console.log(i);
console.log(raider.length);

console.log("======================================");

// Multiplying floating numbers

var product = 2.0 * 2.5;

console.log(
    product
);

console.log("======================================");

//Finding a Remainder in JavaScript

var remainder;

remainder = 11 % 3;

console.log(remainder);

console.log("======================================");

console.log("======================================");


var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line



console.log("======================================");


// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);
console.log("next");
// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);



console.log("======================================");



// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);
