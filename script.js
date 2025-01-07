const lowercase = "abcdefghijklmnoprstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "`~!@#$%^&*()_+=][}{|'.,><?;:";

const lengthInput = document.querySelector("#length");
const uppercaseChecked = document.querySelector("#upper");
const numbersChecked = document.querySelector("#numbers");
const symblosChecked = document.querySelector("#symbols");
const generateButton = document.querySelector("#generate");
const passwordBox = document.querySelector("#password");
const copyButton = document.querySelector("#copy");

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let defaultLetters = lowercase;

  if (uppercaseChecked.checked) defaultLetters += uppercase;
  if (numbersChecked.checked) defaultLetters += numbers;
  if (symblosChecked.checked) defaultLetters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const generateRandom = Math.floor(Math.random() * defaultLetters.length);
    password += defaultLetters[generateRandom];
  }
  passwordBox.value = password;
}

generateButton.addEventListener("click", generatePassword);
