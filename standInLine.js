//Basic JavaScript: Stand in Line
/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.*/

function nextInLine(arr, item) {
    // Your code here
    arr.push(item); //Push item at the end of arr.
    var removed = arr.shift(); //Call the shift() method on arr to get the first item and store it in removed.
    return removed;  // Return removed
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));