//Basic JavaScript: Iterate Odd Numbers With a For Loop

//Push the odd numbers from 1 through 9 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for(var counter = 1; counter <=9; counter +=2){

  myArray.push(counter);
}

console.log(myArray);