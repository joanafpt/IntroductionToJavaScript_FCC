//Basic JavaScript: Accessing Object Properties with Bracket Notation
//Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.


/*Note: The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.*/

// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // object[property name]
  var drinkValue = testObj["the drink"];    // Change this line