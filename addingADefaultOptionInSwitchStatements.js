//Basic JavaScript: Adding a Default Option in Switch Statements

/* Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"*/

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    
    switch(val){
  
      case 'a': 
      return "apple"; // it could also be answer = "apple";
      break;
  
      case 'b':
      return "bird";
      break;
  
      case 'c':
      return  "cat";
      break;
  
      default:
      return  "stuff";
  
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  switchOfStuff(1);
  