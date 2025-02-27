const spaties = () => {
	let textbox = document.getElementById("woord")
	let woord = textbox.value
	let spatieString = "";
for(let i = 0 ; i < woord.length ; i++){
	if(woord.slice(i,i+1) !== " "){
		spatieString += woord.slice(i,i+1)
		spatieString += " ";
	}
}
console.log(spatieString)
}
const setup = () =>{
	let btn = document.getElementById("btn");
btn.addEventListener("click",spaties);
}
window.addEventListener("load",setup)