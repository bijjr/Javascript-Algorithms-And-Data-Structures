//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// initial solution
// function repeatStringNumTimes(str, num) {
//   let newstring = '';
//
//   if (num > 0) {
//     for (var i = 0; i < num; i++) {
//       newstring += str;
//     }
//   }
//   return newstring
// }

//recursive Solution
function repeatStringNumTimes(str, num) {
  // can't believe this runs! ha!
  return (num < 0) ? '' : (num == 1) ? str : (str + repeatStringNumTimes(str, num - 1));

  // terminal condition
  // if time is less than 0 return an empty string

  // base case
  // if time == 1 return the string (undwinds the   recursion)

  // //recusive LOOP
  // repeatStringNumTimes(str, num - 1)

  // func (str, 1) = > str
  // func(str, 2) = > str + str
  // func(str, 3) = > str + str + str


}


// console.log(repeatStringNumTimes("*", 3));
// should return "***".
console.log(repeatStringNumTimes("abc", 3));
// should return "abcabcabc".
// console.log(repeatStringNumTimes("abc", 4));
// should return "abcabcabcabc".
// console.log(repeatStringNumTimes("abc", 1));
// should return "abc".
// console.log(repeatStringNumTimes("*", 8));
// should return "********".
// console.log(repeatStringNumTimes("abc", -2));
// should return "".
