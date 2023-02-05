/* 
  receive email
  check if it's valid
*/

// event listener, submit button
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

document.querySelector("form").addEventListener("submit", function(event) {
  const email = document.querySelector("input[type=email]").value;
  console.log(email);
  if (!validateEmail(email)) {
    alert("Invalid email address");
    event.preventDefault();
  }
});