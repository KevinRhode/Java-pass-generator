

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

  //Basic password selection - local ref to recreate so no string options are still present
var charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";


// include special char - if changed
  chkIncludeSpecialChar = document.getElementById("special-char").checked;
// include number - if changed
  chkIncludeNumber = document.getElementById("number").checked;
//include space - if changed
  chkIncludeSpace = document.getElementById("space").checked;

  //if true include special char in the available char's of the random password 
  if (chkIncludeSpecialChar) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  //if true include numbers in the available char's of the random password 
  if (chkIncludeNumber) {
    charset += "0123456789";
  }
  //if true include space in the available char's of the random password 
  if (chkIncludeSpace) {
    charset += " ";
  }
  //value of the password to be returned
  var retValue = "";

  for (let index = 0 , fit = charset.length; index < genPassLength.value; index++) {
      //math.random - can be equal or greater then 0, and less then 1.
      //we use floor to get whole int
      //random * fit to give value between start and end of string. as 0 is starting point
      //charAt string method to return char on index value
      retValue += charset.charAt(Math.floor(Math.random() * fit))
  }

  // we are returning someting to the var password
  return retValue;

}



// Write password to the #password input

function writePassword() {
  //generate the password
  var password = generatePassword();
  //find and select the element with id password
  var passwordText = document.querySelector("#password");
  //set the .value of the element to password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
