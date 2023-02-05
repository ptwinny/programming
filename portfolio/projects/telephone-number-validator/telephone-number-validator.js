window.onload = function() {
  document.getElementById("phone-validator-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let phoneNumber = document.getElementById("phone-number").value;
    if (!telephoneCheck(phoneNumber)) {
      document.getElementById("validator").innerHTML = "Phone number is INVALID.";
    } else {
      document.getElementById("validator").innerHTML = "Phone number is VALID.";
    }
  });
};

function telephoneCheck(str) {
  const validNumbers = [
    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/g,
    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}\-\d{4}$/g,
    // 5555555555
    /^\d{10}$/g,
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/g,
    // (555)555-5555
    /^\(\d{3}\)\d{3}\-\d{4}$/g,
    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}\-\d{4}$/g,
    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/g
  ];
  return validNumbers.some((number) => (number.test(str)));
}