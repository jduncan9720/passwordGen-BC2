// Assignment Code
//Which button to assign to generateBtn
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numLength = prompt("How many characters would you like the password to be?");
  var charCase = confirm("Would you like to include uppercase letters in your password?");
  var charNum = confirm("Would you like to include numeric characters in your password?");
  var charSpec = confirm("Would you like to include special characters in your password?");

  generatePassword();

  //Function to take parameters from alerts and create a password
  function generatePassword() {
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "0123456789";
    var chars = "!@#$%^&*_+~`|\:;?><,./-=";
    var codeSpec = "";

    if (charCase === true && charNum === true && charSpec === true) {
      codeSpec = alphaLower + alphaUpper + nums + chars
    } else if (charCase === false && charNum === true && charSpec === true) {
      codeSpec = alphaLower + nums + chars
    } else if (charCase === false && charNum === false && charSpec === true) {
      codeSpec = alphaLower + chars
    } else if (charCase === false && charNum === false && charSpec === false) {
      codeSpec = alphaLower
    } else if (charCase === true && charNum === false && charSpec === false) {
      codeSpec = alphaLower + alphaUpper
    } else if (charCase === true && charNum === true && charSpec === false) {
      codeSpec = alphaLower + alphaUpper + nums
    } else if (charCase === true && charNum === false && charSpec === true) {
      codeSpec = alphaLower + alphaUpper + chars
    } else {
      codeSpec = "There is an error"
    }
    console.log("These are your code options " + codeSpec);
    console.log(codeSpec.length);

    var shuffled = codeSpec.split('').sort(function () { return 0.5 - Math.random() }).join('');

    var finalPass = shuffled.substring(0, numLength);

    console.log(finalPass);

    // which div to put the password into.
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPass;
  }
}

// Add event listener to generate button
// Code to activate writePassword function on click
generateBtn.addEventListener("click", writePassword);
