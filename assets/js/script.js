//choose length


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Assignment code here
function generatePassword(){

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// // THEN I am presented with a series of prompts for password criteria
//prompt function     

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters

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
    
  }
  }
 

} while (condition);


// WHEN asked for character types to include in the password

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// let lowercase="abcdefghijklmopqrstuvwxyz";
// let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numeric="0123456789";
// let special="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// var passwordCharacterOptionCards = {
//   type:"lowercase",
//   question:"Include lowercase? ",

//   charset:"abcdefghijklmopqrstuvwxyz",
//   getAnswer:function(){
//     do {

//       let answer = prompt(this.question);
//       if (answer.toLowerCase() === "y") {

//         // add 



//       }else if (answer.toLowerCase() === "n") {

//         // do not add

//       }else{

//         // user did something

//       }
      
//     } while (condition);
//   }
  
// };






let lowercase = false;
let uppercase = false;
let numeric = false;
let special = false;

let questions = ["Include Uppercase? Enter y/n","Include Lowercase? Enter y/n","Include Numbers? Enter y/n","Include Special Characters? Enter y/n"];

let charsets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmopqrstuvwxyz","0123456789"," !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
let returnCharSet = "";
let atLeastOneSelected =false;
do {
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
        conditionForCharacters = false;
        atLeastOneSelected = true;
    
      } else if(currentQuestion.toLowerCase() == "n"){
        conditionForCharacters = false;
      }else{
        alert("Enter only y or n")
      }
    
    } while (conditionForCharacters);
  
  }  
    break;
    
    default:
      break;
  }
} while (!atLeastOneSelected);








// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria

// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page




  // //Basic password selection - local ref to recreate so no string options are still present
  // var charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
  // // include special char
  // var chkIncludeSpecialChar = document.getElementById("special-char").checked;
  // // include number
  // var chkIncludeNumber = document.getElementById("number").checked;
  // //include space 
  // var chkIncludeSpace = document.getElementById("space").checked;
  // // set length have default
  let genPassLength = document.querySelector("#pass-length");
  // let charsets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmopqrstuvwxyz","0123456789"," !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  // include special char
  let chkIncludeSpecialChar = document.querySelector("#special-char");
  // // include number
  let chkIncludeNumber = document.querySelector("#number");
if (returnCharSet.includes(charsets[2])) {
  chkIncludeNumber["checked"] = true;
}
if (returnCharSet.includes(charsets[3])) {
  chkIncludeSpecialChar["checked"] = true;
}



  // if (genPassLength.value>128) {
  //   return "Limit reached, lower password length";
  // }
  // //if true include special char in the available char's of the random password 
  // if (chkIncludeSpecialChar) {
  //   charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // }
  // //if true include numbers in the available char's of the random password 
  // if (chkIncludeNumber) {
  //   charset += "0123456789";
  // }
  // //if true include space in the available char's of the random password 
  // if (chkIncludeSpace) {
  //   charset += " ";
  // }
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
