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


//Destructuring Assignment to Assign Variables from Objects

function getLength(str) {
  "use strict";

  // change code below this line
  const {length : nope} = str; // change this
  // change code above this line

  return nope; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));


//Use Destructuring Assignment to Assign Variables from Nested Objects

//Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow : {max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//Topic
//Use Destructuring Assignment to Assign Variables from Arrays

//Prompt
//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
(() => {
  "use strict";
  //Assigns variable a to variable b and b to a
  [a,b] = [b,a]

})();
console.log(a); // should be 6
console.log(b); // should be 8

//Topic
//Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

//Prompt
//Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // What's happening here?
  // [...list] is the rest operator of all the elements in the list arrays
  // ([1-10])
  // const arr is a sub array  of the array passed in (list/source) with the first two indexes removed ("a,b,")
  const [a,b,...arr] = [...list]; // change this
  return arr;
}
//
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


//Topic
//Use Destructuring Assignment to Pass an Object as a Function's Parameters

//Prompt
//Use destructuring assignment within the argument to the function half to send only max and min inside the function

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";

// half function takes the max and min properties of an object passed in (stats) as arguments
  return function half({max, min}) {

    return (max + min) / 2.0;
  };

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


//Topic
//Create Strings using Template Literals

//Prompt
//Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [
    `<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`,
    `<li class="text-warning">${arr[2]}</li>`
  ];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//Topic
//Object Literals

//Prompt
//Use simple fields with object literals to create and return a Person object.


const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//Topic
//Declarative Functions with ES6

//Prompt
//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.


// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//Topic
// Use class Syntax to Define a Constructor Function

//Prompt
// Use class keyword and write a proper constructor to create the Vegetable class.

// The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor

function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name) {
      this.name = name;
      }
    }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


//Topic
//Use getters and setters to Control Access to an Object

//Prompt
//Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
//Now create getter and setter in the class, to obtain the temperature in Celsius scale.

function makeClass() {
  "use strict";
  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    getTemperature() {
      return (5/9 * (this._temperature - 32));
    }
    setTemperature(celsius) {
      this._temperature = (celsius * 9.0 / 5 + 32);
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
console.log(thermos);
console.log(thermos._temperature);

let temp = thermos._temperature; // 24.44 in C
thermos._temperature = 26;
temp = thermos._temperature; // 26 in C
console.log(temp);
console.log('============');

//Topic
//Understand the Differences Between import and require
//Prompt
//Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.

// import { capitalizeString } from "string_functions"
// "use strict";
// capitalizeString("hello!");


//Topic
// export a code block
//Prompt
// export both variables.


"use strict";
export const foo = "bar";
export const bar = "foo";

// export { foo, bar }

console.log('============');

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt

//Topic
//Prompt
