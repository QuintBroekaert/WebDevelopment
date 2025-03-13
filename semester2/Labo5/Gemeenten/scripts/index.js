const setup = () => {
    let Gemeenten = [];
    let stop = false;
    let select = document.getElementById("gemeenten");

    while (!stop) {
        let input = prompt("Geef een gemeente in: ");

        if (input === "stop") {
            stop = true;
        } else if (input) {  // Lege ingaven vermijden
            Gemeenten.push(input);
        }
    }

    // sortering
    Gemeenten.sort();

    // voeg de gesorteerde steden toe:
    Gemeenten.forEach(gemeente => {
        let option = document.createElement("option");
        option.textContent = gemeente;
        select.appendChild(option);
    });
};

window.addEventListener("load", setup);
