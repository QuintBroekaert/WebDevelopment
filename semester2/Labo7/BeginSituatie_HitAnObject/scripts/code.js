const startGame = () => {
    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    };
}
    window.addEventListener("load",startGame);
    const createObject = () =>{
        let field = document.getElementById("playField");
        let object = document.createElement("img");
        object.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
        object.addEventListener("click", checkState)
        field.append(object);
    }
    const wissel = () =>{
        let field = document.getElementById("playField");
        let objects = document.childNodes;
        for(let i = 0; i < objects.length; i++){
            let x = Math.random*800;
            x = Math.ceil(x);
            let y = Math.random*600;
            y = Math.ceil(y);
            let temp = objects[i];
            temp.style.marginLeft(x + "px");
            temp.style.marginBottom(y + "px");
        }
    }
    const checkState = () =>{
        if(this.src == "images/0.png"){
// add bomb sequence
        }else{
            global.score++;
        }
    }