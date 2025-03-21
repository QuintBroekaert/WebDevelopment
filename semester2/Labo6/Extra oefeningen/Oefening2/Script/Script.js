const setup = () =>{
    let list = document.querySelectorAll("li");
    let img = document.createElement("img");
    img.src = "Images/image.jpg";
    let section = document.getElementById("section");
    section.append(img);
    for(let i = 0 ; i < list.length ; i++){

        list[i].style.color = 'red';
    }
}
window.addEventListener("load",setup);