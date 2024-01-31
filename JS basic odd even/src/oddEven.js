function generateNumber() {
  // generate a random integer(hint : Math.random)
  var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  document.getElementById("number").textContent = randomNumber;
  checkOddEven(randomNumber);


}

function checkOddEven(num) {
  // logic for even / odd
  var result = num % 2 === 0 ? "The number is even" : "The number is odd";
  document.getElementById("odd-even").textContent = result;
} 

window.onload = function () {
  // add event listeners to the button here
 
  var generateButton = document.getElementById("generate-number");
  generateButton.addEventListener("click", generateNumber);
  


};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
