// script.js
function playCard(player) {
    const cards = ['Ás', 'Rei', 'Rainha', 'Valete', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    if (player === 1) {
        document.getElementById("player1Card").textContent = card;
    } else {
        document.getElementById("player2Card").textContent = card;
    }

    determineWinner();
}

function determineWinner() {
    const card1 = document.getElementById("player1Card").textContent;
    const card2 = document.getElementById("player2Card").textContent;

    if (card1 && card2) {
        if (card1 === card2) {
            document.getElementById("winner").textContent = "Empate!";
        } else {
            document.getElementById("winner").textContent = "Jogador " + (card1 > card2 ? "1" : "2") + " vence!";
        }
    }
}
