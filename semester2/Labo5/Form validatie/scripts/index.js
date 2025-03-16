const setup = () =>{
	let btn = document.getElementById("btn");
	btn.addEventListener("click",valideer)
}
window.addEventListener("load",setup);
const valideer = () => {
	let geldig = true;
	
	function toonFout(veld, bericht) {
		document.getElementById("error-" + veld).textContent = bericht;
		document.getElementById(veld).classList.add("invalid");
		geldig = false;
	}
	
	const resetFout = (veld) => {
		document.getElementById("error-" + veld).textContent = "";
		document.getElementById(veld).classList.remove("invalid");
	}

	let voornaam = document.getElementById("voornaam").value.trim();
	if (voornaam.length > 30) {
		toonFout("voornaam", "max. 30 karakters");
	} else {
		resetFout("voornaam");
	}

	let familienaam = document.getElementById("familienaam").value.trim();
	if (familienaam === "") {
		toonFout("familienaam", "verplicht veld");
	} else if (familienaam.length > 50) {
		toonFout("familienaam", "max 50 karakters");
	} else {
		resetFout("familienaam");
	}

	let geboortedatum = document.getElementById("geboortedatum").value.trim();
	let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (geboortedatum === "") {
		toonFout("geboortedatum", "verplicht veld");
	} else if (!dateRegex.test(geboortedatum)) {
		toonFout("geboortedatum", "formaat is niet jjjj-mm-dd");
	} else {
		resetFout("geboortedatum");
	}

	let email = document.getElementById("email").value.trim();
	if (email === "") {
		toonFout("email", "verplicht veld");
	} else if (!email.includes("@") || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1 || email.split("@").length !== 2) {
		toonFout("email", "geen geldig email adres");
	} else {
		resetFout("email");
	}

	let kinderen = document.getElementById("kinderen").value.trim();
if (kinderen < 0) {
    toonFout("kinderen", "is geen positief getal");
} else if (kinderen >= 99) {
    toonFout("kinderen", "is te vruchtbaar");
}
else {
		resetFout("kinderen");
	}

	if (geldig) {
		alert("Alles is correct ingevoerd");
	}
}