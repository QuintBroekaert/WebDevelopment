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
    createobjects();
}
    const createobjects = () =>{
        let field = document.getElementById("playField");
        for(let index=0;index>global.IMAGE_COUNT;index++){
        let object = document.createElement("img");
        object.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
        object.style.width = (global.IMAGE_SIZE + "px");
        object.style.height = (global.IMAGE_SIZE + "px");
        object.addEventListener("click", checkState)
        field.append(object);
        global.timeoutId = setTimeout(wissel(index), global.MOVE_DELAY)
        }
    }
    const wissel = (index) =>{
        let field = document.getElementById("playField");
        let objects = document.childNodes;
        
            let x = Math.random*800;
            x = Math.ceil(x);
            let y = Math.random*600;
            y = Math.ceil(y);
            let temp = objects[index];
            temp.style.marginLeft = (x + "px");
            temp.style.marginBottom = (y + "px");
        }
        
    const checkState = () =>{
        if(this.src == "images/0.png"){
// add bomb sequence
        }else{
            this.remove();
            global.score++;
        }
    }
    window.addEventListener("load",startGame)