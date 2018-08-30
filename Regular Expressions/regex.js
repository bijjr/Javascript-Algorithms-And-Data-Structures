//Topic
//

//Prompt
//

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);

// setting a string variable
let myStrings = "Hello";
// setting patter for regex to match
let myRegexes = /Hell/;
// using test function to find patterns in string
console.log(myRegexes.test(myStrings));
console.log('============');

//Topic
//Match literal string with diff possibilities
// Prompt
// Match regex to multiple patterns using OR Operators

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultOne = petRegex.test(petString);
console.log(resultOne);

console.log('============');

//Topic
// Ignore Case While Matching
//Prompt
//Write a regex fccRegex to match "freeCodeCamp", no matter its case.

let myStringss = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let resultTwo = fccRegex.test(myStringss);
console.log(resultTwo);
console.log('============');

//Topic
//Regex: Extract Matches
//Prompt
//extract the word coding

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultThree = extractStr.match(codingRegex);

console.log(resultThree);
console.log('============');

//Topic
// Finding repeat matches
//Prompt
// extract all appearances of twinkle

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let resultFour = twinkleStar.match(starRegex);
console.log(resultFour);
console.log('============');

//Topic
//
//Prompt
//

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";

// match with any strings that have "g,o" pattern - * asterik is applied to "o" which means "o" can appear zero times and the query will still return a match, but "g" must be present
let goRegex = /go*/;

// matches 1 pattern of "g,o"
soccerWord.match(goRegex); // Returns ["goooooooo"]
// matches 1 pattern of "g"
gPhrase.match(goRegex); // Returns ["g"]
// finds 0 matches, because there is no g present
oPhrase.match(goRegex); // Returns null

// console.log('============');

//Topic
//Restrict Possible Usernames

//Prompt
//1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.


let username = "JackOfAllTrades";

//What the hell is going on here?
// 1) ^[a-z] Requires the first character to be a letter
// 2) [a-z]+ requires the second character to be a letter of one or more (meeting the "usernames have to be at least two characters long" rule)
// 3) \d*$ if there is a number (* = 0 or more) it must be the last character ($)
let userCheck = /^[a-z][a-z]+\d*$/i;

//optimized, clever solution I didn't think of {2,}????
// let userCheck = /^[a-z]{2,}[\d]*$/i;
let name = userCheck.test(username);

console.log(name);
console.log('============');
console.log('============');

//Topic
//Positive and Negative Lookahead
//Prompt
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=.*\d{2})/; // Change this line
let passwordss = pwRegex.test(sampleWord);


console.log('============');

//Topic
//
//Prompt
//

let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g;
let resulted = hello.replace(wsRegex, "");

let resulting = resulted
let whiteSP = /\s/g;
let tryHarder = resulted.replace(whiteSP, "x")

console.log(resulted);
console.log(tryHarder);
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
//
// //Topic
// //
// //Prompt
// //
//
//
// console.log('============');
