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

console.log("======================================");
console.log("======================================");


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "the " + myAdjective + myNoun + myVerb + myAdverb;

  // Your code above this line
  // return result;
  console.log(result);
}

// Change the words here to test your function
wordBlanks("dog ", "big ", "ran ", "quickly");


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "the " + myAdjective + "scary " + myNoun + "saw us and " + myAdverb + myVerb + "over.";

  // Your code above this line
  console.log(result);
}

// Change the words here to test your function
wordBlanks("cat ", "small ", "crawled ", "slowly ");

console.log(wordBlanks);

// I guess this is the _passing_ solution?
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
    result += "The "+myAdjective+" "+myNoun+" "+myAdverb+" "+myVerb+" Over ";
  // Your code above this line
  console.log(result);
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");


// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["nested array", 1], ["in an array", 221], 11, "hello"];


// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50
console.log(ourData);
// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];
console.log(myData);


// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];
myArray[0] = 45;

var lastone = myArray[myArray.length-1];
console.log(myArray[0]);
console.log(lastone);
// Only change code below this line.



// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);
