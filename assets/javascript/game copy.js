var randomWords = ["luffy", "naruto", "tanjiro", "ichigo", "kirito", "kaneki"];

var word = randomWords[Math.floor(Math.random() * randomWords.length)];

console.log ( "word" , word);

var answerArray = word.split("");



console.log( "Answerarray" , answerArray) ;

var blanks = answerArray.length;

console.log("blanks" , blanks)

while (blanks > 0) {

    var playerInput = prompt("Please guess a letter").toLowerCase() ;
    if (playerInput === null) {
        break;

    } else if (playerInput.length !== 1) {
        alert("Please enter one letter") ;


    }  

    else {
        
       for ( var i = 0;  i < answerArray.length; i++) {
           if (word[i] == playerInput) {
                console.log( "word[i]" , word[i])
                console.log( "player input" , playerInput)




           }





    }} ;

    // console.log( "player input" , playerInput)



    // while the blanks are greater than zero 
    // take playerInput and check word to see if playerInput is equal to 




}

