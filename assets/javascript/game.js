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

// Computer starts user with a certain amount of guesses based on the length of the hipsterWord randomly selected
var guessesRemaining = Math.ceil(hipsterWord.length * 8/3);

// Emptry array that will hold " _ " for letters
var hipsterWordHidden = [];

// Empty array that will be used later to collect letters guessed by player
var lettersGuessed = [];

//====================================================================================================================

// FUNCTIONS

// Function to insert random word into game
function insertHipseterWord() {
    for ( var i = 0; i < hipsterWord.length; i++) {
        hipsterWordHidden.push(" _ ");
    }
    document.getElementById("currentWord").innerHTML = hipsterWordHidden.join("  ");
}

// Function to display wins
function winsTracker() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
  }

// Function to show guesses remaining in current game
function guessesRemainingTracker() {
    document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesRemaining;
  }

function lettersGuessedTracker() {
    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();

        for (var i= 0; i < hipsterWord.length; i++) {
            if (hipsterWord.charAt(i) === letter) {
                hipsterWordHidden[i] = letter;
                document.getElementById("currentWord").innerHTML = hipsterWordHidden.join("  ");
            }
        }

        if (lettersGuessed.indexOf(letter) === -1) {                                                                          // Check if letter is in lettersGuessed Array
            lettersGuessed.push(letter);                                                                                      // Insert letter in array if not guessed before
            document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed.join("  "); 
            guessesRemaining--;                                                                                               // Subtract guuesesRemaining by one
            guessesRemainingTracker();                                                                                        // Reprint to display gueses remaining
        } else {
            alert("Letter already guessed!");                                                                                 //Alert user if letter guessed more than once
        }
    }
}



// MAIN PROCESS
// ==============================================================================

// Displays intial wins of zero
winsTracker();

// Displays computer generated amount of guesses to start based on word length
guessesRemainingTracker();

// Displays word hidden on the document for the start of the game
insertHipseterWord();

if (hipsterWordHidden.indexOf(" _ ") !== -1) {

    //Adds any letters already guessed to the document 
      lettersGuessedTracker();

} else if (guessesRemaining >= 0 && hipsterWordHidden.indexOf(" _ ") == -1) {

    document.getElementById("currentWord").innerHTML = "You won!";
    wins++;
    winsTracker();

} else {

    document.getElementById("currentWord").innerHTML = "You lost! Try Again!";
    insertHipseterWord();
}
