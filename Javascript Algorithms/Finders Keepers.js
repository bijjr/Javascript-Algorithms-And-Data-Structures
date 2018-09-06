//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.


//initial solution
// function findElement(arr, func) {
//   let num = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//         return arr[i]
//       }
//     }
//     return undefined
//   }

console.time('find method')

//optimal Solution using .find() and .filter()
function findElement (arr, func) {
  // let num = 0;
  // .find() searches for the first element in the array that meets the function criteria/returns true for the function passed in as a parameter
  // the parameters(num) for the function argument in .find() are the elemtns in the the array (arr)
  return arr.find(num => func(num));
}
console.timeEnd('find method')



console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
//should return 8.

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
//should return undefined

console.time('filter method')

function findElements (arr, func) {
  // .filter creates a new array consisting of elements that meet the function argument criteria.
  // we only want the first element of the array, hence the [0] after invoking the .filter method
  return arr.filter(num => func(num))[0];

}
console.timeEnd('filter method')

console.log(findElements([1, 2, 3, 4], num => num % 2 === 0));

console.log(findElements([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
//should return 8.

console.log(findElements([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
//should return undefined


//Filter method is faster than find method

// node Finders\ Keepers.js
// find method: 0.113ms
// filter method: 0.014ms
//
// node Finders\ Keepers.js
// find method: 0.239ms
// filter method: 0.015ms
//
// node Finders\ Keepers.js
// find method: 0.105ms
// filter method: 0.013ms
//
// node Finders\ Keepers.js
// find method: 0.124ms
// filter method: 0.009ms
//
// node Finders\ Keepers.js
// find method: 0.114ms
// filter method: 0.012ms
//
// node Finders\ Keepers.js
// find method: 0.131ms
// filter method: 0.012ms
//
// node Finders\ Keepers.js
// find method: 0.107ms
// filter method: 0.014ms
//
