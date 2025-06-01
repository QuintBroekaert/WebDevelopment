let global ={
    points: 0,
    selected: null
}
const Start = () =>{
generateCards();
}
const generateCards = () =>{
    let field = document.getElementById("Field");
    for(let i = 0 ; i < 12 ; i++){
        let img = document.createElement("img");
        img.src = "images/background.png";
        img.num = i;
        img.addEventListener("click",selectCard);
        field.append(img);
        field.append(img);
    }
    const selectCard = () =>{
        if(global.selected != null){
        if(global.selected.num == Event.Target.num){
            global.points++;
        }
        else{
global.selected = Event.Target;
        }
    }
    }
    window.addEventListener("load",Start);
}