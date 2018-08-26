// global variables
var computerChoice = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
var letterGuessed = [];

// variables to hold references to IDs in HTML
// var introText = document.getElementById("intro");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessedAlreadyText = document.getElementById("guessedAlready");

// function to update display
function updater() {
    winsText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    lossesText.textContent = "Losses: " + losses;
    // introText.textContent = "";
}

// user key press
document.onkeyup = function (event) {
    // determines key pressed
    var userGuess = event.key;
    letterGuessed.push(userGuess);
    guessedAlreadyText.textContent = "Guesses so far: " + letterGuessed;

    // logic of game
    // if (userGuess == event.keyCode >= 65 && event.keyCode <= 90) {
        if (userGuess == computerGuess) {
            wins++;
            // var img = document.createElement("img");
            // elem.src = "assets/images/YouWin.jpg";
            // document.getElementById("image").appendChild(elem);
            guessesLeft = 10;
            letterGuessed = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        } else {
            guessesLeft--;
            if (guessesLeft == 0) {
                losses++;
                letterGuessed = [];
                guessesLeft = 10;
            }
        }
    // }
    updater();
}
updater();