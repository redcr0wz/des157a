(function () {
    "use strict";
    console.log("reading js");

    // GAME VARIABLES //
    
    const gameData = {
        userBet: 0,
        userMoney: 0,
        playerCards: [],
        dealerCards: [],
        playerTotal: 0,
        dealerTotal: 0,
        index: 0,
        blackjack: 21,
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
    const userBetDisplay = document.querySelector("#user-bet");
    const userMoneyDisplay = document.querySelector("#user-money");
    const gameScreen = document.querySelector("#game");

    betBtn.addEventListener("click", function () {
        if (betMoney.value == null || betMoney.value == ""  || betMoney.value < 0) {
            alert("Please enter a valid bet amount.");
            return;
        } else {
            betSound.play();
            betsScreen.classList = "hidden";
            gameScreen.classList = "active";

            gameData.userBet = betMoney.value;

            userBetDisplay.innerHTML = `$${gameData.userBet}`;
            userMoneyDisplay.innerHTML = `$${gameData.userMoney}`;
        }
    });

    const backBtn = document.querySelector("#back");

    backBtn.addEventListener("click", function () {
        betsScreen.classList = "hidden";
        startScreen.classList = "active";
    });

    // TODO: BLACKJACK GAME //
    const playerCardsDiv = document.getElementById("#player-cards");
    const dealerCardsDiv = document.getElementById("#house-cards");
    
    // GAME END SCREEN //

    // play again + quit
    const endScreen = document.querySelector("#end-screen");
    const playAgainBtn = document.querySelector("#play-again");
    const quitEndBtn = document.querySelector("#end-quit");

    playAgainBtn.addEventListener("click", function () {
        endScreen.classList = "hidden";
        betsScreen.classList = "active";

        playerCardsDiv.innerHTML = "";
        dealerCardsDiv.innerHTML = "";

        // TODO: play again with user money
    });

    quitEndBtn.addEventListener("click", function () {
        location.reload(); 
    });

})();