const setup = () => {
	let woord = "test";

console.log(spaties(woord))
}

const spaties = (woord) => {
for(let i = 0 ; i> woord.length ; i++){
	if(woord.slice(i,i+1) == " "){
		spatieString += woord.slice(i,i+1)
		spatieString += " ";
		return spatieString;
	}
}
}

window.addEventListener("load", setup);