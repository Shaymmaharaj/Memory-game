var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match");
        }else{
            alert("sorry try again");
        }
    }
}
var flipCard = function(cardId){
    console.log("user flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch()
}

flipCard(0);
flipCard(2);