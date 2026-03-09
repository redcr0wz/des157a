(function () {
    "use strict";
    console.log("reading js");

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
    
    musicSettingsBtn.addEventListener("click", function () {
        musicSettingsBtn.innerHTML = "Music &#10006;";
        // TODO: toggle music on/off
    });

    // settings quit
    const quitSettingsBtn = document.querySelector("#settings-quit");

    quitSettingsBtn.addEventListener("click", function () {
        location.reload(); 
    });

    // BET SCREEN //

    const betBtn = document.querySelector("#bet");
    const betMoney = document.querySelector("#bet-money");

    const gameScreen = document.querySelector("#game");

    betBtn.addEventListener("click", function () {
        betsScreen.classList = "hidden";
        gameScreen.classList = "active";

        // TODO: start game, get money
    });

    const backBtn = document.querySelector("#back");

    backBtn.addEventListener("click", function () {
        betsScreen.classList = "hidden";
        startScreen.classList = "active";
    });

    // TODO: BLACKJACK GAME //
    const playerCards = document.getElementById("#player-cards");
    const dealerCards = document.getElementById("#house-cards");
    
    // GAME END SCREEN //

    // play again + quit
    const endScreen = document.querySelector("#end-screen");
    const playAgainBtn = document.querySelector("#play-again");
    const quitEndBtn = document.querySelector("#end-quit");

    playAgainBtn.addEventListener("click", function () {
        endScreen.classList = "hidden";
        betsScreen.classList = "active";

        // TODO: play again with user money
    });

    quitEndBtn.addEventListener("click", function () {
        location.reload(); 
    });

})();