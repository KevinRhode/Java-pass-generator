

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// include special char
var chkIncludeSpecialChar = document.getElementById("special-char").checked;
// include number
var chkIncludeNumber = document.getElementById("number").checked;
//include space 
var chkIncludeSpace = document.getElementById("space").checked;
// set length have default
var genPassLength = document.getElementById("pass-length");

// Assignment code here
function generatePassword(){

  //Basic password selection
var charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";


// include special char - if changed
  chkIncludeSpecialChar = document.getElementById("special-char").checked;
// include number - if changed
  chkIncludeNumber = document.getElementById("number").checked;
//include space - if changed
  chkIncludeSpace = document.getElementById("space").checked;

  if (chkIncludeSpecialChar) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  if (chkIncludeNumber) {
    charset += "0123456789";
  }

  if (chkIncludeSpace) {
    charset += " ";
  }
  var retValue = "";
  for (let index = 0 , fit = charset.length; index < genPassLength.value; index++) {
        retValue += charset.charAt(Math.floor(Math.random() * fit))
  }

  // we are returning someting to the var password
  return retValue;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
