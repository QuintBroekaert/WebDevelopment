const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let button = document.getElementById("Save")
	button.addEventListener("click", save);
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const save = () =>{
	let saved = document.createElement("div")
	let swatch = document.getElementById("swatch");
	saved.style.backgroundColor = swatch.backgroundColor;
	let section =document.getElementById("savedColors")
	section.appendChild(saved);
}

window.addEventListener("load", initialize);