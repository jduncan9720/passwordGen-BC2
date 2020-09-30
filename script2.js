// Assignment Code
//Which button to assign to generateBtn
var generateBtn = document.querySelector("#generate");
//Var for final password
var finalPass = "";

// Ask how long and which characters will be in the password
function generatePassword() {
  var numLength = prompt("How many characters would you like the password to be?");
  if (numLength < 8 || numLength > 128){
    alert("Please enter a number between 8 - 128")
    generatePassword()
  } else {
  var charCase = confirm("Would you like to include uppercase letters in your password?");
  var charNum = confirm("Would you like to include numeric characters in your password?");
  var charSpec = confirm("Would you like to include special characters in your password?");

  writePassword();
  }
  //Function to take parameters from alerts and create a password then print it to the dom
  function writePassword() {
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "0123456789";
    var chars = "!@#$%^&*_+~`|\:;?><,./-=";
    var codeSpec = alphaLower;
    
    if (charCase) {
      codeSpec = codeSpec + alphaUpper
    } if (charNum) {
      codeSpec = codeSpec + nums
    } if (charSpec) {
      codeSpec = codeSpec + chars
    } else {
      codeSpec = codeSpec
    }
    console.log("These are your code options " + codeSpec);
    console.log(codeSpec.length);
    console.log(numLength);
    for (var i = numLength; i > 0; i--) {
    // i is the number of characters and keep running the loop until that number is decremented to 0
    // I need to loop through the codeSpecArray and randomly pick a character to add to finalPass
    finalPass = codeSpec[Math.floor(Math.random()*codeSpec.length)]

    }
  }
  // which div to put the password into.
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPass;
  }
// Add event listener to generate button
// Code to activate writePassword function on click
generateBtn.addEventListener("click", generatePassword);
