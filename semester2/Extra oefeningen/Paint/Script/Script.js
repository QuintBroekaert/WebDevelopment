
const setup = () =>{
createpixels();
if(!localStorage.getItem("history")){
localStorage.setItem("history",JSON.stringify([]))
}
}
const createpixels = () =>{
for (let index = 0; index < 10000; index++) {
    let pix = document.createElement("div")
    pix.id = index;
    pix.classList.add("pix");
}
}
window.addEventListener("load",setup)