var randomWords = ["luffy", "naruto", "tanjiro", "ichigo", "kirito", "kaneki"];

var word = randomWords[Math.floor(Math.random() * randomWords.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var blanks = randomWords.length;


while (blanks > 0) {
    
    alert(answerArray.join(" "));
    var playerInput = prompt("Make your guess").toLowerCase()
    if (playerInput === null) {
        break;

    } else if (playerInput.length !== 1) {
        alert("Please enter one letter") ;


    } else {
        for ( var j = 0; j < word.length; j++) {
            if (word[j] == playerInput) {
                answerArray[j] = playerInput;
                blanks--;
                console.log(answerArray[j] , "Answerarray") ;
                console.log(playerInput , "playerInput") ;
            } ;

            let playerGuessesLeft = 3 ;
            let playerWins = 0 ;
            alert("you have " + playerGuessesLeft + " guesses left") ; 
            if (blanks = 0) {playerWins++ }
            else if (word[j] !== playerInput)  { playerGuessesLeft--

                


            } ;
            console.log( "word" , word[j])
            console.log("playerGuessesLeft" , playerGuessesLeft) ;
            console.log("playerWins" , playerWins) ;
            // alert(playerGuessesLeft) ;

        }
    }
}

// alert(answerArray.join(""));
alert("You guessed it") ;