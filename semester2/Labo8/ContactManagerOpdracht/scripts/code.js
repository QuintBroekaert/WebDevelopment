let personen = [];
const validatiecheck = () =>{
    valideer();
    let errors = document.getElementsByClassName("errorMessage");
    for(let i = 0 ; i < errors.length;i++){
        if(errors[i].textContent != ""){
            return false;
        }
    }
    return true;
}
//functie bewerkknop
const bewaarBewerktePersoon = (event) => {
    if(validatiecheck()){
    let select = document.getElementById("lstPersonen");
    let options = select.children
    let selected = options[select.selectedIndex];
    persoon = personen[selected.value];
    persoon.naam = document.getElementById('txtVoornaam').value;
    persoon.achternaam = document.getElementById('txtFamilienaam').value;
   persoon.geboortedatum = document.getElementById('txtGeboorteDatum').value;
   persoon.email = document.getElementById('txtEmail').value;
   persoon.aantalKinderen = document.getElementById('txtAantalKinderen').value;
selected.value = persoon.naam + " " + persoon.achternaam;
    selected.text = persoon.naam + " " +persoon.achternaam;
    personen[selected.value] = persoon;
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    //waarden opvragen
     
personen[selected.value] = persoon;
selected = persoon.naam + " " +persoon.achternaam;
clear();
}
}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    if(validatiecheck()){
    let select = document.getElementById("lstPersonen");
    
    // Haal waarden uit de inputvelden op
    let naam = document.getElementById('txtVoornaam').value;
    let achternaam = document.getElementById('txtFamilienaam').value;
    let geboortedatum = document.getElementById('txtGeboorteDatum').value;
    let email = document.getElementById('txtEmail').value;
    let aantalKinderen = document.getElementById('txtAantalKinderen').value;

    // Maak een object voor de persoon
    let persoon = {
        naam: naam,
        achternaam: achternaam,
        geboortedatum: geboortedatum,
        email: email,
        aantalKinderen: aantalKinderen
    };

    // Voeg de persoon toe aan de array
    personen.push(persoon);

    // Maak een nieuwe optie voor de dropdown
    let option = document.createElement("option");
    option.text = persoon.naam + " " +persoon.achternaam;
    option.value = personen.length - 1; // Bewaar de index van de persoon in de array
    select.appendChild(option);

    // Maak de invoervelden leeg voor de volgende invoer
    clear();
}
}
const clear = () =>{
    document.getElementById('txtVoornaam').value = "";
    document.getElementById('txtFamilienaam').value = "";
    document.getElementById('txtGeboorteDatum').value = "";
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtAantalKinderen').value = "";
    }



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change",loadselected)
};
const loadselected = (event) =>{
    let options = event.target;
    let selected = options[options.selectedIndex]
    persoon = personen[selected.value];
    document.getElementById('txtVoornaam').value = persoon.naam;
    document.getElementById('txtFamilienaam').value = persoon.achternaam;
    document.getElementById('txtGeboorteDatum').value = persoon.geboortedatum;
    document.getElementById('txtEmail').value = persoon.email;
    document.getElementById('txtAantalKinderen').value = persoon.aantalKinderen;
}

window.addEventListener("load", setup);