var a = 1;

function scope() {
   var a = 5;
   console.log(a);
}

scope();

console.log(a);

// adding more features
