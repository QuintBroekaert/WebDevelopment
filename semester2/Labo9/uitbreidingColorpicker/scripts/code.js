const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("Save");
    button.addEventListener("click", save);
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
        restoreSliderData();
    }
    update();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    storeSliderData();
};

const save = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let saved = document.createElement("div");
    let btn = document.createElement("button");

    btn.textContent = "X";
    saved.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    let section = document.getElementById("saves");
    saved.classList.add("save");
    
    saved.appendChild(btn);
    section.appendChild(saved);

    
    btn.addEventListener("click", remove = () => {
        saved.remove();
    });
};

window.addEventListener("load", initialize);
