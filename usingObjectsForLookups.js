//Basic JavaScript: Using Objects for Lookups
//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
    var result = "";
  
  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta": "Denver",
    "echo" : "Easy",
    "foxtrot": "Frank"
  };
    result = lookup[val];
  
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  phoneticLookup("alpha");