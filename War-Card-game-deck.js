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
function freshDeck() {  //This is to create for us a brand new deck of cards w/52 cards one for each suit/value combo
    return SUITS.flatMap(suits => {  //loop through all the suits and values all in one array, what map function is for
        return VALUES.map(value =>{
            return new Card(suit, values)
        })//This will do is loop through all values and map them into an array condince into one array
    })

}   


//     deck = new Array();
//     for (let i = 0; i < SUITS.length; i++) {
//         for (let x = 0; x < VALUES.length; x++) {
//             //const element = [arr];
//             var card = {
//                 Value: cards [x],
//                 SUITS: suits[i]
//             deck.push(card)
            

//     return deck;


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
export default class Deck {
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

    
    const deck = new Deck();
    deck.createDeck();
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
    for (let i= 0; i < Card.length; index++) {        const element = Card[i] + "<br>";
        
    } //end curly from the top code
//function dealt(params) { // put each card in players array
    

//Put something here to do a push