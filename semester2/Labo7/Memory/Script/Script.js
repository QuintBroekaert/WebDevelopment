const startGame = () =>{
    let global ={
        AANTAL_HORIZONTAAL:4,
AANTAL_VERTICAAL:3,
AANTAL_KAARTEN:6,
punten:0,
beurten:0,
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
        card.src = "images/background.png";
        let Copy = card
        card.addEventListener("click",select(i));
        Copy.addEventListener("click", select(i));
        table.append(card);
        table.append(Copy);
    }

}
const select = (cardNum) =>{
    if(global.previouslySelected == null){
        this.src = "kaart" + cardNum + ".png"
        global.previouslySelected = this;
     }else if(global.previouslySelected === this && previouslySelected.src !="images/background.png"){
        global.punten++;
     }else{
        this.src ="images/background.png";
        previouslySelected.src = "images/background.png";
        beurten++;
     }
}