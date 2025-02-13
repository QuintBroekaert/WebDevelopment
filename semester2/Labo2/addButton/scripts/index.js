const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	const addtxt = text =>{
		let pElemet=document.getElementById("txtOutput");
		pElement.innerHTML="Welkom!";
	}
	const kopieer = () => {
		let txtInput = document.getElementById("txtInput");
		let txtOutput = document.getElementById('outputTXT');
		txtOutput.innerHTML= txtInput.value;
		}
	let btnKopieer = document.getElementById("btnKopieer");
btnKopieer.addEventListener("click", kopieer);
	let btnAdd = document.getElementById("btnAdd")
let pElement=document.getElementById('txtOutput');
btnAdd.addEventListener("click",addtxt);
}

window.addEventListener("load", setup);
