
//====================================================================================================================
// Word Guess Game
//====================================================================================================================

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

    // Empty array that will hold " _ " for letters of randomly selected hipsterWord
    hipsterWordHidden: [],

    // Empty array that will be collect letters guessed by player
    lettersGuessed: [],

    // Method to select a random hipsterWord from the hipsterWords array
    selectHipsterWord: function() {
        var hipsterWordIndex = Math.floor(Math.random() * this.hipsterWords.length);
        this.hipsterWord = this.hipsterWords.splice(hipsterWordIndex, 1)[0];
    },

    // Method to insert random word into game display with "_" instead of the letters
    insertHipsterWord: function() {
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
        // document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + this.guessesRemaining;
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
            document.querySelector("#englishLetters").innerHTML += "<button type=\"button\" class=\"btn btn-letter\" id=\"" + letter + "\"value=\"" + letter + "\" style=\"width: 38px;\">" + letter + "</button>";
        });

        // Add Click Event Listner to each letter to call wordGuessGameLogic function with respective letter
        this.englishLetters.forEach(function(letter) {
            document.getElementById(letter).addEventListener("click", function() {
                wordGuessGameLogic(letter);
            });
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
        // document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + wordGuessGame.lettersGuessed.join("  ");

        // Reset incorrect guesses to zero
        this.numIncorrectGuesses = 0;

        // Reset Canvas
        hangmanCanvas.resetCanvas();
    },
    // Method to reset entire game
    resetGame: function() {
        // Reset wins to 0
        this.wins = 0;
        // Reset losses to 0
        this.losses = 0;
        // Reset hipsterWords array to contain all words
        this.hipsterWords = ["SKATEBOARD", "MIXTAPE", "UNICORN", "VENMO", "TYPEWRITER", "CLICHE", "FORAGE", "OCCUPY", "SELFIES", "TOFU", "FLANNEL", 
        "FAM", "VINYL", "ETSY", "YOGA", "BREWERY", "BEER", "MEDITATION", "PABST", "BICYCLE", "ARTISAN", "ORGANIC", "DISTILLERY", "PINTEREST", "AESTHETIC", "CORNHOLE"];
        // Display Next Round button
        document.getElementById("startNextRound").style.display = "inline-block";
        // Display Quit Game button
        document.getElementById("quitGame").style.display = "inline-block";
        // Hide Final Score button
        document.getElementById("finalScore").style.display = "none";
        // Intialize round of game
        this.initializeRound();
    }
}

// MAIN PROCESS
//====================================================================================================================

// Initialize round of game
wordGuessGame.initializeRound()

// Listen for key down events on keyboard
document.onkeydown = function(event) {
    if (document.getElementById("winOrLoseModal").style.display !== "block" && document.getElementById("letterAlreadyGuessedModal").style.display !== "block" && document.getElementById("quitGameModal").style.display !== "block")  {
        // Call main game logic with keyboard letter
        wordGuessGameLogic(event.key.toUpperCase());
    }
}

// When the user clicks anywhere outside of the Letter Already Guessed modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("letterAlreadyGuessedModal")) {
        document.getElementById("letterAlreadyGuessedModal").style.display = "none";
    }
  }

// When the user clicks on Next Round button, close the winOrLoseModal and initalize next round
document.getElementById("startNextRound").onclick = function() {
    // Close winOrLoseModal
    document.getElementById("winOrLoseModal").style.display = "none";
    // Start new round
    wordGuessGame.initializeRound();
  }

// When the user clicks on Quit Game button, close the winOrLoseModal and open the quitGameModal
document.getElementById("quitGame").onclick = function() {
    // Close winorLoseModal
    document.getElementById("winOrLoseModal").style.display = "none";
    // Add wins to the quitGameModal
    document.getElementById("winsHeader").innerHTML = "Wins: " + wordGuessGame.wins;
    // Add losses to the quitGameModal
    document.getElementById("lossesHeader").innerHTML = "Losses: " + wordGuessGame.losses;
    // Display quitGameModal
    document.getElementById("quitGameModal").style.display = "block";
  }

// When the user clicks on Final Score button, close the winOrLoseModal and open the quitGameModal
document.getElementById("finalScore").onclick = function() {
    // Close winorLoseModal
    document.getElementById("winOrLoseModal").style.display = "none";
    // Add wins to the quitGameModal
    document.getElementById("winsHeader").innerHTML = "Wins: " + wordGuessGame.wins;
    // Add losses to the quitGameModal
    document.getElementById("lossesHeader").innerHTML = "Losses: " + wordGuessGame.losses;
    // Display quitGameModal
    document.getElementById("quitGameModal").style.display = "block";
  }

// When the user clicks on Play Again? button, close the quitGameModal and reset game.
document.getElementById("playAgain").onclick = function() {
    // Close the quitGameModal
    document.getElementById("quitGameModal").style.display = "none";
    // Reset Game
    wordGuessGame.resetGame();
  }

