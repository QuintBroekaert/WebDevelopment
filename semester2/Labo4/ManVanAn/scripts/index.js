const setup = () => {
    let sentence = "De man van An geeft geen hand aan ambetante verwanten";
    let aantal = 0;

    for (let i = 0; i < sentence.length - 1; i++) {
        if (sentence.slice(i, i + 2).toLowerCase() == "an") {
            aantal++;
        }
    }
    console.log("De lettercombinatie 'an' kwam " + aantal + "keer voor.");
};

window.addEventListener("load", setup);
