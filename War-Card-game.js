//Code for deck/all cards goes- all caps is universal
// 1. Define the Card class:
//    - Properties:
//      - `suit`: The suit of the card (e.g., "♠", "♣", "♥", "♦").
//      - `value`: The value of the card (e.g., "A", "2", ..., "K").
//    - Methods:
//      - No additional methods are required for this class.

// 2. Define the Deck class:
//    - Properties:
//      - `cards`: An array to store the cards in the deck.
//    - Methods:
//      - `initialize()`: Creates a standard deck of 52 cards with all combinations of suits and values.
//      - `shuffle()`: Shuffles the cards in the deck randomly.
//      - `dealCard()`: Removes and returns the top card from the deck.

const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A", 
"2", 
"3", 
"4", 
"5", 
"6", 
"7", 
"8", 
"9", 
"10", 
"J", 
"Q", 
"K"]
//let deck =[];
//const deck = new Array(SUITES, VALUES);



    deck = new Array();
     for (let i = 0; i < SUITS.length; i++) {
        for (let x = 0; x < VALUES.length; x++) {             //const element = [arr];
            var card = {
                Value: cards [x],
                SUITS: suits[i]
            }
             deck.push(card);
            }
        }
            
        deck.sort[() => Math.random() -0.5];
     return deck;

    
// 2. Define the Deck class:
//    - Properties:
//      - `cards`: An array to store the cards in the deck.
//    - Methods:
//      - `initialize()`: Creates a standard deck of 52 cards with all combinations of suits and values.
//      - `shuffle()`: Shuffles the cards in the deck randomly.
//      - `dealCard()`: Removes and returns the top card from the deck.
class Card{  //do I need this??
    constructor(SUIT, VALUE) {
        this.SUIT  = SUIT;
        this.VALUE = VALUE;
    }
}

// 4. Create an instance of the Deck class and initialize it.
class Deck {
    constructor(cards = freshDeck()){
      this.cards = cards;
    };

    //or do I do this code??

    ///function deck(cards) {
        // if (!(this.instanceof deck)) return new deck(cards);  The purpose of this code seems to be checking if the Deck object has already been instantiated 
        // and returning a new instance if it hasn't. However, 
        // in the context of the Deck class constructor, this check is not needed. 
        // this.cards = cards;
        //   

      
      
    

    //cards instanceof cards  //=> true

    
      
    //   var _player1 = new Person('Player1');
    //   var _player2 = Person('Player2');
      
    // buildDeck() {  I can use this as an example to createDeck????
    //     this.populate();
    //     this.shuffle();
    //     return this.cards
    // }
     


    createDeck() {
    for (let suit of SUITS) {
        for(let value of VALUES) {
            const card = new Card(suit, value);
            this.cards.push(card);
            }
        } 
    }
    // populate() {  Do I need this, when I have array of suits and values

    //     const suits = ['Clubs','Diamonds','Hearts', 'Spades'];
    //     const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    //     const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

    //     for (let i = 0; i < suits.length; i++) {
    //         for (let a = 0; a < ranks.length; a++) {
    //             this.cards.push(new Card(ranks[a],suits[i],values[a]));
    //         }
    //     }
    // } 

    
cards = new Card[DECK_SIZE];
// String suits[] = {}"♠", "♣", "♥", "♦"];
// String cards[] = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Joker", "Queen", "King"};



// int cardIndex = 0;
// for (String suit : suits) {
//     for (String card : cards) {
//         cards[cardIndex] = new Card(suit, card);
//         cardIndex++;
//     }
// }

    shuffle(){ //Need to get the } to the end of the class
    //for (let i =this.cards.length -1; i >0; i--){  //He uses this.numberOfCards instead of cards
        //const j = Math.floor(Math.random() * (i + 1));  //const newIndex = Math.floor(Math.random() * (i + 1))
        //const oldValue = this.cards[newIndex]
        //this.cards[newIndex] = ths,cards[i]
        //this.cards[i] = oldValue
      //[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    //   function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
    
    }
        
  
    dealCard() {
    return this.cards.pop();
        alert(dealCards);
    }
          
    // function shuffle(SUITS){  //I may not need this function.  Do I need this??
    //     for (let i = SUITS.length -1; 1 >0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [SUITS[j], SUITS[i]] = [SUITS[j], SUITES[i]];
    //         //let SUITS = ["♠", "♣", "♥", "♦"];
            
