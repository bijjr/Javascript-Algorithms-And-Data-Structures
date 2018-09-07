//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// initial solution
function chunkArrayInGroups(arr, size) {
  let chunks = [];

  while (arr.length > size) {
      chunks.push(arr.splice(0, size));
    }

  (arr.length <= size) ? chunks.push(arr.splice(0)) : false ;

  return chunks
}

//optimal solutions
chunkArrayInGroups(arr, size) {
  let chunks = [];

  while (arr.length ) {
      chunks.push(arr.splice(0, size));
    }

  return chunks
}


// function chunkArrayInGroups(arr, size) {
//   let chunks = [];
//
//    (arr.length > size) ? (chunks.push(arr.splice(0,size))) : (arr.length <= size) ? (chunks.push(arr.splice(0))) : false;
//
//   return chunks
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2) );
console.log([["a", "b"], ["c", "d"]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) );
console.log([[0, 1, 2], [3, 4, 5]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) );
console.log([[0, 1], [2, 3], [4, 5]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) );
console.log([[0, 1, 2, 3], [4, 5]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) );
console.log([[0, 1, 2], [3, 4, 5], [6]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
