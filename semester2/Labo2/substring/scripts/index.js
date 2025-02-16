const setup = () => {
    const createSubString = (startpoint, endpoint, input) => {
        return input.substring(startpoint, endpoint);
    };

    let btnSubstring = document.getElementById("press");
    btnSubstring.addEventListener("click", () => {
        let startpoint = document.getElementById("startPosition").value;
        let endpoint = document.getElementById("endposition").value;
        let input = document.getElementById("stringInput").value;
		let output = document.getElementById("output");
		output.innerHTML = createSubString(startpoint, endpoint, input);
    });
};

window.addEventListener("load", setup);
