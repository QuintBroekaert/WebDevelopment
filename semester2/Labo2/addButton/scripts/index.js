const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	const addtxt = text =>{
		let pElemet=document.getElementById("txtOutput");
		pElement.innerHTML="Welkom!";
	}
	let btnAdd = document.getElementById("btnAdd")
let pElement=document.getElementById('txtOutput');
btnAdd.addEventListener("click",addtxt);
}

window.addEventListener("load", setup);
