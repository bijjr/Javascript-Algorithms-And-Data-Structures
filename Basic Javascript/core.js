//Dot Notation

var myObj = {
  prop1: "val1",
  prop2: "val2"
};

var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

// Bracket Notation

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise

// Accessing Object Properties with Variables

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

// Updating Object Properties

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";
myDog['name'] = "Happy Coder";

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup["charlie"];


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
// console.log(checkObj("gift"));


var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    'artist':'Drake',
    'title':'Scorpion',
    'release_year':'2018',
    'formats': [
      'CD',
      'VINYL',
      'Digital'
    ],
    'gold': true
  }
];

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line

/////////////////////////////////



// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

    if (prop == "tracks" && value != '') {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = value;
    }
  }
  else if (prop !== 'tracks' && value !== '') {
    collection[id][prop] = value;
  }
    else {
      delete collection[id][prop];
    }
    return collection
}

//why does the tect pass when using [value] on line 40 but not on value in line 44 and vice versa?
//is it because you're adding a value to a key value property on line 44 and you're adding an array indec on line 40?

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
console.log(updateRecords(1245, "album", "Riptide"));

//
// // Example
// var ourArray = [];
//
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
//
// // Setup
// var myArray = [];
//
// // Only change code below this line.
//
// for (var i = 1; i < 6; i++) {
//     myArray.push(i);
// }
//
// console.log(myArray);


// var myArray = []

// for (var i = 1; i <= 9; i+=2) {
//   myArray.push(i);
// }


// Count Backwards With a For Loop
// for (var i = 9; i > 0; i-=2) {
//   myArray.push(i);
// }
// console.log(i);
// console.log(myArray);

// Iterate Through an Array with a For Loop

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
// Only change code below this line


// initializes variable i to zero
// while i is less than the length of the array we're iterating over the function will run
//finally i increases by on each iteration
for (var i = 0; i < myArr.length; i++) {
  // we're adding the sum of each index in the array and assigning it to the total variable.
  //myArr[3] = 5 + myArr[4] = 6, etc
  total += myArr[i];
  console.log(myArr[i]);
}

console.log(total);

//Nesting For Loops

//Modify the function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  // iterates over length of indexes in parameter array 'arr' adds 1 each time --
  for (var i = 0; i < arr.length; i++) {
    // for every index in param arr another for loop iterates over the indexes in param arr because the index itself is an array - this loop ends when the
    for (var j = 0; j < arr[i].length; j++) {
      // the product variable is multiplied by the index of the array within the array.
      // arr[1] = [3,4]
      // arr[1][1] = '4'
      product *= arr[i][j];
      // console.log(product);
    }
  }
  // Only change code above this line
  // console.log(product);
  // return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


// Iterate with JavaScript Do...While Loops

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
  myArray.push(i);
  i++;
} while (i < 5);


//Basic JavaScript: Object Profile Lookup

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i]['firstName']) {
      if (contacts[i][prop]) {
        console.log(contacts[i][prop]);
        return contacts[i][prop];
      }
      else {
        console.log("No such property");
        return "No such property"
        }
      }
    }
        console.log("No such Contact");
        return "No such contact"
    }


// Change these values to test your function
lookUpProfile("Kristian", "lastName");
console.log('Should print "Vos" ');

lookUpProfile("Sherlock", "likes");
console.log('Should print "[Intriguing Cases, Violin]" ');

lookUpProfile("Harry","likes");
console.log('Should print an array ');

lookUpProfile("Bob","number");
console.log('Should print "No such contact" ');

lookUpProfile("Bob","potato");
console.log('Should print "No such Contact" ');

lookUpProfile("Akira","address");
console.log('Should print "No such property" ');
