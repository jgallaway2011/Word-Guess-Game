//====================================================================================================================

// VARIABLES

// Array of hipsterWords to be used for the game
var hipsterWords = [
    "SKATEBOARD",
    "MIXTAPE",
    "UNICORN",
    "VENMO",
    "TYPEWRTIER",
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

console.log(hipsterWord);
console.log(wins);
console.log(guessesRemaining);
//====================================================================================================================

// FUNCTIONS

// Function to insert random word into game
function insertHipseterWord() {
    for ( var i = 0; i < hipsterWord.length; i++) {
        hipsterWordHidden.push(" _ ");
        var newLetterDiv = document.createElement("div");                       // Create a <p> element
        var hipsterLetterHidden = document.createTextNode(hipsterWordHidden[i]);       // Create a text node
        newLetterDiv.appendChild(hipsterLetterHidden);                                     // Append the text to <p>
        newLetterDiv.className = "hispterLetter" + i;
        document.getElementById("currentWord").appendChild(newLetterDiv);                              // Append <p> to <body>
        
    }
    console.log(hipsterWordHidden);
}

// Function to display wins
function winsTracker() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
  }

// Function to show guesses remaining in current game
function guessesRemainingTracker() {
    document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesRemaining;
    }``

function lettersGuessedTracker() {
    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();

        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            var newLetterDiv = document.createElement("div");                       // Create a <div> element
            var lettersGuessedList = document.createTextNode(" " + letter + " ");   // Create a text node
            newLetterDiv.appendChild(lettersGuessedList);                           // Append the text to <div>
            document.getElementById("lettersGuessed").appendChild(newLetterDiv);
            guessesRemaining--;
            guessesRemainingTracker();
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

//Adds any letters already guessed to the document
lettersGuessedTracker();