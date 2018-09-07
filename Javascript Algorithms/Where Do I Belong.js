//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {

  // arr.sort((a , b) => { return a - b })
  //
  // for (var i = 0; i < arr.length; i++) {
  //    return arr[i] >= num ? i : false;
  // }

  // arr.sort((a,b) => {return a-b});
  //
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] >= num) {
  //     return i;
  //   }
  // }
  // return arr.length;


  let index = arr.sort((a,b)=>{return a-b}).findIndex((currNum) => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;

    // arr.push(num);
    // arr.sort(function(a, b){return a-b});
    // return arr.indexOf(num);
    //

  // .findIndex((i) => {
  //     return i >= num ? i : false ? num > arr[arr.length - 1] : num = arr[]
  //       });

  // Math.max(i,num) == i ? i : false;


  // arr
  // .sort()
  // .find(i => {
  //    Math.max(num, i) == i ? i : false;
  // });

  // for (var a = 0; a < arr.length; a++) {
  //   if (arr[a] >= num)
  //     return a;
  //   }
  //   return arr.length;

  //sort?
  //math.max which 2 is greater if greater i +1
  //return i
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35) );
// should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
 // should return 2.
console.log(getIndexToIns([40, 60], 50) );
// should return 1.
console.log(getIndexToIns([3, 10, 5], 3) );
// should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5));
 // should return 2.
console.log(getIndexToIns([2, 20, 10], 19));
 // should return 2.
console.log(getIndexToIns([2, 5, 10], 15));
 // should return 3.
console.log(getIndexToIns([], 1));
 // should return 0.
