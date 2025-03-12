const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    swap(tekst)

}
const swap = (tekst) => {
    console.log("test")
    let uitkomst =""
    for(let i = 0 ; i < tekst.length-2;  i++){
        if(tekst.slice(i,(i+2)).toLowerCase() == "de"){
            uitkomst +="het"
            i++
        }
        else{
            uitkomst += tekst.slice(i,(i+1));
        }
    }
    console.log(uitkomst)
}

window.addEventListener("load", setup);