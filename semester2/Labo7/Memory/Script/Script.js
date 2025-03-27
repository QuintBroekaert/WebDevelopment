const startGame = () =>{
    let global ={
        AANTAL_HORIZONTAAL:4,
AANTAL_VERTICAAL:3,
AANTAL_KAARTEN:6,
previouslySelected:null
    }
    let table = document.getElementById("table");
    table.style.display = "grid";
    table.style.gridTemplateColumns = "repeat(1fr," + global.AANTAL_HORIZONTAAL + ")";
    table.style.gridTemplateRows = "repeat(1fr," + global.AANTAL_VERTICAAL + ")";
    // maak de kaarten aan
    for(let i = 0 ; i < global.AANTAL_KAARTEN; i++){
        let card = document.createElement("img")
        card.alt = "this is a card";
        card.src = ("images/card" + i + ".png");
        card.addEventListener("click",)
        table.append(card);
    }
}
const select = () =>{
    let currentCard = this;
    if(previouslySelected != null && currentCard === previouslySelected){

    }
}