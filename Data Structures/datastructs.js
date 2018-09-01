
let yourArray = [true, false, 'hello', 24, undefined, null];

let myArray = ["a", "b", "c", "d"];
myArray[1] = "z";
console.log(myArray);


function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

function sumOfTen(arr) {
  // change code below this line
    arr.splice(1,2)
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

////////////////////

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


////

function forecast(arr) {
  // change code below this line
    arr = arr.slice(2,4)
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

////

////

////

////

////

////

////

////
////

////

////

////

////
