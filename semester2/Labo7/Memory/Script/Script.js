let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    punten: 0,
    beurten: 0,
    previouslySelected: null
};

const startGame = () => {
    let table = document.getElementById("table");
    table.style.display = "grid";
    table.style.gridTemplateColumns = `repeat(${global.AANTAL_HORIZONTAAL}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${global.AANTAL_VERTICAAL}, 1fr)`;
    table.style.gap = "15px";

    let cards = [];
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        let card1 = document.createElement("img");
        card1.alt = "this is a card";
        card1.src = "images/background.png";
        card1.cardNum = i;
        card1.addEventListener("click", select);

        let card2 = document.createElement("img");
        card2.alt = "this is a card";
        card2.src = "images/background.png";
        card2.cardNum = i;
        card2.addEventListener("click", select);

        cards.push(card1, card2);
    }

    // array randomizer die ik op internet gevonden heb.
    cards.sort(() => Math.random() - 0.5);

    cards.forEach(card => table.append(card));
};

const select = (event) => {
    let selectedCard = event.currentTarget;
    
    if (selectedCard === global.previouslySelected) return; // dubbel clicken tegen houden.
    
    selectedCard.src = `images/${selectedCard.cardNum}.png`;
    selectedCard.style.width = "100%";
    
    if (global.previouslySelected == null) {
        global.previouslySelected = selectedCard;
    } else {
        if (global.previouslySelected.cardNum === selectedCard.cardNum) {
            // correct tell punten bij
            global.punten++;
            global.previouslySelected = null;
        } else {
            // fout wissel src waarden
            setTimeout(() => {
                selectedCard.src = "images/background.png";
                global.previouslySelected.src = "images/background.png";
                global.previouslySelected = null;
            }, 1000);
            global.beurten++;
        }
    }
};

window.addEventListener("load", startGame);
