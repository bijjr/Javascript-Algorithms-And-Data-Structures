let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//////

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//////


let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

///////


function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i <= len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

///

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j <= n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);


///////


/////

/////

/////

/////

/////

/////

/////

/////

/////

/////

/////

/////

/////

/////
