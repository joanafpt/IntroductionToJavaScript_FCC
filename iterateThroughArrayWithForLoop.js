//Basic JavaScript: Iterate Through an Array with a For Loop
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

// percorre o array ao longo do comprimento, até ao seu final
for (var counter = 0; counter < myArr.length; counter ++){
  //atualiza o valor do total à medida que avança no array
  total = total + myArr[counter];
}
console.log(myArr);
console.log(total);