
//====================================================================================================================
// Word Guess Game
//====================================================================================================================

// Built Out
// End game screen when no words left in hipsterWordListArray.
// Play again option button?
// Build better win or lose screen between rounds

// IMPORTS
import {hangmanCanvas} from "./canvas.js"

// VARIABLES
var hipsterWordDisplay = document.getElementById("currentWord");

//====================================================================================================================

// OBJECT
var wordGuessGame = {

    // Array of hipsterWords to be used for the game
    hipsterWords: [
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
    ],

    // Array to restrict keyboard choices to Enlgish letters
    englishLetters: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ],

    // Start the game with zero wins
    wins: 0,

    // Start the game with zero losses
    losses: 0,

    // To hold hipster word for each round of game
    hipsterWord: "",

    // To hold guesses remaining for selected word in each round of game
    guessesRemaining: 8,

    // To hold number of incorrect guesses
    numIncorrectGuesses: 0,

    // Empty array that will hold " _ " for letters of randomly selected hipsterWord
    hipsterWordHidden: [],

    // Empty array that will be collect letters guessed by player
    lettersGuessed: [],

    // Method to select a random hipsterWord from the hipsterWords array
    selectHipsterWord: function () {
        var hipsterWordIndex = Math.floor(Math.random() * this.hipsterWords.length);
        this.hipsterWord = this.hipsterWords.splice(hipsterWordIndex, 1)[0];
    },

    // Method to insert random word into game display with "_" instead of the letters
    insertHipsterWord: function () {
        this.hipsterWordHidden = []
        for (var i = 0; i < this.hipsterWord.length; i++) {
            this.hipsterWordHidden.push("_");
        }
        hipsterWordDisplay.innerHTML = this.hipsterWordHidden.join("    ");
    },

    // Method to display game wins, losses, and guessesRemaining for current word
    gameTracker: function () {
        // Displays win total
        document.querySelector("#wins").innerHTML = "Wins: " + this.wins;
        // Displays loss total
        document.querySelector("#losses").innerHTML = "Losses: " + this.losses;
        // Displays guessesRemaining for current word
        document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + this.guessesRemaining;
    },

    // Checks if user input is in the Enlgish letters
    isLetter: function (letter) {
        return this.englishLetters.indexOf(letter) !== -1;
    },

    // Method to initialize new round of game
    initializeRound: function () {

        // Clear English letters from previous round
        document.querySelector("#englishLetters").innerHTML = ""

        // Display English Letters
        this.englishLetters.forEach(function(letter) {
            document.querySelector("#englishLetters").innerHTML += "<button type=\"button\" class=\"btn btn-primary\" value=\"" + letter + "\" id=\"" + letter + "\">" + letter + "</button>"
        });

        // Selects hipsterWord to start new round of game
        this.selectHipsterWord();

        // Reset remaining guesses to 8
        this.guessesRemaining = 8;

        // Displays updated wins, losses, and guesses remaining
        this.gameTracker();

        // Displays word hidden on the document for the start of the game
        this.insertHipsterWord();

        // Clear letters guessed for each new round
        this.lettersGuessed = [];

        // Display empty letters guessed for new round
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + wordGuessGame.lettersGuessed.join("  ");

        // Reset incorrect guesses to zero
        this.numIncorrectGuesses = 0;

        // Reset Canvas
        hangmanCanvas.resetCanvas();
    }
}

// MAIN PROCESS
//====================================================================================================================

// Initialize round of game
wordGuessGame.initializeRound()

// Listen for key up events on keyboard
document.onkeyup = function (event) {
    // Save user selection in variable
    var letter = event.key.toUpperCase();
    wordGuessGameLogic(letter);
}

// Listen for onclick events (this works but feels hacky.  The onclick would ideally be in the buttons dynamically generated .)
document.onclick = function (event) {
    // If user click has value letter in the English letter array, then:
    if (wordGuessGame.isLetter(event.path[0].value)) {
        // Call game logic with that letter
        wordGuessGameLogic(event.path[0].value);
    }
}

document.ontouchstart = function (event) {
    // If user click has value letter in the English letter array, then:
    if (wordGuessGame.isLetter(event.path[0].value)) {
        // Call game logic with that letter
        wordGuessGameLogic(event.path[0].value);
    }
}

