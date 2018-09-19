// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) == -1) {
        newArr.push(arr1[i]);
      }
  }
  for (var i in arr2) {
    if (arr1.indexOf(arr2[i]) == -1) {
        newArr.push(arr2[i]);
      }
    }
  return newArr
  }

//   newArr.push(arr2.filter(i => arr1.indexOf(i) == -1))
//   newArr.push(arr1.filter(i => arr2.indexOf(i) == -1))
//   return newArr.sort();
// }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// should return ["pink wool"].

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// should return ["diorite", "pink wool"].

console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
// should return [].

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
// should return ["piglet", 4].

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// should return ["snuffleupagus", "cookie monster", "elmo"].

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
// should return [1, "calf", 3, "piglet", 7, "filly"].
