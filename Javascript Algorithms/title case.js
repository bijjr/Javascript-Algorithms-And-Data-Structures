//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Capitalize connecting words like "the" and "of".



// intial solution
function titleCase(str) {
  return str.split(' ').map(i => {
    return i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()
  }).join(' ');
}

//advanced solution
function titleCase(str) {
  // convert entire string to toLowerCase
  //replaces first letter with uppercase
  // regex -- (^ at the beginning of string OR anywhitespace) followed by non whitespace in the entire string
  // .replace takes 2 arguements, 1 being the regex ^^^^
  // the second being an imeediately incoked function expression changing all patterns that meet regex to upper case
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}



console.log(titleCase("I'm a little tea pot"));
//titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

console.log(titleCase("sHoRt AnD sToUt"));
//Should return Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//Should return Here Is My Handle Here Is My Spout.
