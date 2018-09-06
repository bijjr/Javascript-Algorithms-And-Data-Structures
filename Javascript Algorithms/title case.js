//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Capitalize connecting words like "the" and "of".



// intial solution
function titleCase(str) {
  return str.split(' ')
  .map(i => {
    return i.charAt(0).toUpperCase() +
    i.substr(1).toLowerCase()
  })
  .join(' ');
}



console.log(titleCase("I'm a little tea pot"));
//titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

console.log(titleCase("sHoRt AnD sToUt"));
//Should return Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//Should return Here Is My Handle Here Is My Spout.
