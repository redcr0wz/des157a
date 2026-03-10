(function () {
    "use strict";
    console.log("reading js");

    // GAME VARIABLES + GAME FUNCTIONS //
    
    const gameData = {
        playerBet: 0,
        playerMoney: 0,
        playerCards: [],
        playerTotal: 0,

        houseCards: [],
        houseTotal: 0,

        index: 0,

        blackjack: 21,
        deck: [
            {suit: "club", rank: "A", value: 1},
            {suit: "club", rank: "2"},
            {suit: "club", rank: "3"},
            {suit: "club", rank: "4"},
            {suit: "club", rank: "5"},
            {suit: "club", rank: "6"},
            {suit: "club", rank: "7"},
            {suit: "club", rank: "8"},
            {suit: "club", rank: "9"},
            {suit: "club", rank: "10"},
            {suit: "club", rank: "J"},
            {suit: "club", rank: "Q"},
            {suit: "club", rank: "K"},

            {suit: "diamond", rank: "A"},
            {suit: "diamond", rank: "2"},
            {suit: "diamond", rank: "3"},
            {suit: "diamond", rank: "4"},
            {suit: "diamond", rank: "5"},
            {suit: "diamond", rank: "6"},
            {suit: "diamond", rank: "7"},
            {suit: "diamond", rank: "8"},
            {suit: "diamond", rank: "9"},
            {suit: "diamond", rank: "10"},
            {suit: "diamond", rank: "J"},
            {suit: "diamond", rank: "Q"},
            {suit: "diamond", rank: "K"},

            {suit: "heart", rank: "A"},
            {suit: "heart", rank: "2"},
            {suit: "heart", rank: "3"},
            {suit: "heart", rank: "4"},
            {suit: "heart", rank: "5"},
            {suit: "heart", rank: "6"},
            {suit: "heart", rank: "7"},
            {suit: "heart", rank: "8"},
            {suit: "heart", rank: "9"},
            {suit: "heart", rank: "10"},
            {suit: "heart", rank: "J"},
            {suit: "heart", rank: "Q"},
            {suit: "heart", rank: "K"},

            {suit: "spade", rank: "A"},
            {suit: "spade", rank: "2"},
            {suit: "spade", rank: "3"},
            {suit: "spade", rank: "4"},
            {suit: "spade", rank: "5"},
            {suit: "spade", rank: "6"},
            {suit: "spade", rank: "7"},
            {suit: "spade", rank: "8"},
            {suit: "spade", rank: "9"},
            {suit: "spade", rank: "10"},
            {suit: "spade", rank: "J"},
            {suit: "spade", rank: "Q"},
            {suit: "spade", rank: "K"},
        ],
    }

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }


    function drawCard() {
        return gameData.deck.splice(0, 1);
    }

    function hit() {
        // drawcard for player
        // put card in player array
    }

    function stand() {
        // houseTurn
    }

    function houseTurn() {
        // flip card
        if (gameData.houseTotal == gameData.blackjack) {
            // house end...
        } else if (gameData.houseTotal < 17) {
            // hit
        } else {
            //stand
        }
    }


    function displayCard(rank, suit) {

        

        const cardHTML = `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="card-number ${color}">${rank}</p>
                        <img src="images/${suit}.svg" alt="${suit}">
                    </div>
                    <div class="flip-card-back"></div>
                </div>
            </div>
        ` 

        playerCardsDiv.innerHTML += cardHTML;
    }

    function gameStart() {
        shuffle(gameData.deck);
        // house has 1 card face up, 1 face down
        // player gets both cards face up
        // player has choice to hit or stand

        calculateScore();
    }

    function calcluateTotal() {
        // hlp
    }

    function calculateScore() {
        // gameData.playerTotal =
        // gameData.houseTotal =
        // if blackjack - player/house win
        //game end
        // continue game
        // update totals

        // if tie

        // call gameEnd here
    }

    const endScreenh1 = document.querySelector("#end-screen h1");
    const winSound = new Audio('sounds/win.mp3');
    const loseSound = new Audio('sounds/lose.mp3');

    function gameEnd() {
        if ((gameData.playerTotal == gameData.blackjack) && (gameData.houseTotal != gameData.blackjack) || 
            (gameData.playerTotal > gameData.houseTotal) || 
            (gameData.houseTotal > gameData.blackjack)) {

            endScreenh1.innerHTML = "YOU WIN!";
            gameScreen.classList = "hidden";
            endScreen.classList = "active";
            winSound.play();

        } else if ((gameData.houseTotal == gameData.blackjack) && (gameData.houseTotal != gameData.blackjack) || 
                   (gameData.houseTotal > gameData.playerTotal)) {
            endScreenh1.innerHTML = "HOUSE WINS! YOU LOSE!";
            gameScreen.classList = "hidden";
            endScreen.classList = "active";
            loseSound.play();

        } else if (gameData.playerTotal > gameData.blackjack) {
            endScreenh1.innerHTML = "BUST! YOU LOSE!";
            gameScreen.classList = "hidden";
            endScreen.classList = "active";
            loseSound.play();

        } else if (gameData.playerTotal == gameData.houseTotal) {
            endScreenh1.innerHTML = "PUSH!";
            gameScreen.classList = "hidden";
            endScreen.classList = "active";
        }
    }

    function calcluateAce() {
        // calculate if ace 1/11
    }


    // START SCREEN + MODALS //
    const startScreen = document.querySelector("#start");
    const startBtn = document.querySelector("#start-game");
    const betsScreen = document.querySelector("#bets");
    
    // start game
    startBtn.addEventListener("click", function () {
        startScreen.classList = "hidden";
        betsScreen.classList = "active";
    });

    // rules
    const rulesBtn = document.querySelector("#start-rules");
    const closeRulesBtn = document.querySelector("#close-rules");
    const rulesModal = document.querySelector("#rules-popup");

    rulesBtn.addEventListener("click", function (){
        rulesModal.classList = "modal active";
    });

    closeRulesBtn.addEventListener("click", function (){
        rulesModal.classList = "modal hidden";
    });

    // settings
    const settingsBtn = document.querySelector("#settings-button");
    const settingsModal = document.querySelector("#settings");
    const closeSettingsBtn = document.querySelector("#close-settings");

    settingsBtn.addEventListener("click", function (){
        settingsModal.classList = "modal active";
    });

    closeSettingsBtn.addEventListener("click", function (){
        settingsModal.classList = "modal hidden";
    }); 
    
    // settings rules
    const ruleSettingsBtn = document.querySelector("#settings-rules");

    ruleSettingsBtn.addEventListener("click", function (){
        settingsModal.classList = "modal hidden";
        rulesModal.classList = "modal active";
    });

    // settings music
    const musicSettingsBtn = document.querySelector("#music"); 
    const music = new Audio('sounds/music.mp3');
    
    musicSettingsBtn.addEventListener("click", function () {
        if (!music.paused) {
            musicSettingsBtn.innerHTML = "Music &#10006;";
            music.pause();
        } else {
            musicSettingsBtn.innerHTML = "Music &#10003;";
            music.play();
        }
    });

    // settings quit
    const quitSettingsBtn = document.querySelector("#settings-quit");

    quitSettingsBtn.addEventListener("click", function () {
        location.reload(); 
    });


    // BET SCREEN //

    const betBtn = document.querySelector("#bet");
    const betSound = new Audio('sounds/bet.mp3');
    const betMoney = document.querySelector("#bet-money");
    const playerBetDisplay = document.querySelector("#player-bet");
    const playerMoneyDisplay = document.querySelector("#player-money");
    const gameScreen = document.querySelector("#game");

    betBtn.addEventListener("click", function () {
        if (betMoney.value == null || betMoney.value == ""  || betMoney.value < 0) {
            alert("Please enter a valid bet amount.");
        } else {
            betSound.play();
            betsScreen.classList = "hidden";
            gameScreen.classList = "active";

            gameData.playerBet = betMoney.value;

            playerBetDisplay.innerHTML = `$${gameData.playerBet}`;
            playerMoneyDisplay.innerHTML = `$${gameData.playerMoney}`;
        }
    });

    const backBtn = document.querySelector("#back");

    backBtn.addEventListener("click", function () {
        betsScreen.classList = "hidden";
        startScreen.classList = "active";
    });

    // TODO: BLACKJACK GAME //
    const playerCardsDiv = document.querySelector("#player-cards");
    const houseCardsDiv = document.querySelector("#house-cards");
    

    const hitBtn = document.querySelector("#hit");
    const standBtn = document.querySelector("#stand");

    hitBtn.addEventListener("click", function() {
        hit();
        calculateScore();

        // if score = 21
            houseTurn();

        // else if > 21
            houseTurn();
    });

    standBtn.addEventListener("click", function() {
        houseTurn();
        calculateScore();
        // if else for score >= 21
    });

    // GAME END SCREEN //

    // play again + quit
    const endScreen = document.querySelector("#end-screen");
    const playAgainBtn = document.querySelector("#play-again");
    const quitEndBtn = document.querySelector("#end-quit");

    playAgainBtn.addEventListener("click", function () {
        endScreen.classList = "hidden";
        betsScreen.classList = "active";

        playerCardsDiv.innerHTML = "";
        houseCardsDiv.innerHTML = "";

        // TODO: play again with player money
    });

    quitEndBtn.addEventListener("click", function () {
        location.reload(); 
    });

})();