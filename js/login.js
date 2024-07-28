const logInForm = document.querySelector("#form_choise");
const logInInput = document.querySelector("#form_choise input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";

function logInSubmit(event) {
  event.preventDefault();
  const userName = logInInput.value;
  logInInput.value = "";
  logInInput.classList.add(HIDDEN_CLASS);
  greeting.innerText = `Hello! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
  localStorage.setItem(USER_NAME, userName);
}

const savedUserName = localStorage.getItem(USER_NAME);

if (savedUserName === null) {
  logInInput.classList.remove(HIDDEN_CLASS);
  logInForm.addEventListener("submit", logInSubmit);
} else {
  greeting.innerText = `Hello! ${savedUserName}`;
  greeting.classList.remove(HIDDEN_CLASS);
}
