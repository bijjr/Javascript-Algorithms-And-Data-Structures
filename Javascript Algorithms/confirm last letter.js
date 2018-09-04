//Check if a string (first argument, str) ends with the given target string (second argument, target).


//initial solution
function confirmEnding(str, target) {
  let search = str.split('');

  for (var words in search) {
      let spliced = search
      .splice(search.length - target.length)
      .join('')

      return spliced == target ? true : false;
  }
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
