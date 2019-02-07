//Basic JavaScript: Accessing Nested Objects
//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use bracket notation for properties with a space in their name.

// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; //access the myStorage object and assing the path to the contents of glovebox
  