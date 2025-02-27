const setup = () => {
	let paragrafen = document.getElementsByClassName("belangerijk");
	let i
	for(i= 0; i < paragrafen.length; i++){
		paragrafen[i].classList.add("opvallend");
	}
}
window.addEventListener("load", setup);
