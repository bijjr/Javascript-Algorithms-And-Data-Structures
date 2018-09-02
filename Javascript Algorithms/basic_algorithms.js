//Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = (celsius * 9)/5 + 32;
  return fahrenheit;
}

// console.log(convertToF(30));

convertToF(0) //should return a number
convertToF(-30) //should return a value of -22
convertToF(-10) //should return a value of 14
convertToF(0) //should return a value of 32
convertToF(20) //should return a value of 68
convertToF(30) //should return a value of 86

console.log('====================');

//Reverse a String

// ~.1 ms on average
// console.time('iteration');
function reverseanotherString(str) {
  // sets a new string to pass letters into
  let newString = '';
  //FOR LOOP
  //1) sets i to the last letter index in the string (str.length - 1) / the starting point
  //2) as long as i is (greater than or equal to zero) still able to iterate the argument - stops when there are no more letters in the array (less than zero)
  //3) decrement by 1 (previous letter)
  for (var i = (str.length - 1); i >= 0; i--) {
    // adds each letter to a new string in order of last to first
    newString += str[i]
  }
  // re assignment
  str = newString;
  return str
}
// console.timeEnd('iteration');
// console.log(reverseanotherString("hello"));


// faster ~.01 ms on average
// console.time('chaining methods');
function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.timeEnd('chaining methods');

// console.log(reverseString("hello"));



console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//

// console.log('====================');

//
