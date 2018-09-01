
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

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

////

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
// console.log(spreadOut());

////


function quickCheck( arr, elem ) {
  // change code below this line
  // if (arr.indexOf(elem) != -1) {
  //   return true
  // } else {
  //   return false
  // }
  // ternary operater > if/else statements
  return ( arr.indexOf ( elem ) == -1 ) ?  false : true ;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'water'));

////
let randamArray = [["x",'t','z']]
console.log(randamArray.length);
console.log('=====================================');

// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let nested = arr[i];
    
    for (let j = 0; j < nested.length; j++) {
      (nested[j] == elem) ? nested.splice(0, nested.length) : false ;
      }
    }
  for (let z = 0; z < arr.length; z++) {
      (arr[z].length > 0) ? newArr.push(arr[z]) : false ;
    }
  return newArr;
  }

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3, 6], [1, 6, 3], [3, 4, 13, 26], [6, 19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

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
////

////

////

////

////
