let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    punten: 0,
    beurten: 0,
    previouslySelected: null
};

const startGame = () => {
    // zet het speelveld op.
    let table = document.getElementById("table");
    table.style.display = "grid";
    table.style.gridTemplateColumns = `repeat(${global.AANTAL_HORIZONTAAL}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${global.AANTAL_VERTICAAL}, 1fr)`;
    table.style.gap = "15px";

    // maak de kaarten aan
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        let card = document.createElement("img");
        card.alt = "this is a card";
        card.src = "images/background.png";
        card.dataset.cardNum = i; // Store card number
        card.addEventListener("click", select);

        let Copy = document.createElement("img");
        Copy.alt = "this is a card";
        Copy.src = "images/background.png";
        Copy.dataset.cardNum = i; // Store card number
        Copy.addEventListener("click", select);

        table.append(card);
        table.append(Copy);
    }
};

const select = (event) => {
    let temp = event.currentTarget;
    let cardNum = temp.dataset.cardNum;

    if (global.previouslySelected == null) {
        temp.src = `kaart${cardNum}.png`;
        global.previouslySelected = temp;
    } else if (global.previouslySelected === temp) {
        global.punten++;
        global.previouslySelected = null;
    } else {
        setTimeout(() => {
            temp.src = "images/background.png";
            global.previouslySelected.src = "images/background.png";
            global.previouslySelected = null;
        }, 1000);
        global.beurten++;
    }
};
window.addEventListener("load",startGame)
