//Basic JavaScript: Count Backwards With a For Loop
//Push the odd numbers from 9 through 1 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var counter = 9; counter >= 1; counter = counter-2){

  myArray.push(counter);
}

console.log(myArray);