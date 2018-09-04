//Check if a string (first argument, str) ends with the given target string (second argument, target).


//initial solution
function confirmEnding(str, target) {
  //turns strin into an array to be iterated over
  let search = str.split('')

  for (var words in search) {
      //using splice to remove the target
      // target length == 4
      //splice begins removing from -4 index (from the end) through the rest of the string/array
      let spliced = search
      .splice(-target.length)
      //joins them back together to return a string
      .join('')

      //ternary operator
      return spliced == target ? true : false;
  }
}

// substring solution (optimal)
function confirmEnding(str, target) {
  return (str.substr(-target.length) === target) ? true : false;
}

// search.length - target.length, search.length - 1 (end of string) == target
// splice length of target, end of string,

// should return true
console.log(confirmEnding("Bastian", "n"));
// should return true
console.log(confirmEnding("Congratulation", "on"));
// should return true
console.log(confirmEnding("Open sesame", "same"));
//should return false
console.log(confirmEnding("Open sesame", "pen"));
