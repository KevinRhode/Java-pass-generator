
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword(){
// condition bool of number input
let condition = true;
do {

  let lengthOfPassword = parseInt(prompt("Please enter the length, must be between 8 and 128. Thank you"));
  if (lengthOfPassword === null) {
    return "Please complete the Prompts"
  }
  if (lengthOfPassword != NaN) {
    if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
      //find and select the element with id password
      var lengthValue = document.querySelector("#pass-length");
      //set the .value of the element to password
      lengthValue.value = lengthOfPassword;
      condition = false;

  } else{  
    //tell user what they did wrong
    alert("Enter a Number greater or equal to 8 and equal to or less then 128");  
    
  }
  }
 

} while (condition);

let questions = ["Include Uppercase? Enter y/n","Include Lowercase? Enter y/n","Include Numbers? Enter y/n","Include Special Characters? Enter y/n"];
let charsets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmopqrstuvwxyz","0123456789"," !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
let returnCharSet = "";
//AC - ATLEAST one must be accepted to continue on
let atLeastOneSelected =false;
do {
  // checks the return to choose an action. 
  switch (returnCharSet) {    
  case "":

    for (let index = 0; index < questions.length; index++) {  
      let conditionForCharacters = true;  
      do {
    
        let currentQuestion = prompt(questions[index]);
        if (currentQuestion === null) {
          return "Please complete the Prompts"
        }
        //validate   
      
        if (currentQuestion.toLowerCase() == "y") {        
      
          returnCharSet += charsets[index];
          //to show that a condition to include was choosen
          conditionForCharacters = false;
          //tells program that atleast one was added to return
          atLeastOneSelected = true;
      
        } else if(currentQuestion.toLowerCase() == "n"){
          //to show that a condition to not include was choosen
          conditionForCharacters = false;
        }else{
          //tell the user what you need
          alert("Enter only y or n")
        }
    
      } while (conditionForCharacters);
  
    }  

    break;
    
    default:
      break;
  }
} while (!atLeastOneSelected);
 
  let genPassLength = document.querySelector("#pass-length");
  
  // let cheetsheet
  // let charsets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmopqrstuvwxyz","0123456789"," !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

  // include special char in pass
  let chkIncludeSpecialChar = document.querySelector("#special-char");
  // to set on second pass if you change your option
  chkIncludeSpecialChar["checked"] = false;

  // include number in pass
  let chkIncludeNumber = document.querySelector("#number");
  // to set on second pass if you change your option
  chkIncludeNumber["checked"] = false;

if (returnCharSet.includes(charsets[2])) {
  //set to checked in return includes array element
  chkIncludeNumber["checked"] = true;
}
if (returnCharSet.includes(charsets[3])) {
  //set to checked in return includes array element
  chkIncludeSpecialChar["checked"] = true;
}

  // //value of the password to be returned
  let retValue = "";

  for (let index = 0 , fit = returnCharSet.length; index < genPassLength.value; index++) {
      //math.random - can be equal or greater then 0, and less then 1.
      //we use floor to get whole int
      //random * fit to give value between start and end of string. as 0 is starting point
      //charAt string method to return char on index value
      retValue += returnCharSet.charAt(Math.floor(Math.random() * fit))
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