    //     //SUITS.sort(() => Math.random() -0.5);
    //     }
    }
    shuffle(SUITS);
    count[SUITS.join(``)]++;

    
     const deck = new Deck(); //Do I need this?
     deck.createDeck();
     deck.shuffle();
   


SUITS = {  //counts of appearance for all possible permutations
"♣": 0, 
"♠": 0, 
"♦": 0, 
"♥": 0,
};

for (let i = 0; i < 1000000; i++) {  //What do I do with this?

    let SUITS = ["♠", "♣", "♥", "♦"];
    shuffle(SUITS);
    count[SUITS.join(``)]++;
}
shuffle(SUITS);
alert(SUITS);

//["♠", "♣", "♥", "♦"];
//show cunts of all possible permutation
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

//function shuffleCard(params) {
    //}
    const id = setInterval(shuffle, 12)
    let shuffleCount = 0
    for (let i= 0; i < Card.length; index++) {        const element = Card[i] + "<br>";
        
    } //end curly from the top code
//function dealt(params) { // put each card in players array
    

//Put something here to do a push


import Deck from `./War-Card-game-deck.js`


 const deck = require new Deck()
 console.log(deck.cards);
// For the final project you 
//will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

// The completed project should, when executed, do the following:


// 3. Define the Player class:
//    - Properties:
//      - `name`: The name of the player.
//      - `score`: The score of the player (number of points earned).
//      - `hand`: An array to store the cards held by the player.
class Player{
    constructor(name, score, hand){
        this.name = name;
        this.score = score;
        this.hand = hand;
    }
    getName(){
        return this.name;
    }
    getScore(){
        return this.score;
    }
    getHand() {
        return this.hand;
    }
    incrementScore(){
        this.score++;
    }
    receiveCard(card) {
        this.hand.push(card);
    } 

}

player1 = new Player ("Player1");  //use to start a game, give name, score and hand
player2 = new Player("Player2");
class Deck {
    constructor(){
      this.cards =[];
      
    }


    createDeck(){
    for (let suit of SUITS) {
        for(let value of VALUES) {
            const card = new Card(suit, value);
            this.cards.push(card);
        }
    } 
    }


    shuffle(){ 
        if (this.cards.length > 0) {

            const shuffledDeck = this.cards.sort(() => Math.random() - 0.5)
            this.cards = [...shuffledDeck];
        }
    }
        
  
    dealCard() {
    return this.cards.pop();
    }
        
    }

class Game {
    constructor(){
        this.cards = new Deck();
        cards.createDeck();
        this.player1 = new Player("Player1");
        this.player2 = new Player("Player2");

        startGame();
        playTurn();
        endGame();
            //alert (good movie);
    }

}
//    - Methods:
//      - `playCard()`: Removes and returns the top card from the player's hand.
//Need help, not sure if I can add other player, and if my fuction is correct
class PlayerClass {  //I have this declared already, I believe it is in the function, not sure which one
    constructor(){
        this._playerName = "Player1";
        this._otherPlayerName = "Player2";
        this._playerScore = 0;
        this._playerDeck = [];

    }
    get name() {
        return this._playerName;
    }

    get deck (){
        return this._playerDeck;
    }
    get score(){
        return this._playerScore;
    }
    // ... constructor and other methods

    
    playCard() {
      return this.hand.shift();
    }
    //this.player1.name = "Player1"; // Already defined in constructor, do I still need this?
    //this. player2.name = "Player2";//Already defined in constructor, do I still need this??

  myfunction(_playerName) {
    for (let i = 0; i < _playerName.length; i++) {
        const myfunction = _playerName.shift[i];
        }  
    }
}
console.log(myfunction);

//Or if it is done this way***************
// function Player(name) {
//     this.name = name;
//     this.score = 0;
//     this.hand = [];
  
//     this.getName = () => this.name;
//     this.getScore = () => this.score;
//     this.getHand = () => this.hand;
//     this.incrementScore = () => this.score++;
//   }
  
  const player1 = new Player("Player1");
  const player2 = new Player("Player2");
  
