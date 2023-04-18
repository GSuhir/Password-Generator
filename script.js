// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "!@#$%^&*()"

  let passwordLength;
  let includeLowercase;
  let includeUppercase;
  let includeNumbers;
  let includeSpecial; 

  do {
    passwordLength = prompt("Please select a password length between 8 and 128 characters");
  } while (passwordLength < 8 || passwordLength > 128);
  
  do {
    includeLowercase = confirm("Would you like to include lowercase letters?");
    includeUppercase = confirm("Would you like to include UPPERCASE letters?");
    includeNumbers = confirm("Would you like to include digits (0-9)?");
    includeSpecial = confirm("Would you like to include any of the following special characters -- \u0022!@#$%^&*()\u0022?");
  } while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial);

  let possibleCharacters = '';
  if (includeLowercase) {
    possibleCharacters += lowercase;
  } if (includeUppercase) {
    possibleCharacters += uppercase;
  } if (includeNumbers) {
      possibleCharacters += numbers;
  } if (includeSpecial) {
    possibleCharacters += special;
  }

  var password = "";
  for (let i=0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  } return password;
}


