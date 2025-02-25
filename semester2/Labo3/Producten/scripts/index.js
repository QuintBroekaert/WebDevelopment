const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", calc); // Add event listener inside setup()
};

const calc = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantalInput = document.getElementsByClassName("aantalInput");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let btw = document.getElementsByClassName("btw");
    let totaalElem = document.getElementById("totaal");
    let totaal = 0; // Initialize total value

    for (let i = 0; i < aantalInput.length; i++) {
        let aantal = parseInt(aantalInput[i].value.trim());
        let tempPrijs = parseFloat(prijzen[i].innerHTML.trim().slice(0, -4));
        let tempPrecent = parseFloat(btw[i].innerHTML.trim().slice(0, -1));

        if (isNaN(aantal) || isNaN(tempPrijs) || isNaN(tempPrecent)) {
            continue; // Skip if any value is invalid
        }

        let subtotaal = (aantal * tempPrijs) + (aantal * tempPrijs * tempPrecent / 100);
        subtotalen[i].innerHTML = subtotaal.toFixed(2) + " Euro";

        totaal += subtotaal;
    }

    totaalElem.innerHTML = totaal.toFixed(2) + " Euro";
};

window.addEventListener("load", setup);
