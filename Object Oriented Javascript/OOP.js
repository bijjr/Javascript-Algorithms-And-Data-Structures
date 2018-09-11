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
