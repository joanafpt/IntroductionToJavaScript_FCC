//Basic JavaScript: Accessing Nested Arrays

//Retrieve the second tree from the variable myPlants using object dot and array bracket notation.


// Setup
var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
  ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // access the object myPlants,  goes to the index [1] - trees,  goes to the array list,  goes to the [1] position - pine
  