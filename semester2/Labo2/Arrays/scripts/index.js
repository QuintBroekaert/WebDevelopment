const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let array = ["Mats","Britt","Wim","Sabine","Monique"];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
window.addEventListener("load", setup);

