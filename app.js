//declared variables for letters and guesses:
var lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var guess;
var actualLetter;
var guessedLetters = [];

//declared variables for wins losses and other stats:
var winCount = 0;
var lossCount = 0;
var numGuesses = 10;

//console.log(lettersArray);

//need to have a function to not allow a letter to be guessed more than once (by checking against guessedLetters array?)
//********************************************************************************************************************
//actual start of game:
getLetter();

document.onkeyup = function(event) {
  guess = String.fromCharCode(event.which).toLowerCase();
  guessedLetters.push(guess);
  document.getElementById("displayGuess").innerHTML =
    "Guess Letters: <br/> " + guessedLetters.join(",");
    resetColor();
  checkLetter();
};
console.log(guess);

//********************************************************************************************************************

//assign random num to actualLetter variable
function getLetter() {
  actualLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
  console.log(actualLetter);
  return actualLetter;
}

// //fx for conditional comparison of actualLetter and user guess, decrements numGuesses, checks if game over, pushes guesses to an array to track
function checkLetter() {
  if (guess !== actualLetter) {
    numGuesses--;
    console.log(numGuesses);
    console.log(guess);
    console.log(guessedLetters);
    checkGameStatus();
    
  } else {
    document.getElementById("resultReply").innerHTML =
      "This is amazing...you are psychic! GAME OVER!";
    winCount++;
    document.getElementById("wins").innerHTML = "Wins: " + winCount;
    changeColorGreen();
    resetGame();
  }
}

// //checks for numGuesses and sees if reach 0, message sent to doc, establishes either w | l out to doc, if game continues a taunting msg to user.
function checkGameStatus() {
  if (numGuesses === 0) {
    document.getElementById("resultReply").innerHTML =
      "This is ridiculous...you are not psychic-GAME OVER!";
    lossCount++;
    document.getElementById("loss").innerHTML = "Losses: " + lossCount;
    changeColorRed();
    resetGame();
  } else {
    document.getElementById(
      "resultReply"
    ).innerHTML = `hmmm...I will give you ${numGuesses} more...try to hear my thoughts`;
  }
}

//display change with loss
function changeColorRed() {
  var newsFlash = document.getElementById("resultReply");
  var gameOverDisplay = document.createAttribute("class");
  gameOverDisplay.value = "wrongAnswer";
  newsFlash.setAttributeNode(gameOverDisplay);
}

function changeColorGreen() {
  var newsFlash = document.getElementById("resultReply");
  var gameOverDisplay = document.createAttribute("class");
  gameOverDisplay.value = "rightAnswer";
  newsFlash.setAttributeNode(gameOverDisplay);
}

function resetColor() {
  var newsFlash = document.getElementById("resultReply");
  var gameOverDisplay = document.createAttribute("class");
  gameOverDisplay.value = "resetColor";
  newsFlash.setAttributeNode(gameOverDisplay);
}
// //once game over resets the variables to [] and 10
function resetGame() {
  numGuesses = 10;
  guessedLetters = [];
  getLetter();
}
