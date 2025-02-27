const setup = () =>{
	let buttons = document.getElementsByClassName("button");
	color = "color";
}
window.addEventListener("load",setup);

const colorSwitch1 = () =>{
	let buttons = document.getElementsByClassName("button");
	buttons[btnnumber].classList.toggle(color);
}
buttons[1].addEventListener("click", colorSwitch1);