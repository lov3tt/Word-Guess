// Array for hangman
var PokemonArray = ["pikachu", "raichu", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "jigglypuff", "wigglytuff"];

// variable
var wins = 0;
var loses = 0;
var guessRemaining = 0;
var guessLimit = 7;
var gameStarted = false;

// variable that hold word choices
var pickedWord = "";
var pick = [];
var userGuess = [];
var correctGuess = [];
var wrongGuess = [];
var underscore = [];

//Variable that hold reference in the HTML
var winsText = document.getElementById("Win-Text");
var losesText = document.getElementById("Lost-Text");
var guessText = document.getElementById("Guess-Text");
var wrongGuessText = document.getElementById("Userguess-Text");
var underscoreText = document.getElementById("Display");
var correctGuessText = document.getElementById("");


//figure out to make it run auto
function update(guess) {

    //The user has not previously guessed the letter.
    if (correctGuess.indexOf(guess) == -1 && wrongGuess.indexOf(guess) == -1) {

        //User guessed incorrectly
        if (pickedWord.indexOf(guess) == -1) {
            wrongGuess.push(guess);
            guessRemaining--;
            //gameover & restart
            if (0 >= guessRemaining) {
                loses++
                alert("You lose!");
                
                restart();
            }
        }
        //user guessed correct
        else {
            //replace the _ with the correct guess letter
            correctGuess.push(guess);
            //game won & restart: When the value of _ no longer exist in the whatToDraw fxn, add+1,alert, and restart
            if (whatToDraw().indexOf("_") == -1) {
                wins++
                alert("You win! The pokemon was: " + pickedWord)

                restart();
            }
        }
    }
    else {
        alert("You have already guessed letter: " + guess + ", please guess another.")
    }

    winsText.textContent = "Wins: " + wins;
    losesText.textContent = "Losses: " + loses;
    guessText.textContent = "Guesses Remaining: " + guessRemaining;
    wrongGuessText.textContent = "Guesses: " + wrongGuess;
    underscoreText.textContent = whatToDraw();
}

function restart() {
    guessRemaining = guessLimit;

    wrongGuess = [];
    correctGuess = [];
    underscore = [];
    userGuess = [];

    //randomly choose a string from the array
    pickedWord = PokemonArray[Math.floor(Math.random() * PokemonArray.length)];



    update();
}
//Draw in _ base on picked word length
function whatToDraw() {
    
    var stringToDraw = "";

    for(var i = 0; i < pickedWord.length; i++){
        var currentCharacter = pickedWord[i];

        if(correctGuess.indexOf(currentCharacter) != -1){
            stringToDraw += currentCharacter + " ";
//replace the letters with _
        }
        else{
            stringToDraw += "_ ";
        }
    }

    return stringToDraw;
}

//User keypress that only account for letters
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 && gameStarted) {
        //Get the character as lowercase for comparison simplicity.
        userGuess = event.key.toLowerCase();

        update(userGuess);
    }

    //
    else if(gameStarted == false){
        gameStarted = true;
        restart();
    }
    else {
        alert("Please guess a letter, other characters are not allowed.")
    }
}
