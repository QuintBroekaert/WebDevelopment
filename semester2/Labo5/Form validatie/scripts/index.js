const setup = () =>{
let form = document.getElementById("form")
form.addEventListener("submit",getdata)
}
const getdata = () => {
	//voornaam ophalen en valideren.
	let voornaam = document.getElementById("voornaam").value;
if(voornaam.length > 30){
	let voornaamWarning = document.getElementById("voornaamWarning");
	voornaamWarning.textContent = "Naam is te groot";
	voornaamWarning.classList.toggle("onzichtbaar");
}
//Famillienaam ophalen en valideren
	let famillienaam = document.getElementById("famillienaam").value;
	if(famillienaam.length > 50){
		let WarnnigFamillienaam = document.getElementById("WarnnigFamillienaam");
		WarnnigFamillienaam.textContent = "de famillienaam is te lang.";
		WarnnigFamillienaam.classList.toggle("onzichtbaar")
	}
	let Geboortedatum = document.getElementById("Geboortedatum").value;
	if(Geboortedatum ==)

}
window.addEventListener("load",setup)


