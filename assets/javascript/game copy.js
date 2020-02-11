var randomWords = ["luffy", "naruto", "tanjiro", "ichigo", "kirito", "kaneki"];

var word = randomWords[Math.floor(Math.random() * randomWords.length)];

var lettersGuessed = [];
var remainingGuesses = 6;
var wins = 0;
var losses = 0;
var displayWord = []


console.log("word", word);

var answerArray = word.split("");



console.log("Answerarray", answerArray);

var blanks = answerArray.length;

console.log("blanks", blanks);
// sets game loop

for (var i = 0; i < blanks; i++) {
    displayWord.push("_");

}

function checkLoop() {

    for (var i = 0; i < blanks; i++) {
        if (answerArray[i] == playerInput) {
            alert(displayWord[i].concat(playerInput));
            //this doesnt work keeps adding to end of array vs just replacing in the same index and only works on the first letter of the word
            //does increment blanks and if blanks <= 0 then you win which works
            blanks--;
            console.log("display ", answerArray);
            console.log("blanks", blanks);
            return;



        } else {
            //this works just hard to see what youve guessed because of the prompt stopping the code
            // when remainingGuesses <= 0 it does record a loss and will display Game over 
            lettersGuessed.push(playerInput);
            document.getElementById("lettersGuessed").innerHTML = "letters Guessed" + lettersGuessed;
            remainingGuesses--;
            document.getElementById("remaining_Guesses").innerHTML = "remaining guesses" + remainingGuesses;
            console.log("guesses left ", remainingGuesses);
            return;
        };



    }
};
// Function to check to see if you win or lose 
function winLoss() {

    if (remainingGuesses <= 0) {

        losses++;

        document.getElementById("losses").innerHTML = losses;

        console.log("losses", "losses" + losses);

        document.getElementById("game_over").innerHTML = "GAME OVER GG";

        console.log("Game Over");

    } else if (blanks <= 0) {

        wins++;

        document.getElementById("wins").innerHTML = "wins" + wins;

        console.log("wins", wins);

        console.log("You win");



    }
};




// Loops through the game. used label so further in code I could make a "hit escape to play again and then restarts the loop"

gameLoop:

    while (blanks > 0) {




        // gives prompt to user and what to do with the input this however pauses the code and does not allow the document.getelement lines to populate until the
        // the prompt is closed then they all populate moving outside of loop makes infinite loop of already guessed this
        var playerInput = prompt("Please guess a letter").toLocaleLowerCase()


        if (playerInput === null) {
            break;
            // in case of extra letter
        } else if (playerInput.length !== 1) {
            alert("Please enter one letter");


        } else if (lettersGuessed.includes(playerInput)) {

            alert("guessed this already");

        } else {
            checkLoop();
            winLoss();


        }




        console.log("lettersguessed", lettersGuessed)
    }












// console.log( "player input" , playerInput)



// while the blanks are greater than zero 
// take playerInput and check word to see if playerInput is equal to a value in answerArray
// if it is decrease blanks by one and then display guessed letter in html
// if it not equal then remove a guess left and list the letter to the side in html
//   