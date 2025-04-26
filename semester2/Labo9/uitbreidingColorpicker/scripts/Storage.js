const storeSliderData = () => {
    localStorage.setItem("rood", document.getElementById('sldRed').value);
    localStorage.setItem("groen", document.getElementById('sldGreen').value);
    localStorage.setItem("blauw", document.getElementById('sldBlue').value);
};

const restoreSliderData = () => {
    document.getElementById('sldRed').value = localStorage.getItem("rood");
    document.getElementById('sldGreen').value = localStorage.getItem("groen");
    document.getElementById('sldBlue').value = localStorage.getItem("blauw");
};

const storeColors = () => {
    let section = document.getElementById("saves");
    let temp = (""+ section.innerHTML)
    localStorage.setItem("colors", temp);
    }

    const restoreColors = () => {
        const section = document.getElementById("saves");
        section.innerHTML = localStorage.getItem("colors");
        let saved = document.getElementsByClassName("save");
        let buttons = document.getElementsByClassName("btn");
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", remove = (event) => {
                const parentDiv = event.target.parentElement;
                parentDiv.remove();
                storeColors();
            });
            saved[i].addEventListener("click", select = (event) =>{
                let temp = event.target;
                let display = document.getElementById("swatch");
                display.style.backgroundColor = temp.style.backgroundColor;
            }
            
            );
        }
    };