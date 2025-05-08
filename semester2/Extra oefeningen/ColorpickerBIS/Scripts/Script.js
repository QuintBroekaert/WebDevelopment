
const initialize = () =>{

}
const change = () =>{
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let colors = document.getElementById("colors");
    colors.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

}