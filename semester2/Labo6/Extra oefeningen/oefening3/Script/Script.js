const setup = () =>{
    let btn = document.getElementById("btn");
    btn.addEventListener("click",add)
}
const add = () =>{
    let div = document.getElementById("myDIV");
    let p = document.createElement("p");
    p.textContent = "this is text";
div.append(p);
}
window.addEventListener("load",setup);