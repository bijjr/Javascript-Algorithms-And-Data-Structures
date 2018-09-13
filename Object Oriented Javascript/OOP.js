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

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

//Prototype properties to reduce duplicate code

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

let beagle = new Dog("Snoopy");

//

//
