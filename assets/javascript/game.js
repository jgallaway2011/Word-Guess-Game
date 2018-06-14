//====================================================================================================================

// VARIABLES

// Array of hipsterWords to be used for the game
var hipsterWords = [
    "skateboard",
    "mixtape",
    "unicorn",
    "venmo",
    "typewrite",
    "cliche",
    "forage",
    "occupy",
    "selfies",
    "tofu",
    "flannel",
    "fam",
    "vinyl",
    "etsy",
    "yoga",
    "brewery",
    "beer",
    "meditation",
    "pabst",
    "bicycle",
    "artisan",
    "organic",
    "distillery",
    "pinterest",
    "typewriter",
    "aesthetic",
    "cornhole"
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

// FUNCTION TO CHANGE LETTERS GUESSED CORRECTLY FROM "_" TO ACTUAL LETTER
function insertCorrectlyGuessedLetter () {
    for (var i = 0; i < hipsterWord.length; i++) {
        if (letter === hipsterWord.charAt(i)) {
            console.log(letter);
        }
    }
}

// Function to display wins
function winsTracker() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
  }

// Function to show guesses remaining in current game
function guessesRemainingTracker() {
    document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesRemaining;
}
    
// MAIN PROCESS
// ==============================================================================

winsTracker();
guessesRemainingTracker();
insertHipseterWord();

while (guessesRemaining > 0) {

document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();
        
        for (var i = 0; i < hipsterWord.length; i++) {
            if (letter === hipsterWord.charAt(i)) {
                guessesRemaining--;
                console.log(letter);
                console.log(guessesRemaining);
            // Tell program to reduce guesesRemaining by 1
            // Tell program to change the letter from "_" to actual letter
            }
        }
};




}