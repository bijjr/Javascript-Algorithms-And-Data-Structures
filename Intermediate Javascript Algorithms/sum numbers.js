// Sum All Numbers in a Range


function sumAll(arr) {
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  let sum = 0;

  for (let i = low; i <= high; i++) {
    sum += i
  }
  return sum
};

console.log(sumAll([1, 4]));
// should return 10.
console.log(sumAll([4, 1]));
// should return 10.
console.log(sumAll([5, 10]));
// should return 45.
console.log(sumAll([10, 5]));
// should return 45.
