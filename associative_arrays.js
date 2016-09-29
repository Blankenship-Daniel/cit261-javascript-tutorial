function printObj(obj) {
   for (var prop in obj) {
      console.log(prop + ': ' + obj[prop]);
   }
}

// initializing an object
var obj = {};

// initializing an object with data
var person = {
   "name": "Fred",
   "age": 25
};

// initializing an object with data
//  different syntax
var person2 = {
   name: "Melanie",
   age: 23
};

// accessing elements in an object manually
// 1.
console.log('accessing elements in an object manually');
console.log(person.name);
console.log(person2['name']);

// accessing elements in an object iteratively
console.log('accessing elements in an array iteratively');
printObj(person);
printObj(person2);

// an object within an object?
var person3 = {
   name: "Daniel",
   age: 27,
   child: {
      name: "David",
      age: 0
   }
};

console.log('accessing an object within an object');
console.log(person3.child.name);
