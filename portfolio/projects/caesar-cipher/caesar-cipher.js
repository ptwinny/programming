function rot13(str) {
  let numArr = [];
  let cipherArr = []
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    numArr.push(str[i].charCodeAt());
  }
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < 78 && numArr[i] > 64) {
      numArr[i] = numArr[i] + 13;
    } else if (numArr[i] >= 78 && numArr[i] <= 90) {
      numArr[i] = numArr[i] - 26 + 13;
    }
    cipherArr.push(String.fromCharCode(numArr[i]));
  }
  
  cipher = cipherArr
    .join("")
    .toString()
  console.log(cipher);
  return cipher;
}

rot13("SERR PBQR PNZC");