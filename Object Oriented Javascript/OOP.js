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
