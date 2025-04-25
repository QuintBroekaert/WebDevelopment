const storeSliderData = () =>{
    let kleurwaarden;
    localStorage.setItem("rood",document.getElementById('sldRed').value);
    localStorage.setItem("groen",document.getElementById('sldGreen').value);
    localStorage.setItem("blauw",document.getElementById('sldBlue').value);
if(localStorage.getItem('kleuren')){
    let temp = localStorage.getItem('kleuren');

}
else{
    let temp = [];
    temp.push(JSON.stringify(kleurwaarden));
    localStorage.setItem("Kleurwaarden", temp.toString());
}
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
localStorage.setItem(global.savedcolors.toString(),kleuren);
global.savedcolors++;
}

const restoreColors = () =>{
for(let i = 0 ; i < global.savedColors ; i++){
let kleuren = JSON.parse(localStorage.getItem(i.toString()));

}
}