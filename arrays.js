function printArray(arr) {
   for (var i = 0; i < arr.length; i++) {
      console.log(arr4[i]);
   }
}

// Two ways to instantiate an arrays
// 1.
var arr = new Array();

// 2.
var arr2 = [];

// Instantiate an array with data
// 1.
var arr3 = new Array(1, 2, 3);

// 2.
var arr4 = [1, 2, 3];

// Access elements of an arrays
console.log('Accessing elements manually');
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);

// Iterate over the contents of an array
console.log('Iterating over the contents of an array');
printArray(arr4);

// Adding to an array
console.log('Adding values to an array');
arr4.push(6);
arr4.push('Bob');
printArray(arr4);

// Removing from an array
console.log('Removing the last value of an array');
arr4.pop();
printArray(arr4);
