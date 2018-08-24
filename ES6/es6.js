// Explore Differences Between the var and let Keywords

let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote
}
console.log(catTalk());

//Compare Scopes of the var and let Keywords

function checkScope() {
"use strict";
  let i = "function scope";
  if (false) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

// const Keyword

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");


//Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s.unshift(s.pop());
  console.log(s);
}
editInPlace();
