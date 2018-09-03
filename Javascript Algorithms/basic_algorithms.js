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

//Factorialize a Number
// Return the factorial of a provided integer

function factorialize(num) {

  return num == 0 ?  1 : num * factorialize(num - 1) ;
}

console.log(factorialize(10));

console.log('====================');

function factorialized(num) {
  // base case/terminal condition
  if (num == 0) {
    return 1;
  }
  else {
    // recursion occurs
    // 0 = > returns 1
    // 1 = > 1 * 1
    // 2 = > 2 * 1 * 1
    // ...
    // 10 = > 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1
    return num * factorialized(num - 1);
  }
}

console.log(factorialized(10));

console.log('====================');

function pow(x, n) {
  //base case returns nested functions starting with pow(2, 1) => 2
  //pow(2, 2) => 2num * 2 or pow(2,1) = 4
  //pow(2,3) => 2num * 2 * 2 or pow(2,2) = 8
  // retu
  if (n == 1) {
    return x;
  } else {
    // recursion
    // pow(2,3) = > 2*
    return x * pow(x, n - 1);
  }
}

console.log( pow(2,3));

//

function sumTo(n) {
  if (n == 0) {
    return n
  }
  return n + (sumTo(n-1))
}
console.log(sumTo(100));


function summedup(n) {
  let sumss = 0
  for (var i = 0; i <= n; i++) {
    sumss += i
  }
  return sumss
}
console.log(summedup(100));

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
