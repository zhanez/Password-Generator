// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign code for arrays 
var combinecharacters = []
var includelowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var includeuppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var includeSymbols = ["!","@","#","$","%","^","&","*","(",")","+","-","?","<",">","/"];
var includeNumbers = ["0","1","2","3","4","5","6","7","8","9"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//prompt that appears when you click generate button
function generatePassword(){
  var password= ""
  var length = prompt('How long do you want your password to be?')
  if (length <8)
  {
    alert("length <8")
  }
  else if (length >128)
{
  alert("length >128")
  }
  else {

    // Confirm using lower, uppercase, numbers and symbols
    var uppercaseChars = confirm("Do you want uppercase characters in your password?")
    var lowercaseChars = confirm("Do you want lowercase characters in your password?")
    var symbolsChars = confirm("Do you want symbols characters in your password?")
    var numbersChars = confirm("Do you want numbers characters in your password?")
    combinecharacters = []

    if (uppercaseChars){
      combinecharacters = combinecharacters.concat(includeuppercase)
    }
    if (lowercaseChars){
      combinecharacters = combinecharacters.concat(includelowercase)
    }
    if (symbolsChars){
      combinecharacters = combinecharacters.concat(includeSymbols)
    }
    if (numbersChars){
      combinecharacters = combinecharacters.concat(includeNumbers)
    }
    console.log(combinecharacters)

    //if someone cancels to put any criteria into password generator 
    if (lowercaseChars === false && uppercaseChars === false && symbolsChars === false && numbersChars === false){
      alert("You must pick an option to generate password.");
      return '';
    }

    //randomly selects each array to put into password length
    for (var i = 0; i < length; i ++) {
      var randomNum = Math.floor(Math.random() * combinecharacters.length)
      password += combinecharacters[randomNum]
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);