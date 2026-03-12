(function() {
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

        firstRound: true,
        blackjack: 21,
        deck: [
            {suit: "club", rank: "A"},
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

    // shuffle the deck
    function shuffle(array) {
        let currentIndex = array.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    // draw a card
    function drawCard() {
        return gameData.deck.splice(0, 1)[0];
    }

    // hit, player draws a card and displays it
    function hit() {
        const card = drawCard();
        gameData.playerCards.push(card);
        displayCard(card.rank, card.suit, playerCardsDiv);
        updateTotals();
    }

    const flipSound = new Audio("sounds/flip.mp3");
    // house's turn
    function houseTurn() {
        const hiddenCard = document.querySelector("#house-cards .flip-card-inner.flip");

        if (hiddenCard) {
            hiddenCard.classList.remove("flip");
            flipSound.play();
        }
        
        updateTotals();

        setTimeout(function(){
            houseDraw();
        }, 700);
    }

    // house's logic of drawing
    function houseDraw() {
        if (gameData.houseTotal < 17) {
            const card = drawCard();
            gameData.houseCards.push(card);

            displayCard(card.rank, card.suit, houseCardsDiv);
            updateTotals();

            setTimeout(function(){
                houseDraw();
            }, 900);
        } else {
            gameEnd();
        }
    }

    // get a card and add it to a hand
    function displayCard(rank, suit, div, hidden = false) {
        let color;

        if (suit == "heart" || suit == "diamond") {
            color = "red";
        } else {
            color = "black";
        }

        let flip;
        if (hidden == true) {
            flip = "flip-card-inner flip";
        } else {
            flip = "flip-card-inner"
        }

        const cardHTML = `
            <div class="flip-card deal-animation">
                <div class="${flip}">
                    <div class="flip-card-front">
                        <p class="card-number ${color}">${rank}</p>
                        <img src="images/${suit}.svg" alt="${suit}">
                    </div>
                    <div class="flip-card-back"></div>
                </div>
            </div>
        ` 
        flipSound.play();
        div.innerHTML += cardHTML;
    }

    // start of a round
    function gameStart() {
        shuffle(gameData.deck);
        
        setTimeout(function(){
            const playerCard1 = drawCard();
            gameData.playerCards.push(playerCard1);
            displayCard(playerCard1.rank, playerCard1.suit, playerCardsDiv);
            updateTotals();
        }, 600);

        setTimeout(function(){
            const houseCard1 = drawCard();
            gameData.houseCards.push(houseCard1);
            displayCard(houseCard1.rank, houseCard1.suit, houseCardsDiv);
            updateTotals();
        }, 1400);

        setTimeout(function(){
            const playerCard2 = drawCard();
            gameData.playerCards.push(playerCard2);
            displayCard(playerCard2.rank, playerCard2.suit, playerCardsDiv);
            updateTotals();
        }, 2200);

        setTimeout(function(){
            const houseCard2 = drawCard();
            gameData.houseCards.push(houseCard2);
            displayCard(houseCard2.rank, houseCard2.suit, houseCardsDiv, true);
            updateTotals();
        }, 3000);
    }

    const playerTotalDiv = document.querySelector("#player-total h2");
    const houseTotalDiv = document.querySelector("#house-total h2");
    
    // check total of a hand
    function handTotal(cards) {
        let total = 0;
        let aces = 0;

        for (let card of cards) {
            if (card.rank === "A") {
                aces++;
                total += 11;
            } else if (card.rank == "K" || card.rank == "Q" || card.rank == "J") {
                total += 10;
            } else {
                total += parseInt(card.rank);
            }
        }

        while (total > 21 && aces > 0) {
            total -= 10;
            aces--;
        }

        return total;
    }

    // update score totals
    function updateTotals() {
        gameData.playerTotal = handTotal(gameData.playerCards);
        gameData.houseTotal = handTotal(gameData.houseCards);

        playerTotalDiv.innerHTML = gameData.playerTotal;

        const hiddenCard = document.querySelector("#house-cards .flip-card-inner.flip");

        if (hiddenCard) {
            const firstCard = handTotal([gameData.houseCards[0]]);
            houseTotalDiv.innerHTML = firstCard;
        } else {
            houseTotalDiv.innerHTML = gameData.houseTotal;
        }

        if (gameData.playerTotal > gameData.blackjack) {
            playerTotalDiv.classList.add("bust");
        } else {
            playerTotalDiv.classList.remove("bust");
        }

        if (gameData.houseTotal > gameData.blackjack) {
            houseTotalDiv.classList.add("bust");
        } else {
            houseTotalDiv.classList.remove("bust");
        }
    }

    const endScreenh1 = document.querySelector("#end-screen h1");
    const winSound = new Audio('sounds/win.mp3');
    const loseSound = new Audio('sounds/lose.mp3');

    // check who wins + end the game
    function gameEnd() {
        if (gameData.playerTotal > gameData.blackjack) {
            endScreenh1.innerHTML = "BUST! <br> YOU LOSE!";
            gameData.playerMoney -= parseInt(gameData.playerBet);
            loseSound.play();
        } else if (gameData.houseTotal > gameData.blackjack || gameData.playerTotal > gameData.houseTotal) {
            endScreenh1.innerHTML = "YOU WIN!";
            gameData.playerMoney += parseInt(gameData.playerBet) * 2;
            winSound.play();
        } else if (gameData.houseTotal > gameData.playerTotal) {
            endScreenh1.innerHTML = "HOUSE WINS! <br> YOU LOSE!";
            gameData.playerMoney -= parseInt(gameData.playerBet);
            loseSound.play();
        } else {
            endScreenh1.innerHTML = "PUSH!";
            gameData.playerMoney += parseInt(gameData.playerBet); 
            betSound.play();
        }

        playerMoneyDisplay.innerHTML = `$${gameData.playerMoney}`;
        gameData.firstRound = false; // no longer the first round

        setTimeout(function(){
            gameScreen.classList = "hidden";
            endScreen.classList = "active";
        }, 1800);
    }


    // START SCREEN + MODALS //
    const startScreen = document.querySelector("#start");
    const startBtn = document.querySelector("#start-game");
    const betsScreen = document.querySelector("#bets");
    
    // start game
    startBtn.addEventListener("click", function() {
        startScreen.classList = "hidden";
        betsScreen.classList = "active";
    });

    // rules
    const rulesBtn = document.querySelector("#start-rules");
    const closeRulesBtn = document.querySelector("#close-rules");
    const rulesModal = document.querySelector("#rules-popup");

    rulesBtn.addEventListener("click", function(){
        rulesModal.classList = "modal active";
    });

    closeRulesBtn.addEventListener("click", function(){
        rulesModal.classList = "modal hidden";
    });

    // settings
    const settingsBtn = document.querySelector("#settings-button");
    const settingsModal = document.querySelector("#settings");
    const closeSettingsBtn = document.querySelector("#close-settings");

    settingsBtn.addEventListener("click", function(){
        settingsModal.classList = "modal active";
    });

    closeSettingsBtn.addEventListener("click", function(){
        settingsModal.classList = "modal hidden";
    }); 
    
    // settings rules
    const ruleSettingsBtn = document.querySelector("#settings-rules");

    ruleSettingsBtn.addEventListener("click", function(){
        settingsModal.classList = "modal hidden";
        rulesModal.classList = "modal active";
    });

    // settings music
    const musicSettingsBtn = document.querySelector("#music"); 
    const music = new Audio('sounds/music.mp3');
    
    musicSettingsBtn.addEventListener("click", function() {
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

    quitSettingsBtn.addEventListener("click", function() {
        location.reload(); 
    });


    // BET SCREEN //
    const betBtn = document.querySelector("#bet");
    const betSound = new Audio('sounds/bet.mp3');
    const betMoney = document.querySelector("#bet-money");
    const playerBetDisplay = document.querySelector("#player-bet");
    const playerMoneyDisplay = document.querySelector("#player-money");
    const gameScreen = document.querySelector("#game");

    betBtn.addEventListener("click", function() {
        if (betMoney.value == null || betMoney.value == "" || betMoney.value <= 0) {
            alert("Please enter a valid bet amount.");
            return;
        }

        const betAmount = parseInt(betMoney.value);
        gameData.playerBet = betAmount;

        betSound.play();

        if (!gameData.firstRound) {
            gameData.playerMoney -= betAmount;
        }

        betsScreen.classList = "hidden";
        gameScreen.classList = "active";

        playerBetDisplay.innerHTML = `$${gameData.playerBet}`;
        playerMoneyDisplay.innerHTML = `$${gameData.playerMoney}`;

        if (gameData.playerMoney < 0) {
            playerMoneyDisplay.style.color = "red";
        } else {
            playerMoneyDisplay.style.color = "white";
        }

        gameStart();
    });

    const backBtn = document.querySelector("#back");
    
    // back to start
    backBtn.addEventListener("click", function() {
        betsScreen.classList = "hidden";
        startScreen.classList = "active";
    });

    const playerCardsDiv = document.querySelector("#player-cards");
    const houseCardsDiv = document.querySelector("#house-cards");
    
    const hitBtn = document.querySelector("#hit");
    const standBtn = document.querySelector("#stand");

    // hit button
    hitBtn.addEventListener("click", function() {
        hit();
        updateTotals();

        if (gameData.playerTotal > gameData.blackjack) {
            gameEnd();
        } else if (gameData.playerTotal == gameData.blackjack) {
            houseTurn();
        }
    });

    // stand button
    standBtn.addEventListener("click", function() {
        houseTurn();
    });

    // GAME END SCREEN //

    // play again + quit
    const endScreen = document.querySelector("#end-screen");
    const playAgainBtn = document.querySelector("#play-again");
    const quitEndBtn = document.querySelector("#end-quit");

    playAgainBtn.addEventListener("click", function() {
        endScreen.classList = "hidden";
        betsScreen.classList = "active";

        // RESET EVERYTHING
        playerCardsDiv.innerHTML = "";
        houseCardsDiv.innerHTML = "";

        playerTotalDiv.classList.remove("bust");
        houseTotalDiv.classList.remove("bust");
         playerTotalDiv.innerHTML = "?";
        houseTotalDiv.innerHTML = "?";

        gameData.playerCards = [];
        gameData.houseCards = [];
        gameData.playerTotal = 0;
        gameData.houseTotal = 0;
        gameData.deck = [
            {suit: "club", rank: "A"},
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
        ];
    });

    quitEndBtn.addEventListener("click", function() {
        location.reload(); 
    });

})();