// For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
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
    name(){
        return this.name;
    }
    score(){
        return this.score;
    }
    hand() {
        return this.hand;
    }
    this.Player[0] = new Player("Player 1");
    this.Player[1] = new Player("Player2");
}



//    - Methods:
//      - `playCard()`: Removes and returns the top card from the player's hand.
//      - `receiveCard(card)`: Adds a card to the player's hand.
//      - `incrementScore()`: Increases the player's score by 1.



// 4. Create an instance of the Deck class and initialize it.
// 5. Create two instances of the Player class, assigning names to each.
// 6. Deal 26 cards to each player from the deck, alternating between them.
// 7. Use a loop to iterate through the turns, playing cards and determining the winner for each round.
//    - Each player plays a card using the `playCard()` method.
//    - Compare the values of the cards played by both players.
//    - If player 1's card value is higher, increment their score using `incrementScore()`.
//    - If player 2's card value is higher, increment their score.
//    - If it's a tie, no points are awarded.
// 8. After all cards have been played, display the final scores and declare the winner based on the higher score.
// 9. Implement a unit test using Mocha and Chai for at least one of the functions you wrote.

// This plan outlines the overall structure and steps for implementing the automated version of the "War" card game. You can now start implementing the classes and methods described above to create the complete game.



//# Deck of cards
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
let numTurns = 26
//# of turns, loop through
for (let turn = 0; turn < numTurns; turn++) {
    const SUITS = Card[i] + "<br>";

}
//#get the current card for this turn
const currentCard = cards[turn];

//# add your code here to handle the logic for each turn
console.log(`Turn ${turn + 1}: ${currentCard}`);


