const setup = () =>{
    let btn = document.getElementById("btn")
}


var global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000, // 3 seconds
    score: 0,
    interval: null,
    FIELD_WIDTH: 600,
    FIELD_HEIGHT: 800
};

const startGame = () => {
    global.score = 0;
    createObjects();
    global.interval = setInterval(move, global.MOVE_DELAY);
};

const createObjects = () => {
    let field = document.getElementById("playField");

    for (let index = 0; index < global.IMAGE_COUNT; index++) {
        let object = document.createElement("img");
        object.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
        object.style.width = global.IMAGE_SIZE + "px";
        object.style.height = global.IMAGE_SIZE + "px";
        object.style.position = "absolute";

        object.style.left = getRandomX() + "px";
        object.style.top = getRandomY() + "px";

        object.addEventListener("click", checkState);
        field.append(object);
    }
};

const move = () => {
    let objects = document.querySelectorAll("#playField img");
    objects.forEach(wissel);
};

const getRandomX = () => Math.ceil(Math.random() * (global.FIELD_WIDTH - global.IMAGE_SIZE));
const getRandomY = () => Math.ceil(Math.random() * (global.FIELD_HEIGHT - global.IMAGE_SIZE));

const wissel = (object) => {
    object.style.left = getRandomX() + "px";
    object.style.top = getRandomY() + "px";
};
const updateScore = () =>{
    
}

const checkState = (event) => {
    let clickedImage = event.target;
    if (clickedImage.src.includes("images/0.png")) {
        clearInterval(global.interval);
        let field = document.getElementById("playField");
        field.innerHTML = "";
        window.alert("Game Over!");
    } else {
        wissel(clickedImage);
        global.score++;
    }
};

window.addEventListener("load", setup);
btn.addEventListener("click",startGame)
