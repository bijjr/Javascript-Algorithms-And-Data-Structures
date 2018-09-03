// Return the length of the longest word in a sentence



// Initial Solution - iterative
// ~.14 ms
console.time('iterative')
function findLongestWordLength(str) {
  // split str into array
  let stringArray = str.split(" ");
  // global counter to track longest word
  let maxLength = 0;
  // iterates over elements(words) in array(string)
  for (var word in stringArray) {
  // if the word length is larger than count(previous word) the count is now set to the length of the word
     stringArray[word].length > maxLength ? maxLength = stringArray[word].length : false;
  }
  return maxLength;
}
console.timeEnd('iterative')



//Better solution - chaining methods utilizing .reduce and math.max
// ~.010 ms
console.time('methods')
function findLongestWordLengths(s) {
  return s.split(' ')
    .reduce((x, y) =>
      Math.max(x, y.length), 0);
}
console.timeEnd('methods')

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLengths("The quick brown fox jumped over the lazy dog"));


///

// var array1 = [1, 2, 3, 4, 5, 6, 7 ];
// var array2 = [];
// //elem is first Number in pair of array
// // index is 2nd number in pair of array
// array1.forEach(function(elem, index) {
//   // splice removes the index (second number in pair) and leaves the next elemnt in array
//   array1.splice(index, 2);
//   // pushes first number in pair to second array
//   array2.push(elem);
// });
//
// console.log(array1); //[3, 6]
// console.log(array2); //[1, 4, 7]
