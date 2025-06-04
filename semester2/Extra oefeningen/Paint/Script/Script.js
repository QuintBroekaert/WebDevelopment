
let global
const setup = () =>{
createpixels();
global.selectedColor = "white"
if(!localStorage.getItem("history")){
localStorage.setItem("history",JSON.stringify([]))
}
}
const createpixels = () =>{
for (let index = 0; index < 10000; index++) {
    let pix = document.createElement("div")
    pix.classList.add("pix");
    let main = document.getElementById("field");
    pix.id = index;
    pix.addEventListener("click",selectpix)
    main.append(pix);
}
}
const selectpix = () =>{
let pix = Event.Target;
pix.style.backgroundcolor = global.selectedColor;
}
const selectColor = () =>{
    let pix = Event.Target
    global.selectColor = pix.style.backgroundcolor;
}
window.addEventListener("load",setup)