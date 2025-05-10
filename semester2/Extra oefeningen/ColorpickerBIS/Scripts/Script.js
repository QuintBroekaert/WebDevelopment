
const initialize = () =>{
    let red = document.getElementById("sldRed");
    let green = document.getElementById("sldGreen");
    let blue = document.getElementById("sldBlue");
    red.addEventListener("change", change)
    blue.addEventListener("change", change)
    green.addEventListener("change", change)
}
const change = () =>{
    let lblRed = document.getElementById("lblRed");
    let lblGreen = document.getElementById("lblGreen");
    let lblBlue = document.getElementById("lblBlue");
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    lblRed.textContent = red;
    lblGreen.textContent = green;
    lblBlue.textContent = blue;
    let colors = document.getElementById("colors");
    colors.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}
window.addEventListener("load", initialize);