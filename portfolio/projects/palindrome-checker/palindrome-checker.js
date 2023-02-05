// program
document.addEventListener("submit", function(event) {
  const userInput = document.getElementById("text").value;
  if (!palindrome(userInput)) {
    alert("Not a palindrome.");
    event.preventDefault();
  } else {
  alert("This is a palindrome.");
  }
});

// function definition
function palindrome(str) {
  // arrays to render strings
  const alphanumArr = [];
  const backwardArr = [];
  // regex to check if alphanumeric
  const regex = /^[a-zA-Z0-9]*$/;
  // make user input lower-case for simplicity
  const lowerCaseStr = str.toLowerCase();
  // push all alphanumeric to array
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (regex.test(lowerCaseStr[i])) {
      alphanumArr.push(lowerCaseStr[i]);
    }
  }
  // push all alphanumeric backwards to array
  for (let i = alphanumArr.length - 1; i >= 0; i--) {
    backwardArr.push(alphanumArr[i]);
  }
  // compare if forewards and backwards are the same
  for (let i = 0; i < alphanumArr.length; i++) {
    if (alphanumArr[i] !== backwardArr[i]) {
      return false;
    }
  }
  return true;
}