// Function holding main game logic
// Placed into a function to allow logic to be called by both key down and click events
function wordGuessGameLogic(letter) {
    // Check if user selection is in Enlgish letters
    if (wordGuessGame.isLetter(letter)) {
        // If user selection was not previously selected this round, then:
        if (wordGuessGame.lettersGuessed.indexOf(letter) === -1) {
            // Add user selection to lettersGuessed array
            wordGuessGame.lettersGuessed.push(letter);
            // Reflect user most recent selection in DOM
            // document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + wordGuessGame.lettersGuessed.join("  ");
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
                // If guessessRemaining equals seven, then draw face
                if (wordGuessGame.guessesRemaining === 7) {
                    hangmanCanvas.drawFace();
                    hangmanCanvas.drawSeven();
                // Else if guessessRemaining equals six, then draw body line
                } else if (wordGuessGame.guessesRemaining === 6) {
                    hangmanCanvas.drawBody();
                    hangmanCanvas.drawSix();
                // Else if guessessRemaining equals five, then draw right arm
                } else if (wordGuessGame.guessesRemaining === 5) {
                    hangmanCanvas.drawRightArm();
                    hangmanCanvas.drawFive();
                // Else if guessessRemaining equals four, then draw left arm
                } else if (wordGuessGame.guessesRemaining === 4) {
                    hangmanCanvas.drawLeftArm();
                    hangmanCanvas.drawStraightLineMouth();
                    hangmanCanvas.drawFour();
                // Else if guessessRemaining equals five, then draw right leg
                } else if (wordGuessGame.guessesRemaining === 3) {
                    hangmanCanvas.drawRightLeg();
                    hangmanCanvas.drawThree();
                // Else if guessessRemaining equals six, then draw left leg
                } else if (wordGuessGame.guessesRemaining === 2) {
                    hangmanCanvas.drawLeftLeg();
                    hangmanCanvas.drawTwo();
                // Else if guessessRemaining equals 7, then draw noose
                } else if (wordGuessGame.guessesRemaining === 1) {
                    hangmanCanvas.drawNoose();
                    hangmanCanvas.drawFrownyFace();
                    hangmanCanvas.drawOne();
                // Else if guessessRemaining equals 0, then draw dead face and lower body.
                } else if (wordGuessGame.guessesRemaining === 0) {
                    hangmanCanvas.drawDeadFace();
                    hangmanCanvas.drawBodyLower();
                }
            }
            
            // If zero or more guesses remaining and all letters of hidden word guessed, then:
            if (wordGuessGame.guessesRemaining >= 0 && wordGuessGame.hipsterWordHidden.indexOf("_") === -1) {
                // Increase wins by 1
                wordGuessGame.wins++;
                // Displays updated wins, losses, and guesses remaining
                wordGuessGame.gameTracker();
                // Header to say "You won!" in modal  
                document.getElementById("winOrLoseHeader").innerHTML = "You won!"
                // Add current word to winOrLoseModal
                document.getElementById("modalWordDiv").innerHTML = wordGuessGame.hipsterWord;
                // Add gif that assocciated with word
                document.getElementById("modalGifDiv").innerHTML = "<img src=\"assets/media/" + wordGuessGame.hipsterWord.toLowerCase() + ".gif\" alt=\"" + wordGuessGame.hipsterWord.toLowerCase() + "\" width=\"100%\" height=\"auto\"></img>";
                // If no words remaining in the hipsterWords array, then display a button for showing final score
                if (wordGuessGame.hipsterWords.length === 0) {
                    // Hide Next Round button
                    document.getElementById("startNextRound").style.display = "none";
                    // Hide Quit Game button
                    document.getElementById("quitGame").style.display = "none";
                    // Show Final Score button
                    document.getElementById("finalScore").style.display = "inline-block";
                }
                // Display Modal to nofity user won round
                document.getElementById("winOrLoseModal").style.display = "block";
            // If zero guesses remaining and not all letters of hidden word guessed, then:
            } else if (wordGuessGame.guessesRemaining === 0 && wordGuessGame.hipsterWordHidden.indexOf("_") !== -1) {
                // Increase losses by 1
                wordGuessGame.losses++;
                // Displays updated wins, losses, and guesses remaining
                wordGuessGame.gameTracker();
                // Header to say "You lost!" in modal  
                document.getElementById("winOrLoseHeader").innerHTML = "You lost!"
                // Add current word to winOrLoseModal
                document.getElementById("modalWordDiv").innerHTML = wordGuessGame.hipsterWord;
                // Add gif that assocciated with word
                document.getElementById("modalGifDiv").innerHTML = "<img src=\"assets/media/" + wordGuessGame.hipsterWord.toLowerCase() + ".gif\" alt=\"" + wordGuessGame.hipsterWord.toLowerCase() + "\" width=\"100%\" height=\"auto\"></img>";
                // If no words remaining in the hipsterWords array, then display a button for showing final score
                if (wordGuessGame.hipsterWords.length === 0) {
                    // Hide Next Round button
                    document.getElementById("startNextRound").style.display = "none";
                    // Hide Quit Game button
                    document.getElementById("quitGame").style.display = "none";
                    // Show Final Score button
                    document.getElementById("finalScore").style.display = "inline-block";
                }
                // Display Modal to nofity user won round
                document.getElementById("winOrLoseModal").style.display = "block";
            }
        } else {
            // Modal to notify user that this letter was already guessed
            document.getElementById("letterAlreadyGuessedModal").style.display = "block";
        }
    }
}