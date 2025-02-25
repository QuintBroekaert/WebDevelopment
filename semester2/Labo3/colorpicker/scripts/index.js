const update = () =>{
	let sliders = document.getElementsByClassName("slider");
	let red = sliders[0].value
	let green = sliders[1].value
	let blue = sliders[2].value
	let colorBlock = document.getElementById("color");
	colorBlock.style.backgroundColor = `rgb(${red},${green},${blue})`

}
let sliders = document.getElementsByClassName("slider");
sliders[0].addEventListener("change",update);
sliders[0].addEventListener("input",update);
sliders[1].addEventListener("change",update);
sliders[1].addEventListener("input",update);
sliders[2].addEventListener("change",update);
sliders[2].addEventListener("input",update);