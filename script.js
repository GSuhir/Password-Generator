
//This is where I set up the function that will ultimately generate a password, with the 4 constants.
function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "!@#$%^&*()"

  //This is where the password length plus the 4 constants will store user's input.
  var passwordLength;
  var includeLowercase;
  var includeUppercase;
  var includeNumbers;
  var includeSpecial; 

  //This loop prompts the user to type in how many characters they want.
  do {
    passwordLength = prompt("Please select a password length between 8 and 128 characters");
  } while (passwordLength < 8 || passwordLength > 128);
  
  //This loop prompts the users with OK/Cancel for the other 4 constants.  I used "prompt" above for the user to enter the number, but "confirm" here so that the user can just hit Ok/Cancel.
  do {
    includeLowercase = confirm("Would you like to include lowercase letters?");
    includeUppercase = confirm("Would you like to include UPPERCASE letters?");
    includeNumbers = confirm("Would you like to include digits (0-9)?");
    includeSpecial = confirm("Would you like to include any of the following special characters -- \u0022!@#$%^&*()\u0022?");
  } while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial);

  //This is going to store all the possible characters based on the user inputs.
 var possibleCharacters = '';
  if (includeLowercase) {
    possibleCharacters += lowercase;
  } if (includeUppercase) {
    possibleCharacters += uppercase;
  } if (includeNumbers) {
      possibleCharacters += numbers;
  } if (includeSpecial) {
    possibleCharacters += special;
  }

  //This loop generates the random password from the possible Characters string.
  var password = "";
  for (let i=0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  } return password;
}

// Writes password for the ID password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Selectsthe HTML element with the ID "generate", assign to variable generateBtn.
// Adds event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



