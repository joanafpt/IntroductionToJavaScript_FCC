//Basic JavaScript: Use Multiple Conditional (Ternary) Operators

//Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.


function checkSign(num) {

    var x = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
    return x;
    
    }
    
    checkSign(10);
    