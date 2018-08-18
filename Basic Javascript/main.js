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


// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2], 12, "hello"];
console.log(myArray);
// Only change code below this line.
var removedFromMyArray = myArray.pop(myArray[myArray[0]]);
console.log(myArray);


// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift([]);

// Only change code below this line.
myArray.unshift(["Paul", 35]);






var myList = [];

myList.unshift(["Shirt", 10],
["Pants",20],
["Shoes",30],
["Coat",40],
["Rings",50],
["Glasses",60]);

// var items = [["Shirt", 10],
// ["Pants",20],
// ["Shoes",30],
// ["Coat",40],
// ["Rings",50],
// ["Glasses",60]]
//
// myList += items;

console.log(myList);


// Example
function ourReusableFunction(variable) {
  console.log(variable);
}

var myWords = "Heyyyya, World";

ourReusableFunction(myWords);

// Only change code below this line


// Example
function ourReusableFunction(myWords) {
  console.log(myWords);
}

var myWords = "Heyyyya, World";

ourReusableFunction(myWords);

// Only change code below this line
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();



// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1000, 17);


function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hello";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);

// Now remove the console log line to pass the test


// // Declare your variable here
// var myGlobal = 10
//
// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   var oopsGlobal = 5
// }
//
// // Only change code above this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
//
// fun1()
// fun2()


function testFunction() {
  myVar = "test";
}

function myLocalScope(a) {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "test1";
  console.log(myVar);
  console.log(myVar + a);
}
myLocalScope(1);

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);

// Now remove the console log line to pass the test


// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive (num) {
  return num * 5;
}

console.log(minusSeven(10));
console.log(timesFive(33));


// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
  return sum
}

// Only change code above this line
var returnedValue = addFive();
console.log(addFive());


// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);



///////////////////////////////////////////////////////////////////////////////

//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

console.log("======================================");
console.log("======================================");

function nextInLine(arr, item) {
  // Your code here
  arr.push(item); // adds the 'item' argument to the back of the array
  item = arr.shift(); // sets the item variable to the first item in the array which is now removed
  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


console.log("======================================");
console.log("======================================");

///Write an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
      if (wasThatTrue) {
          return "Yes, that was true";
      }
      return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
console.log(trueOrFalse(true));

console.log("======================================");
console.log("======================================");

// Setup
function testEqual(val) {
  if (val == 10) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testEqual(10))

console.log("======================================");
console.log("======================================");

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10));

console.log("======================================");
console.log("======================================");

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

console.log("======================================");
console.log("======================================");

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside"
}
// Change this value to test
console.log(testLogicalOr(15));
console.log(testLogicalOr(20));
console.log(testLogicalOr(10));
console.log(testLogicalOr(153));


console.log("======================================");
console.log("======================================");

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var score = par - strokes;
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= 2) {
    return names[1];
  }
  else if (score == 1 ) {
    return names[2];
  }
  else if (score == 0) {
    return names[3];
  }
  else if (score == -1) {
    return names[4];
  }
  else if (score == -2) {
    return names[5];
  }
  else if (score <= -3) {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4));
console.log(golfScore(4, 4));
console.log(golfScore(2, 4));
console.log(golfScore(5, 1));
console.log(golfScore(5, 43));

console.log("======================================");
console.log("======================================");

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
     case 1:
      answer += "alpha";
    break;
    case 2:
      answer += "beta";
    break;
    case 3:
      answer += "gamma";
    break;
    case 4:
      answer += "delta";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);

// Change this value to test
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));




console.log("======================================");
console.log("======================================");

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer += "apple";
    return answer
    break;
  case "b":
    answer += "bird";
    return answer
    break;
  case "c":
    answer += "cat"
    return answer
    break;
  default:
    answer += "stuff";
    return answer
    break;
  // Only change code above this line
  return answer;
  }
}

// Change this value to test
console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));




console.log("======================================");
console.log("======================================");


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer += "Low"
      break;
    case 4:
    case 5:
    case 6:
      answer += "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer += "High"
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(1));
console.log(sequentialSizes(5));
console.log(sequentialSizes(9));


console.log("======================================");
console.log("======================================");

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(chainToSwitch(7));


console.log("======================================");
console.log("======================================");

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

console.log("======================================");
console.log("======================================");

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      count += 1;
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      count += 0;
      break;
    case 10:
      break;
    case 'J':
      break;
    case 'Q':
      break;
    case 'K':
      break;
    case 'A':
      count -= 1;
      break;
  }

  var betHold = ''

  if (count < 0) {
      betHold = ' Bet';
  }
  else {
     betHold = ' Hold';
  }

  return count + betHold;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc('A'));
// console.log(cc('K'));
// console.log(cc(7));
console.log(cc(3));
// console.log(cc(2));

console.log("======================================");
console.log("======================================");




console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");

console.log("======================================");
console.log("======================================");
