const storeSliderData = () =>{
    let kleurwaarden;
    localStorage.setItem("rood",document.getElementById('sldRed').value);
    localStorage.setItem("groen",document.getElementById('sldGreen').value);
    localStorage.setItem("blauw",document.getElementById('sldBlue').value);
}

const restoreSliderData = () =>{
    document.getElementById('sldRed').value = localStorage.getItem("rood");
    document.getElementById('sldGreen').value = localStorage.getItem("groen");
    document.getElementById('sldBlue').value = localStorage.getItem("blauw");
}

const storeColors = (rood,groen,blauw) =>{
let kleuren;
 kleuren.rood = rood;
kleuren.groen = groen;
kleuren.blauw = blauw;
kleuren = JSON.stringify(kleuren);
localStorage.setItem(localStorage.getItem("count"),kleuren);
let count = parseInt(localStorage.count);
count++;
localStorage.setItem("count",count.toString);
}

const restoreColors = () =>{
    let count = parseInt(localStorage.count);
    for (let index = 0; index <= count; index++) {
        let colors = JSON.parse(localStorage.getItem(index.toString))
    let saved = document.createElement("div");
    let btn = document.createElement("button");
    btn.textContent = "X";
    saved.style.backgroundColor = "rgb(" + colors.rood + "," + colors.groen + "," + colors.blauw + ")"; 
    let section = document.getElementById("saves");
    saved.classList.add("save");
    }
    
    saved.appendChild(btn);
    section.appendChild(saved);
}