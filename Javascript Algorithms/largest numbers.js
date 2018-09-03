//Return an array consisting of the largest number from each provided sub-array.


//initial solution
function largestOfFour(arr) {
  //
  let bigArr = [];
  for (var i = 0; i < arr.length; i++) {
       bigArr.push((arr[i].reduce((x,y) => Math.max(x,y))));
    }
    return bigArr
  }

//should return [27, 5, 39, 1001].
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//should return [9, 35, 97, 1000000].
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

//should return [25, 48, 21, -3].
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
