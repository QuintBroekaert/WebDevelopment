const setup = () => {
    const createSubString = (startpoint, length, input) => {
        return input.substring(startpoint, startpoint + length);
    };

    let btnSubstring = document.getElementById("press");
    btnSubstring.addEventListener("click", () => {
        let startpoint = document.getElementById("startPosition").value;
        let length = document.getElementById("length").value;
        let input = document.getElementById("stringInput").value;
		let output = document.getElementById("output");
		output.innerHTML = createSubString(startpoint, length, input);
    });
};

window.addEventListener("load", setup);
