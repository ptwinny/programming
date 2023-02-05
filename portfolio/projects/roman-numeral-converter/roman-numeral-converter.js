document.addEventListener("submit", (event) => {
    event.preventDefault();
    const num = document.getElementById("number").value;
    document.getElementById("answer").innerHTML = convertToRoman(num);
  });

function convertToRoman(x) {
  let romanNumeral = "";
  let key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
 for (let i in key) {
   while (x >= key[i]) {
     romanNumeral += i;
     x -= key[i];
   }
 }
 return romanNumeral;
}