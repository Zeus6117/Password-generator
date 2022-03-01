// Assignment code here
// var passwordLength = 8 < 128;
// var password = "";

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+?><:{}[]";

  var selectedSet = "";


  var passwordLength = window.prompt("How many characters would you like?");
  var generatedPassword = "";

  while (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    passwordLength = window.prompt("How many characters would you like?");
  }

  ////////////////////////////////////////

  //1. Prompt the user for the password criteria
  var question1 = window.confirm(
    "Would you like lower case characters? Enter YES or NO."
  );
  // if (question1 === "NO" || question1 === "no");
  // {
  // }
  // if (question1 === "" || question1 === null);
  // {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   return question1();
  // }
  // //console.log(question1);

  var question2 = window.confirm(
    "Would you like upper case characters? Enter YES or NO."
  );
  // {
  //   if (question2 === "YES" || question2 === "yes");
  //   upperCase();
  // }
  // if (question2 === "NO" || question2 === "no");
  // {
  // }
  // if (question2 === "" || question2 === null);
  // {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   //return question2()
  // }
  // console.log(question2);

  var question3 = window.confirm("Would you like numbers? Enter YES or NO.");
  
  // if (question3 === "YES" || question3 === "yes");
  // {
  //   numbers();
  // }
  // if (question3 === "NO" || question3 === "no");
  // {
  // }
  // if (question3 === "" || question3 === null);
  // {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   //return question3()
  // }
  // console.log(question3);

  var question4 = window.confirm(
    "Would you like special characters? Enter YES or NO."
  );
  
  // if (question4 === "YES" || question4 === "yes");
  // {
  //   special();
  // }
  // if (question4 === "NO" || question4 === "no");
  // {
  // }
  // if (question4 === "" || question4 === null);
  // {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   //return question4()
  // }
  // console.log(question4);

  ////////////////////////////
  console.log(question1)
  console.log(question2)
  console.log(question3)
  console.log(question4)
  
  if (question1 == true)
  {
    selectedSet = selectedSet + lowerCase;
  }

  if (question2 == true)
  {
    selectedSet = selectedSet + upperCase;
  }

  if (question3 == true)
  {
    selectedSet = selectedSet + numbers;
  }

  if (question4 == true)
  {
    selectedSet = selectedSet + special;
  }
  ////////////////////////////////////////

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * selectedSet.length);
    // password += chars.substring(randomNumber, randomNumber + 1);

    generatedPassword = generatedPassword + selectedSet[randomNumber];
  }

  console.log(generatedPassword);
  //2. Validate the input
  //3. Generate password based in criteria.ha

  //Display generated password to the page
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
