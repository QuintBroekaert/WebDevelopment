let global
const Start = () =>{

}
const generateCards = () =>{
    let field = document.getElementById("Field");
    for(let i = 0 ; i < 12 ; i++){
        let img = document.createElement("img");
        img.src = "images/background.png";
        img.num = i;
        field.append(img);
        field.append(img);
    }
    const selectCard = () =>{
global.selected = Event.Target;
    }
}