//      - `receiveCard(card)`: Adds a card to the player's hand.**********NOT SURE IF RIGHT EITHER
function myfunction(_playerName) {
    for (let i = 0; i < _playerName.length; i++) {
        const myfunction = _playerName.pop[i];
        
    }
}
console.log(myfunction);
//      - `incrementScore()`: Increases the player's score by 1.
 let incrementScore = IncreasePlayerScore++;
    console.log(IncreasePlayerScore);

// 4. Create an instance of the Deck class and initialize it.***In card.js

            this._players[0].deck = [...cards.slice(0,26)];
            this._players[1].deck = [...cards.slice(26,52)];
            const cards = new Deck().buildDeck();  //step 2 create 1 instance of Deck and populate cards
// function person(name) {
//     if (!(this instanceof person)) return new person(name);
//     this.name = name;
//   }
//   Step 3. assign 26 cards to each player  Does this go here or down in #6?
//   this._player1[0].deck = [...cards.slice(0,26)];
//   this._player2[1].deck = [...cards.slice(26,52)];
//   var _player1 = new Person('Player1');
//   var _player2 = Person('Player2');
  //Step 4 deal card from each player until done
  console.log("\t\t\t\t**** Dealing Hands ****");
  for (let i = 0; i < this._player1[0].deck.length; i++) {  
    if (this._player1.deck[i].value > this._player2.deck[i].deck[i].value)
        this._player1[0].score +=1;
     }
//   _player1 instanceof Person  //=> true
//   _player2 instanceof Person  //=> true



// 5. Create two instances of the Player class, assigning names to each.
function player(_player1, _player2) {
    var player = {
    _player1: "Sam",
    _player2: "Bob",
    getInfo: function () {
        return this._player1 + ' ' + this._player2 + ' ';
      }
    }

    return player;
}

var _player1 = player();
var _player2 = player();

// 6. Deal 26 cards to each player from the deck, alternating between them.
// Assuming you have a deck instance created and initialized
// const _player1 = new Player("Player1");  Do I need these I had an error saying this one was already declared.
// const _player2 = new Player("Player2");

for (let i = 0; i < 26; i++) {
  _player1.receiveCard(deck.dealCard());
  _player2.receiveCard(deck.dealCard());
}//Step 3. assign 26 cards to each player
this._player1[0].deck = [...cards.slice(0,26)];
this._player2[1].deck = [...cards.slice(26,52)];


// 7. Use a loop to iterate through the turns, playing cards and determining the winner for each round.
// while player1_score < 100 and player2_score <    
//     while player_turn != playerholder:
//         scoring()
//         score_awarding()
//         player_turn = player_turn + 1
//     if player_turn == playerholder:
//         player_turn == 1
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count++;  //Changed -- to ++
      break;
  }
  if (count > 0) {
    return count + " ";  //Had bet here. Need to put something else
  } else {
    return count + " ";  //had hold here.  Need something else.

  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//    - Each player plays a card using the `playCard()` method.
//    - Compare the values of the cards played by both players.
    _player1 === _player2
//    - If player 1's card value is higher, increment their score using `incrementScore()`.
if (_player1 > _player2) {
    count++;
    }else if (_player2 > _player1) {
        count++
        
    }else if (_player1 === _player2) {
        !count++
        
    }{
    
    }
//    - If player 2's card value is higher, increment their score.
//    - If it's a tie, no points are awarded.
// 8. After all cards have been played, display the final scores and declare the winner based on the higher score.
// Assuming you have two player instances: _player1 and _player2

// Display final scores
console.log("Final Scores:");
console.log(_player1.getName() + ": " + _player1.getScore());
console.log(_player2.getName() + ": " + _player2.getScore());

// Declare the winner
if (_player1.getScore() > _player2.getScore()) {
  console.log(_player1.getName() + " wins!");
} else if (_player2.getScore() > _player1.getScore()) {
  console.log(_player2.getName() + " wins!");
} else {
  console.log("It's a tie!");
}

// 9. Implement a unit test using Mocha and Chai for at least one of the functions you wrote.

// This plan outlines the overall structure and steps for implementing the automated version of the "War" card game. You can now start implementing the classes and methods described above to create the complete game.

let numTurns = 26
//# of turns, loop through
for (let turn = 0; turn < numTurns; turn++) {
    
}
//#get the current card for this turn
const currentCard = cards[turn];

//# add your code here to handle the logic for each turn
console.log(`Turn ${turn + 1}: ${currentCard}`);


const game = new Game();
game.createGame()