const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("Save");
    button.addEventListener("click", save);
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
        restoreSliderData();
        restoreColors();
    }
    update();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerText = green;
    document.getElementById("lblBlue").innerText = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    storeSliderData();
};

const save = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let saved = document.createElement("div");
    saved.classList.add("save");
    saved.addEventListener("click",select)
    let btn = document.createElement("button");
    btn.textContent = "X";
    saved.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    let section = document.getElementById("saves");
    saved.classList.add("save");
    saved.red = red;
    saved.green = green;
    saved.blue = blue;
    btn.classList.add("btn"); 
    saved.appendChild(btn);
    section.appendChild(saved);
    btn.addEventListener("click", remove = () => {
        saved.remove();
    });
    storeColors(); 
};
select = (event) => {
    let temp = event.target;
    let display = document.getElementById("swatch");
    display.style.backgroundColor = temp.style.backgroundColor;
}
window.addEventListener("load", initialize);
