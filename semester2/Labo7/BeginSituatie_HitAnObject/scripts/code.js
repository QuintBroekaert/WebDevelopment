const startGame = () => {
    var global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    }
    let timer = setInterval(setTarget,1000);
}
const setTarget = () => {
    let playField = document.getElementById("playField");
    let bomb = document.createElement("img");
    bomb.style.width = (global.IMAGE_SIZE + "px");
    bomb.style.height = (global.IMAGE_SIZE + "px");
    bomb.src = "images/0.png";
    bomb.alt = "target";
    bomb.addEventListener("click", click);
    playField.appendChild(bomb);

}
const click = () =>{
    window.alert("You clicked");
}
const endGame = () => {
    window.alert("you are dead");
    let x = Math.round(Math.random()*600);
    let y = Math.round(Math.random()*800);
    bomb.style.marginLeft = x;
    bomb.style.marginBottom = y;
}

window.addEventListener("load", startGame);


