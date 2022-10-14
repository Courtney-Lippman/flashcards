const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');
const prototypeData = require('../src/data.js');

describe('Game', function() {
    const game = new Game();

    it.skip('should have a start method that creates cards', () => {
        //Create Card object instances
        //take the data.js which is an array of objects. The objects have id, question, answers, and correctAnswer keys
        // Card     constructor(id, question, answers, correctAnswer)
        //need to put properties from data.js array of objects into new Card instance as arguments

        //iterate through data.js array using .forEach()
        //in the forEach constructor we want to grab all the properties and assign them to the new Card arguments

        //we will get back an array of cards 
       
       expect(this.cardArray.length).to.equal(prototypeData.length) 
       expect(this.cardArray[0]).to.equal(prototypeData[0])


        
    });

    it.skip('should have a start method that puts cards in a deck', ()=> {
            //put cards in deck object
            // create new deck instance
            //pass in the made cardArray as an argument
            //check by deck.cards.length === cardArray.length
            expect(this.deck.cards.length).to.equal(this.cardArray.length)
    });

    it.skip('should have a start method that creates a new round using the deck', ()=> {
        //create a new Round instance passing in the newly created Deck instance as an argument
        //game.round.deck === game.deck
    });

    it.skip('should keep track of the currentRound', () => {
        // expect(game.currentRound).to.equal({})
        //start()
        //expect(game.currentRound).to.equal({roundObjectHere})
    });

    it.skip('should have a start method that invokes printMessage to display the message in the CLI', ()=> {
        //I really don't know how to test this
    });

    it.skip('should have a start method that invokes printQuestion to kick off our helper functions that allow interaction via the CLI', () => {
        // I really don't know how to test this
    })
});