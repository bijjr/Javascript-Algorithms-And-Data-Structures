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

//Prevent Object Mutation

function freezeObj() {
     "use strict";
     const MATH_CONSTANTS = {
       PI: 3.14
     };

     // Object.freeze(MATH_CONSTANTS);

     try {
       MATH_CONSTANTS.PI = 99;
     } catch( ex ) {
       console.log(ex);
     }
     return MATH_CONSTANTS.PI;
   }

   const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => {return new Date();}


//Arrow Functions with Parameters

const myConcat = (arr1, arr2) => {return arr1.concat(arr2);}

console.log(myConcat([1,2],[3,4,5]));

// Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  // const squaredIntegers = arr.filter(value => % 2 === 0)
  const squaredIntegers = arr
  .map(value => value ** 2)
  .filter(value => value > 0 && value % 2 === 0)
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// Default parameters for Functions

// const increment = (function() {
//   "use strict";
//   return function increment(number, value=1) {
//     return number + value;
//   };
// })();

const increment = (number, value = 1) => {
  return number + value;
};
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

//Use the Rest Operator with Function Parameters
//
// const sum = (x, y, z) => {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
//
// console.log(sum(1, 2, 4)); // 6

// Spread & Rest Operator with Function Parameters

const sum = (...args) => {
    // const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
console.log(sum(1, 2, 3)); // 6

// const sum = ();


// function littleDog(sum) {
//   return sum + 1;
// }
//
//
// console.log(littleDog(1));


//Spread Operators

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
