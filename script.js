const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", (event) => {
  if (password.value !== confirmPassword.value) {
    errorMessage.textContent = "* Passwords do not match";
    event.preventDefault();
  }
});
