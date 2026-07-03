import "./style.css";

const inputEmail = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorAlert = document.getElementById("error-alert");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
submitButton.addEventListener("click", () => {
  if (!emailPattern.test(inputEmail.value)) {
    errorAlert.classList.remove("hidden");
    setTimeout(() => {
      errorAlert.classList.add("hidden");
      inputEmail.value = "";
    }, 3000);
  } else {
    inputEmail.classList.add("border-5", "border-green-600");
    setTimeout(() => {
      inputEmail.classList.remove("border-5", "border-green-600");
      inputEmail.value = "";
    }, 3000);
  }
});
