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


// console.log(Math.floor(Math.random() * ((5-3 + 1)+3)));

function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

// console.log(ourRandomRange(1, 9));

function randomRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(3,5));

console.log(Math.floor(Math.random() * ((5-3 + 1)+3)));

console.log(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
