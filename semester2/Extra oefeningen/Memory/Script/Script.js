let global ={
    points: 0,
    selected: null
}
const Start = () =>{
generateCards();
console.log("finished loading...")
}
const generateCards = () => {
    let field = document.getElementById("field");
    let cards = [];
    for (let i = 0; i < 6; i++) {
        let img = document.createElement("img");
        img.src = "images/background.png";
        img.dataset.index = i;
        img.classList.add("cards")
        let img2 = document.createElement("img");
        img2.src = "images/background.png";
        img2.dataset.index = i;
        img2.classList.add("cards")
        img.addEventListener("click", selectCard);
        img2.addEventListener("click", selectCard);
        cards.push(img);
        cards.push(img2);
    }
    cards = shuffle(cards);
    console.log(cards)
    for (let i = 0 ; i < cards.length; i++){
        field.append(cards[i]);
    }
}
    const selectCard = () =>{
    event.target.src = "images/" + event.target.dataset.index + ".png";
        if(global.selected != null && global.selected.dataset.index == event.target.dataset.index){
            global.points++;
            console.log("correct")
        }
        else{
global.selected = event.target;
            setTimeout(()=> {
                Event.Target.src = "images/background.png";
            },1000);
        }
}
    const shuffle = (cards) =>{
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
            [cards[i], cards[j]] = [cards[j], cards[i]];  // Swap elements
        }
        return cards;
    }

    window.addEventListener("load",Start);