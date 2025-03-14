const getData = () => {
    event.preventDefault();
    // Get checkbox state
    let isRoker = document.getElementById("roker").checked;

    // Get selected radio button (moedertaal)
    let moedertaal = document.getElementsByName("moedertaal")
let taal = ""
    for(let i = 0 ; i < moedertaal.length ; i++){
        if(moedertaal[i].checked){
            taal = moedertaal[i].value
        }
    }
    

    // Get selected buurland
    let buurland = document.getElementById("buurland").value;

    // Get multiple selected options from "bestelling"
 let bestellingOptions = document.getElementById("bestelling").selectedOptions;
 let bestellingen = "";
 for (let i = 0; i < bestellingOptions.length; i++) {
    bestellingen += bestellingOptions[i].value + ", ";
}
    

    // Log results to console
    console.log("Is Roker:", isRoker);
    console.log("Moeder taal:", taal);
    console.log("Favoriete buurland:", buurland);
    console.log("Bestelling:"+ bestellingen);
}

const setup = () => {
    let form = document.getElementById("form");
    form.addEventListener("submit", getData);
}

// Run setup on page load
window.addEventListener("load", setup);
