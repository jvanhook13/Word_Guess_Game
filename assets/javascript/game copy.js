var randomWords = ["luffy", "naruto", "tanjiro", "ichigo", "kirito", "kaneki"];

var word = randomWords[Math.floor(Math.random() * randomWords.length)];

var lettersGuessed = [];
var remainingGuesses = 6;
var wins = 0;
var displayWord = []


console.log("word", word);

var answerArray = word.split("");



console.log("Answerarray", answerArray);

var blanks = answerArray.length;

console.log("blanks", blanks)
// sets game loop

for (var i = 0; i < blanks; i++) {
    displayWord.push("_");
    console.log("displayWord", displayWord)
}

gameLoop:

    do {


        // gives prompt to user and what to do with the input
        var playerInput = prompt("Please guess a letter").toLowerCase();
        if (playerInput === null) {
            break;
            // in case of extra letter
        } else if (playerInput.length !== 1) {
            alert("Please enter one letter");


        } else {

            //sets function to check for right answer

            function plzWork() {
                var inWord = false;
                for (var i = 0; i < answerArray.length; i++) {
                    if (word[i] == playerInput) {
                        inWord = true;



                    }


                    if (inWord) {
                        for (var i = 0; i < blanks; i++) {
                            if (word[i] == playerInput) {
                                answerArray[i] == playerInput;


                            } else {

                                lettersGuessed.push(playerInput);
                                remainingGuesses--;
                            };

                            console.log(lettersGuessed, "letters guessed");
                            console.log("remainingguesses", remainingGuesses);



                        }
                    }
                    //breaks loop so it doesnt iterate through whole array







                }


            }




            while (blanks > 0)





            // console.log( "player input" , playerInput)



            // while the blanks are greater than zero 
            // take playerInput and check word to see if playerInput is equal to a value in answerArray
            // if it is decrease blanks by one and then display guessed letter in html
            // if it not equal then remove a guess left and list the letter to the side in html
            //   

    