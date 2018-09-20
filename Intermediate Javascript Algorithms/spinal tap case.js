// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // regex for whitespace and underscores in the entire string
  let regex = /\s+|_+/g;
  //replaces any instances of camel cases throughout the string with a space between them
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
  //replaces and spaces or underscores with '-' and lowercases the string
  return str.replace(regex, "-").toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"));
// should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));
// should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"));
// should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));
// should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"));
// should return "all-the-small-things".
