const setup = () =>{
    const date = Date.now();
    const geboorteDatum = new Date("2006-0-4");
    let dagen = (date - geboorteDatum)/1000/60/60/24;
    console.log(dagen);
    dagen = Math.floor(dagen);
    console.log("Ik leef al voor " + dagen + " dagen.");
}
window.addEventListener('load', setup)