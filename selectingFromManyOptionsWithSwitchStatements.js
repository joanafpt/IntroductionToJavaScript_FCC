//Basic JavaScript: Selecting from Many Options with Switch Statements

/*Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"*/

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    
      switch(val) {
         case 1: 
        return "alpha";
        break;
  
        case 2:
        return "beta";
        break;
  
        case 3:
        return "gamma";
        break;
  
        case 4:
        return "delta";
        break;
  
  }
  
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  caseInSwitch(2);
  