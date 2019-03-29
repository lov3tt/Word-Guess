// Array for hangman
var PokemonArray = ["pikachu", "raichu", "bulbasaur", "ivysaur", "venusaur","charmander", "charmeleon", "charizard",
"squirtle", "wartortle", "blastoise", "jigglypuff", "wigglytuff"];
console.log(PokemonArray);
// variable
var wins =0,
   loses =0,
   guess =6;
   

// variable that hold word choices
var generate = "";
var pick= [];
var placeholder= 0;
var userGuess = [];
var correctGuess= [];
var wrongGuess= [];
var underscore = [];


// //replace the letter with "_" underscore
// for (var i=0; i<placeholder; i++){
//     underscore.push("_");
// }
//Fxn that pick a word from the array.
function update () {
//randomly choose a string from the array
    generate = PokemonArray[Math.floor(Math.random() * PokemonArray.length)];
//break up the string in an array
    pick = generate.split("");
//make the variable flexible to the length of the randomly chosen word
    placeholder = pick.length;
//Add variables inside the fxn
var underscore = [];
//Replace the letter with _ via pushing.
for (var i=0; i<placeholder; i++){
    underscore.push('_ ');
}
//Variable that hold reference in the HTML
var winsText = document.getElementById("Win-Text");
var losesText = document.getElementById("Lost-Text");
var guessText = document.getElementById("Guess-Text");
var wrongGuessText = document.getElementById("Userguess-Text");
var underscoreText = document.getElementById("Display");
var correctGuessText = document.getElementById("");
//Display the stats on the HTML
winsText.textContent = "Wins: "+wins;
losesText.textContent = "Losses: "+loses;
guessText.textContent = "Guesses Remaining: " + guess;
wrongGuessText.textContent ="Guesses"+ wrongGuess;
underscoreText.textContent = underscore;
//Something is broken here
document.onkeyup = function(event){
    userGuess = event.key.toLowerCase();
//copy&paste Convert to only letters response, but how?
function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert("Please choose letters only");
    }
} 
//Logic that determine if part of the letter is guess right or wrong

//2nd attempt at Logic

}

console.log(userGuess);
console.log(pick);
console.log(generate);
console.log(placeholder);
console.log(underscore);


}
update()


