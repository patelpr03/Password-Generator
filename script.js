

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passlength, cuppercase, clowercase, csymbols, cnumbers;
function askQuestions() {

  passlength= prompt("How many characters would you like your password to be?");
  while ((passlength < 8 || passlength > 128) )
  {
    passlength = prompt("Length must be 8-128 characters");
  }
  cuppercase = confirm("Would you like to use uppercase letters?");
  clowercase = confirm("Would you like to use lowercase letters?");
  cnumbers = confirm("would you like to use numbers?");
  csymbols = confirm("would you like to use special characters?");

  while (!(cuppercase || clowercase || cnumbers || csymbols)) {
    alert("You must select at least one character type!");

    cuppercase = confirm("Would you like to use uppercase letters?");
    clowercase = confirm("Would you like to use lowercase letters?");
    csymbols = confirm("would you like to use special characters?");
    cnumbers = confirm("would you like to use numbers?");
   
  }
}

// Write password to the #password input
function writePassword() {
  askQuestions()
  var password = generatePassword(clowercase, cuppercase, csymbols, cnumbers, passlength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber
};

function generatePassword(lower, upper, symbol, number,  length) {
  var validCharacters = ""
  if(lower) {
    validCharacters += getRandomLower()
  }
  if(upper) {
    validCharacters += getRandomUpper()
  }
  if(symbol) {
    validCharacters += getRandomSymbol()
  }
  if(number) {
    validCharacters += getRandomNumber()
  }

  console.log(validCharacters)
  let generatedPassword = '';
  

  // // create a loop
  for (let i = 0; i < length; i ++) {
    
    var randomIndex = Math.floor(Math.random() * validCharacters.length)
    var randomCharacter = validCharacters[randomIndex];
    generatedPassword += randomCharacter
  }

  // const finalPassword = generatedPassword.slice(0, length);

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function getRandomLower() {
  return "gwrtyuiqopasdfhjklzexcvbnm"
}

function getRandomUpper() {
  return "QWERTYUIOPASDFGHJKLZXCVBNM";
}

function getRandomNumber() {
  return "1234567890";
}

function getRandomSymbol() {
  return '!@#$%^&*(){}[]=<>/,.'; 
}

