// ===================
// DOM elements
// ===================
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");

// ===================
// global variables
// ===================
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    Name: "Venkatesh",
    Chips: 145
}


playerEl.textContent = player.Name + ": $" + player.Chips;

// =========================
// random number fuction
// =========================
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}


// ======================
// start game function
// ======================
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

// ========================
// render game function
// ========================
function renderGame() {

    // =======================
    // cards and sum
    // =======================
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    // =======================
    // message condition
    // =======================
    if (sum <= 20) {
        message = "Draw next card";
    } else if (sum === 21) {
        message = "Won";
        hasBlackJack = true;
    } else {
        message = "Out";
        isAlive = false;
    }

    messageEl.textContent = message;
}

// ======================
// new card function
// ======================
function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

