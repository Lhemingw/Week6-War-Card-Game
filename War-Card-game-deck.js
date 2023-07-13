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
//const deck = new Array(SUITES, VALUES);

function getDeck(params) {
    deck = new Array();
    for (let i = 0; i < SUITS.length; i++) {
        for (let x = 0; x < VALUES.length; x++) {
            //const element = [arr];
            var card = {
                Value: cards [x],
                SUITS: suits[i]
            };
            deck.push(card)
            
        }
    }
    return deck;
    }

// 2. Define the Deck class:
//    - Properties:
//      - `cards`: An array to store the cards in the deck.
//    - Methods:
//      - `initialize()`: Creates a standard deck of 52 cards with all combinations of suits and values.
//      - `shuffle()`: Shuffles the cards in the deck randomly.
//      - `dealCard()`: Removes and returns the top card from the deck.
class Card{
    constructor(SUITES, VALUE) {
        this.SUITES  = SUITES;
        this.VALUE = VALUE;
    }
}
class Deck {
    constructor(){
      this.cards =[];
      
    }


    initialize(){
    for (let suits of SUITS) {
        for(let value of VALUES) {
            const card = new Card(SUITS, VALUES);
            this.cards.push(card);
        }
    } 
    }
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
    }
        
    }
    function shuffle(SUITS){  //I may not need this function.
        for (let i = SUITS.length -1; 1 >0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [SUITS[j], SUITS[i]] = [SUITS[j], SUITES[i]];
            //let SUITS = ["♠", "♣", "♥", "♦"];
            
        //SUITS.sort(() => Math.random() -0.5);
        }
    }
    shuffle(SUITS);
    count[SUITS.join(``)]++;

    
    const deck = new Deck();
    deck.initialize();
    deck.shuffle();
    


SUITS = {  //counts of appearance for all possible permutations
"♣": 0, 
"♠": 0, 
"♦": 0, 
"♥": 0,
};

for (let i = 0; i < 1000000; i++) {
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
    for (let i= 0; i < Card.length; index++) {
        const element = Card[i] + "<br>";
        
    }
//function dealt(params) { // put each card in players array
    
//}