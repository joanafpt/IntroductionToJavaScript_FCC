//Basic JavaScript: Counting Cards
/*Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.*/

var count = 0;

function cc(card) {
  // Only change code below this line
  
     switch(card){
       //if card is between 2 and 6, ++ and stops;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          count++;
          break;

         //if card is 10, A, K, Q, J, -- and stops;
          case 10:
          case "J":
          case "Q":
          case "K":
          case "A":
          count--;
          break;
      }
      if (count > 0){ // if count is positive
        return count + " Bet";
      } else { // if count is negative
        return count + " Hold";
      }
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');