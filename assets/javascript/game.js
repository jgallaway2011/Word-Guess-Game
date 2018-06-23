//====================================================================================================================

// VARIABLES

// Array of hipsterWords to be used for the game
var hipsterWords = [
    "SKATEBOARD",
    "MIXTAPE",
    "UNICORN",
    "VENMO",
    "TYPEWRITER",
    "CLICHE",
    "FORAGE",
    "OCCUPY",
    "SELFIES",
    "TOFU",
    "FLANNEL",
    "FAM",
    "VINYL",
    "ETSY",
    "YOGA",
    "BREWERY",
    "BEER",
    "MEDITATION",
    "PABST",
    "BICYCLE",
    "ARTISAN",
    "ORGANIC",
    "DISTILLERY",
    "PINTEREST",
    "TYPEWRITER",
    "AESTHETIC",
    "CORNHOLE"
];

// Computer selects a random hipsterWord from our hipsterWords Array
var hipsterWord = hipsterWords[Math.floor(Math.random() * hipsterWords.length)];

// Start the game with zero wins
var wins = 0;

// Start the game with zero losses
var losses = 0;

// Computer starts user with a certain amount of guesses based on the length of the hipsterWord randomly selected
var guessesRemaining = Math.ceil(hipsterWord.length * 8/3);

// Emptry array that will hold " _ " for letters
var hipsterWordHidden = [];

// Empty array that will be used later to collect letters guessed by player
var lettersGuessed = [];

var hipsterWordDisplay = document.getElementById("currentWord");

//====================================================================================================================

// FUNCTIONS

// Function to insert random word into game
function insertHipseterWord() {
    for (var i = 0; i < hipsterWord.length; i++) {                                                            
        hipsterWordHidden.push("  _  ");                                                                       
    }
    hipsterWordDisplay.innerHTML = hipsterWordHidden.join("  ");                
}

// Function to display wins
function winsTracker() {                                                                                       
    document.querySelector("#wins").innerHTML = "Wins: " + wins;                                               
  }

// Function to display losses
function lossesTracker() {                                                                                       
    document.querySelector("#losses").innerHTML = "Losses: " + losses;                                               
  }

// Function to show guesses remaining in current game
function guessesRemainingTracker() {                                                                           
    document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesRemaining;
  }

// MAIN PROCESS
// ==============================================================================

// Displays initial wins of zero
winsTracker();

// Displays initial losses of zero
lossesTracker();

// Displays computer generated amount of guesses to start based on word length
guessesRemainingTracker();

// Displays word hidden on the document for the start of the game
insertHipseterWord();

document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();

    for (var i= 0; i < hipsterWord.length; i++) {
        if (hipsterWord.charAt(i) === letter) {
            hipsterWordHidden[i] = letter;
            document.getElementById("currentWord").innerHTML = hipsterWordHidden.join("  ");
        }
    }

    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed.join("  ");
        guessesRemaining--;
        guessesRemainingTracker();
    } else {
        alert("Letter already guessed!");
    }
    
    if (guessesRemaining >= 0 && hipsterWordHidden.indexOf("  _  ") === -1) {
        document.getElementById("currentWord").innerHTML = "You won!";
        wins++;
        winsTracker();
        hipsterWord = hipsterWords[Math.floor(Math.random() * hipsterWords.length)];
        insertHipseterWord();
        guessesRemaining = Math.ceil(hipsterWord.length * 8/3);
        guessesRemainingTracker();
        lettersGuessed = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed.join("  ");
        

    } else if (guessesRemaining === 0 && hipsterWordHidden.indexOf("  _  ") !== -1) {
        document.getElementById("currentWord").innerHTML = "You lost!";
        losses++;
        lossesTracker();
        hipsterWord = hipsterWords[Math.floor(Math.random() * hipsterWords.length)];
        insertHipseterWord();
        guessesRemaining = Math.ceil(hipsterWord.length * 8/3);
        guessesRemainingTracker();
        lettersGuessed = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed.join("  ");

    } else {
       // Keep Guessing Letters
    }

}

