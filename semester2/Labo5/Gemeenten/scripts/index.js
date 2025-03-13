const setup = () => {
	let Gemeenten = {}
	let stop = false
	while(!stop){
		let input = prompt("Geef een gemeente in:")
	if(input == "stop"){
		console.log("hammer time!")
		stop = true
	}
	}
}

window.addEventListener("load", setup);