Function.prototype.inherits = function(other_class){
  function Surrogate () {};
  Surrogate.prototype = other_class.prototype;
  this.prototype = new Surrogate();
}

Animal.prototype.cry = function (){
  console.log("wah");
}



function Animal(name){
  this.name = name;
};


function Dog(name, coatColor){
  Animal.call(this, name);

  this.coatColor = coatColor;
}

Dog.prototype.bark = function (){
  console.log("woof");
}

// function Surrogate () {};
// // A `Surrogate` instance should delegate to `Animal.prototype`.
// Surrogate.prototype = Animal.prototype;
//
// // Set `Dog.prototype` to a `Surrogate` instance.
// // `Surrogate.__proto__` is `Animal.prototype`, but `new
// // Surrogate` does not invoke the `Animal` constructor function.
// Dog.prototype = new Surrogate();

Dog.inherits(Animal);

d = new Dog("Snoopy", "Brown");

d.cry();
console.log(d);