// Function holding main game logic
// Placed into a function to allow logic to be called by both onkeyup events and onclick events
function wordGuessGameLogic(letter) {
    // Check if user selection is in Enlgish letters
    if (wordGuessGame.isLetter(letter)) {
        // If user selection was not previously selected this round, then:
        if (wordGuessGame.lettersGuessed.indexOf(letter) === -1) {
            // Add user selection to lettersGuessed array
            wordGuessGame.lettersGuessed.push(letter);
            // Reflect user most recent selection in DOM
            document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + wordGuessGame.lettersGuessed.join("  ");
            // Remove visibility of button
            document.getElementById(letter.toString()).style.visibility = "hidden";
            // Loop through hipsterWord characters
            if (wordGuessGame.hipsterWord.includes(letter)) {
                for (var i = 0; i < wordGuessGame.hipsterWord.length; i++) {
                    // If character at index i is same as user selection then:
                    if (wordGuessGame.hipsterWord.charAt(i) === letter) {
                        // Set array value at index i equal to user selection
                        wordGuessGame.hipsterWordHidden[i] = letter;
                        // Update DOM to reflect user correctly guessed a letter
                        document.getElementById("currentWord").innerHTML = wordGuessGame.hipsterWordHidden.join("    ");
                    }
                }
            } else {
                // Reduce guessesReamining by 1
                wordGuessGame.guessesRemaining--;
                // Update DOM to reflect reduction in guessesReamining
                wordGuessGame.gameTracker();
                // Add 1 to incorrect guesses
                wordGuessGame.numIncorrectGuesses++;
                // If incorrect guesses equals one, then draw face
                if (wordGuessGame.numIncorrectGuesses === 1) {
                    hangmanCanvas.drawFace();
                // Else if incorrect guesses equals two, then draw body line
                } else if (wordGuessGame.numIncorrectGuesses === 2) {
                    hangmanCanvas.drawBody();
                // Else if incorrect guesses equals three, then draw right arm
                } else if (wordGuessGame.numIncorrectGuesses === 3) {
                    hangmanCanvas.drawRightArm();
                // Else if incorrect guesses equals four, then draw left arm
                } else if (wordGuessGame.numIncorrectGuesses === 4) {
                    hangmanCanvas.drawLeftArm();
                    hangmanCanvas.drawStraightLineMouth();
                // Else if incorrect guesses equals five, then draw right leg
                } else if (wordGuessGame.numIncorrectGuesses === 5) {
                hangmanCanvas.drawRightLeg();
                // Else if incorrect guesses equals six, then draw left leg
                } else if (wordGuessGame.numIncorrectGuesses === 6) {
                hangmanCanvas.drawLeftLeg();
                // Else if incorrect guesses equals 7, then draw noose
                } else if (wordGuessGame.numIncorrectGuesses === 7) {
                    hangmanCanvas.drawNoose();
                    hangmanCanvas.drawFrownyFace();
                // Else if incorrect guesses equals 8, then draw dead face and lower body.
                } else if (wordGuessGame.numIncorrectGuesses === 8) {
                    hangmanCanvas.drawDeadFace();
                    hangmanCanvas.drawBodyLower();
                }
            }
            
            // If zero or more guesses remaining and all letters of hidden word guessed, then:
            if (wordGuessGame.guessesRemaining >= 0 && wordGuessGame.hipsterWordHidden.indexOf("_") === -1) {
                // Notify user that round was won
                document.getElementById("currentWord").innerHTML = "You won!";
                // Increase wins by 1
                wordGuessGame.wins++;
                // Start new round
                wordGuessGame.initializeRound();
                // If zero guesses remaining and not all letters of hidden word guessed, then:
            } else if (wordGuessGame.guessesRemaining === 0 && wordGuessGame.hipsterWordHidden.indexOf("_") !== -1) {
                // Notfiy user that the round was lost
                document.getElementById("currentWord").innerHTML = "You lost!";
                // Increase losses by 1
                wordGuessGame.losses++;
                // Start New Round
                wordGuessGame.initializeRound();
            }
        } else {
            // Alert user that this letter was already guessed
            alert("Letter already guessed!");
        }
    }
}