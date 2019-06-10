var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
    },
    {
       rank: "queen",
       suit: "diamonds",
       cardImage: "images/queen-of-diamonds.png",
    },
 
    {
     rank: "king",
     suit: "hearts",
     cardImage: "images/king-of-hearts.png",
    },
     {
     rank: "king",
     suit: "diamonds",
     cardImage: "images/king-of-diamonds.png",
    },
 ];
 
var cardsInPlay = [];
var checkForMatch = function(){
  
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match");
        }else{
            alert("sorry try again");
    }
}
var flipCard = function(){
    var cardId = this.getAttribute('data-id')
    // console.log("user flipped " + cards[data-id].rank);
    // console.log(cards[cardId].cardImages)
    // console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage)
    if(cardsInPlay.length === 2){
        checkForMatch();
    }
}

var createBoard = function(){
    var cardTable = document.getElementById('game-board');
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        cardTable.appendChild(cardElement);

    }
}

createBoard();
