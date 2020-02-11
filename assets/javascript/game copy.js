var randomWords = ["luffy", "naruto", "tanjiro", "ichigo", "kirito", "kaneki"];

var word = randomWords[Math.floor(Math.random() * randomWords.length)];

var lettersGuessed = [];
var remainingGuesses = 6;
var wins = 0;
var losses = 0 ;
var displayWord = []


console.log("word", word);

var answerArray = word.split("");



console.log("Answerarray", answerArray);

var blanks = answerArray.length;

console.log("blanks", blanks)
// sets game loop

for (var i = 0; i < blanks; i++) {
    displayWord.push("_");
    
}

function checkLoop() {

    for (var i = 0; i < blanks; i++) {
        if (word[i] == playerInput) {
            answerArray[i] == playerInput;
            displayWord.join(playerInput) ;
            blanks-- ;
            console.log("display " , displayWord) ;
            console.log(blanks)
                return 
            

        }

        else {

            lettersGuessed.push(playerInput);
            remainingGuesses--;
            console.log("guesses left " , remainingGuesses) ;
                return
        };



} } ;

function winLoss () {

    if (remainingGuesses < 0) {

        losses++ ;

        console.log("losses" , losses)

        console.log("Game Over")

    }

    else if (blanks <= 0) {

        wins++ ;

        console.log("wins" , wins)

        console.log("You win")



    }


}

gameLoop:

        while (blanks > 0) {

        


        // gives prompt to user and what to do with the input
        var playerInput = prompt("Please guess a letter").toLowerCase();
        if (playerInput === null) {
            break;
            // in case of extra letter
        } else if (playerInput.length !== 1) {
            alert("Please enter one letter");


        }

        else {
            checkLoop(playerInput)
            winLoss()

        }

        console.log("lettersguessed" , lettersGuessed)

    }

        




    





            // console.log( "player input" , playerInput)



            // while the blanks are greater than zero 
            // take playerInput and check word to see if playerInput is equal to a value in answerArray
            // if it is decrease blanks by one and then display guessed letter in html
            // if it not equal then remove a guess left and list the letter to the side in html
            //   

