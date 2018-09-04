//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// initial solution
function repeatStringNumTimes(str, num) {
  let newstring = '';

  if (num > 0) {
    for (var i = 0; i < num; i++) {
      newstring += str;
    }
  }
  return newstring
}

//



console.log(repeatStringNumTimes("*", 3));
// should return "***".
console.log(repeatStringNumTimes("abc", 3));
// should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4));
// should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1));
// should return "abc".
console.log(repeatStringNumTimes("*", 8));
// should return "********".
console.log(repeatStringNumTimes("abc", -2));
// should return "".
