//Basic JavaScript: Manipulate Arrays With shift()
//Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

// .shift() removes the first element of an array.

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

