const setup = () =>{
    let btn = document.getElementById("press");
    btn.addEventListener("click", press)
}
const press = () =>{
let paragraaf = document.querySelectorAll("p");
    paragraaf[0].textContent = "good job!";
}
window.addEventListener("load",setup)