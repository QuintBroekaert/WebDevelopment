const colorSwitch = (index) => {
    let buttons = document.getElementsByClassName("botton");
    let color = "color";
    if (buttons[index]) {
        buttons[index].classList.toggle(color);
    }
};

window.addEventListener("load", () => {
    let buttons = document.getElementsByClassName("botton");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => colorSwitch(i));
    }
});
