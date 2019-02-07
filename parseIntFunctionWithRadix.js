//Basic JavaScript: Use the parseInt Function with a Radix

//Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  
    var x = parseInt(str, 2); //parseInt(string, radix);
    return x;
   }
   
   convertToInteger("10011");
   
   