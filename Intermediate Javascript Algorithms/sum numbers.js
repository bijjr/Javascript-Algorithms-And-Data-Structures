// Sum All Numbers in a Range

console.time('imperative')
function sumAll(arr) {
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  let sum = 0;

  for (let i = low; i <= high; i++) {
    sum += i
  }
  return sum
};
console.timeEnd('imperative')



console.time('arithmetic progression formula')
function sumAll(arr) {
  let sum = (Math.max(...arr) - Math.min(...arr) + 1) * (Math.min(...arr) + Math.max(...arr)) / 2;
  return sum
};
console.timeEnd('arithmetic progression formula')


console.log(sumAll([1, 4]));
// should return 10.
console.log(sumAll([4, 1]));
// should return 10.
console.log(sumAll([5, 10]));
// should return 45.
console.log(sumAll([10, 5]));
// should return 45.
