// when user clicks "submit"
window.onload = function() {
  document.getElementById("cipher-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let phrase = document.getElementById("code").value;
    let shiftNum = parseInt(document.getElementById("rotate-number").value);
    if (!checkCode(phrase)) {
      alert("Code must be alphabetic characters only.");
    } else if (!checkNumber(shiftNum)) {
      alert("Numbers only.");
    } else {
      document.getElementById("answer").innerHTML = rotate(phrase, shiftNum);
    }
  });
};
// functions
// check if str is alphabetic only
function checkCode(str) {
  if (!str.match(/^[A-Za-z\s]+$/)) {
    return false;
  }
  return true;
}

// check if num is numbers only
function checkNumber(num) {
  if (isNaN(num)) {
    return false;
  }
  return true;
}

function rotate(str, num) {
  let cipherArr = [];
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + num) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + num) % 26) + 97;
    }
    cipherArr.push(String.fromCharCode(charCode));
  }
  cipher = cipherArr.join("");
  return cipher;
}