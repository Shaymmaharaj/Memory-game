var cards = [
    {
    rank:"queen",
    suit:"hearts",
    cardImages:"images/queen-of-hearts.png"
    },
    {
    rank:"queen",
    suit:"diamonds",
    cardImages:"images/queen-of-diamonds.png"
    },
    {
    rank:"kings",
    suit:"hearts",
    cardImages:"images/king-of-hearts.png"
    },
    {
    rank:"king",
    suit:"diamonds",
    cardImages:"images/king-of-diamonds.png"
    }
];
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
    console.log("user flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImages)
    console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch()
}

flipCard(0);
flipCard(2);