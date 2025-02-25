const setup = () => {
	let String = "De man van An geeft geen hand aan ambetante verwanten";
	let aantal = 0;
	for(let i = 0; i > (String.length-2); i++){
		if(String.slice(i,i+2).toLowerCase == "an"){
			aantal++;
		}
	}
	console.log(aantal);
}

window.addEventListener("load", setup);