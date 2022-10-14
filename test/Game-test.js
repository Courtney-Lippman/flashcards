const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');
const data = require('../src/data.js');
const prototypeQuestions = data.prototypeData

describe('Game', function() {
    const game = new Game();

    this.beforeEach(() => {
        game.start()//prototypeData is already a global const in Game.js I think, see line 2
    })

    it.skip('should have a start method that creates cards', () => {

/*
        Initialize start method
            -takes in array called prototypeData
            for each element i of prototypeData
                a = createCard(i)  
                cardArray.push(a)
            End Loop
        
        createCard(id, q, answer, correct)

        
        */
       
       expect(this.cardArray.length).to.equal(prototypeQuestions.length);


        
    });

    it.skip('should have a start method that puts cards in a Deck', ()=> {
            /*
                Create one new instance of Deck class (make its own method- createDeck())
                    -takes in cardArray
                cardArray set as property this.cards in Deck instance
            */
            expect(deck.cards.length).to.equal(this.cardArray.length)
    });

    it.skip('should have a start method that creates a new round using the deck', ()=> {
        /*
        Create one new Round class instance (make its own method createRound())
            -takes in the created Deck instance
        */
       expect(game.round).to.deep.equal()
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