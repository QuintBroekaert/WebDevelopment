const setup = () => {
	let trigram = "onoorbaar"
	let substring = ""
	for(let i = 1 ; i < (trigram.length-1) ; i++){
		console.log(trigram.slice((i-1),(i+2)))
	}
}

window.addEventListener("load", setup);