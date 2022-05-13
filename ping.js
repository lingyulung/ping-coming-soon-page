const socialMedia = document.querySelector(".socialMedia");
const emailField = document.querySelector(".emailField");
const error = document.querySelector(".error");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document
  .querySelector(".formContainer")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailField.value.match(mailFormat)) {
      emailField.classList.remove("emailField-error");
      emailField.value = "";
      emailField.blur();
      error.style.height = "0";
      return true;
    } else {
      emailField.classList.add("emailField-error");
      error.style.height = "auto";
      return false;
    }
  });
