const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const voegNaamToe = naam =>{
        array.push(naam);
    }
    let array = ["Mats","Britt","Wim","Sabine","Monique"];
    voegNaamToe(prompt("Geef een naam in:"));
    console.log(array.length);
    for (let i = 0; i < array.length; i+= 2) {
        console.log(array[i]);
    }
    array.sort();
    console.log(array.toString());
}
window.addEventListener("load", setup);
