
//====================================================================================================================
// Word Guess Game
//====================================================================================================================

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

    // Array to restrict keyboard choices to Enlgish alphabet
    englishAlphabet: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ],

    // Start the game with zero wins
    wins: 0,

    // Start the game with zero losses
    losses: 0,

    // To hold hipster word for each round of game
    hipsterWord: "",

    // To hold guesses remaining for selected word in each round of game
    guessesRemaining: 0,

    // Empty array that will hold " _ " for letters of randomly selected hipsterWord
    hipsterWordHidden: [],

    // Empty array that will be collect letters guessed by player
    lettersGuessed: [],

    // Method to select a random hipsterWord from the hipsterWords array
    selectHipsterWord: function () {
        return this.hipsterWords[Math.floor(Math.random() * this.hipsterWords.length)];
    },

    // Method to calculate amount of guesses for random word chosen from the hipsterWords array
    calculateGuessesRemaining: function () {
        return Math.ceil(this.hipsterWord.length * 8 / 3);
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

    // Method to initialize new round of game
    initializeRound: function () {
        // Selects hipsterWord to start new round of game
        this.hipsterWord = this.selectHipsterWord();

        // Calculates intial number of guesses for hipsterWord selected
        this.guessesRemaining = this.calculateGuessesRemaining(this.hipsterWord);

        // Displays updated wins, losses, and guesses remaining
        this.gameTracker();

        // Displays word hidden on the document for the start of the game
        this.insertHipsterWord();

        // Clear letters guessed for each new round
        this.lettersGuessed = [];

        // Display empty letters guessed for new round
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + wordGuessGame.lettersGuessed.join("  ");
    },

    // Checks if user input is in the Enlgish alphabet
    isLetter: function (letter) {
        return this.englishAlphabet.indexOf(letter) !== -1;
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
    // Check if user selection is in Enlgish alphabet
    if (wordGuessGame.isLetter(letter)) {
        // Loop through hipsterWord characters
        for (var i = 0; i < wordGuessGame.hipsterWord.length; i++) {
            // If character at index i is same as user selection then:
            if (wordGuessGame.hipsterWord.charAt(i) === letter) {
                // Set array value at index i equal to user selection
                wordGuessGame.hipsterWordHidden[i] = letter;
                // Update DOM to reflect user correctly guessed a letter
                document.getElementById("currentWord").innerHTML = wordGuessGame.hipsterWordHidden.join("    ");
            }
        }

        // If user selection was not previously selected this round, then:
        if (wordGuessGame.lettersGuessed.indexOf(letter) === -1) {
            // Add user selection to lettersGuessed array
            wordGuessGame.lettersGuessed.push(letter);
            // Reflect user most recent selection in DOM
            document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + wordGuessGame.lettersGuessed.join("  ");
            // Reduce guessesReamining by 1
            wordGuessGame.guessesRemaining--;
            // Update DOM to reflect reduction in guessesReamining
            wordGuessGame.gameTracker();
            // If user selection was previously selected this round, then:
        } else {
            // Alert user that this letter was already guessed
            alert("Letter already guessed!");
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
    }
}

