//Create a method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return 'This dog has ' + dog.numLegs + ' legs.'
  }
};

console.log(dog.sayLegs());

//Constructor Function

function Dog() {
  this.name = 'Rocko';
  this.color = 'Red';
  this.numLegs = 4;
}


//Creating objects with Constructors

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();

//Extend constructors to receive arguements

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Robyn','Red')


//Verify an objects constructor with intstanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);

myHouse instanceof House;

//Add the own properties of canary to the array ownProps

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

// let canary = new Bird("Tweety");
// let ownProps = [];
//
// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
//
// console.log(ownProps);

//Prototype properties to reduce duplicate code

// function Dog(name) {
//   this.name = name;
// }
//
// Dog.prototype.numLegs = 2;
//
// let beagle = new Dog("Snoopy");

//Iterate over all properties

// function Dog(name) {
//   this.name = name;
// }
//
// Dog.prototype.numLegs = 4;
//
// let beagle = new Dog("Snoopy");
//
// let ownProps = [];
// let prototypeProps = [];
//
//
// for (let property in beagle) {
//   if (beagle.hasOwnProperty(property)) {
//     ownProps.push(property)
//   } else {
//     prototypeProps.push(property)
//   }
// }
//
// console.log(ownProps);
// console.log(prototypeProps);

//Constructor property

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.construtcor === Dog) {
    return true;
  } else {
    return false;
  }

}


//Change prototype to a new objects

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function() {
    console.log('nom','noom','nom');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};

//Reset an inherited Constructor property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Override Inherited methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line

Penguin.prototype.fly = function() {return 'Alas, this is a flightless bird.'}

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
