//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


//Initial solution
// function mutation(arr) {
//   //using .map() to lowercase all letters in the array
//   //using .split() to create arrays of each letter within each array
//   let string = arr.map(i => i.toLowerCase().split(''))
//   // return string[0].indexOf('k')
//   for (var i = 0; i < string[1].length; i++) {
//     if (string[0].indexOf(string[1][i]) === -1) {
//          return false
//     }
//   }
//   return true
// }

// optimized solution
function mutation(arr) {
  let string = arr.map(i => i.toLowerCase().split(''))

  return string[1]
  .every(function(i) {
     return string[0].indexOf(i) != -1;
  });
}


console.log(mutation(["hello", "hey"]));
// should return false.
console.log(mutation(["hello", "Hello"]));
 // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) );
// should return true.
console.log(mutation(["Mary", "Army"]) );
// should return true.
console.log(mutation(["Mary", "Aarmy"]) );
// should return true.
console.log(mutation(["Alien", "line"]) );
// should return true.
console.log(mutation(["floor", "for"]) );
// should return true.
console.log(mutation(["hello", "neo"]) );
// should return false.
console.log(mutation(["voodoo", "no"]) );
// should return false.)
