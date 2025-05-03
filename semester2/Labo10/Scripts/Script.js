
const initialize = () =>{
    let btn = document.getElementById("btn");
    if(localStorage.getItem("cards") == null){
        localStorage.setItem("cards", JSON.stringify([]));
    }
    loadHistory();
    btn.addEventListener("click", parseCommmand)
}
const createSearchString = (array) =>{
    let search = "";
    for (let i = 1; i < array.length; i++){
        search = array[i] + " "
    }
    search = search.trim();
    return search;
}
const parseCommmand = () =>{
    let txt = document.getElementById("txt");
    let command = txt.value;
    let commandWords = command.split(' ');
    switch (commandWords[0]){
        case "/g":
            let g = {
                title: "x",
                text: txt.value,
                url: ("https://www.google.com/search?q=" + createSearchString(commandWords))
            };
            let temp = localStorage.getItem("cards")
            temp = JSON.parse(temp);
            temp.push(g);
            localStorage.setItem("cards", JSON.stringify(temp));
            window.location = g.url
            break;
                case "/i":
                    let i = {
                        title: "i",
                        text: txt.value,
                        url: ("https://www.instagram.com/explore/tags/viveshwbkortrijk/" + createSearchString(commandWords))
                    };
                    let instagram = localStorage.getItem("cards")
                    instagram = JSON.parse(instagram);
                    instagram.push(g);
                    localStorage.setItem("cards", JSON.stringify(instagram));
                    window.location = i.url
                    break;
                    case "/x":
                        let x = {
                            title: "x",
                        text: txt.value,
                        url: ("https://x.com/hashtag/" + createSearchString(commandWords))
    };
    let twitter = localStorage.getItem("cards")
                        twitter = JSON.parse(cards);
                        twitter.push(temp);
                        localStorage.setItem("cards", JSON.stringify(twitter));
                        window.location = temp.url
                        break;
                        case "/y":
                            let y = {
                                title: "y",
                                text: txt.value,
                                url: ("https://www.youtube.com/results?search_query=" + createSearchString(commandWords))
                            }
                            cards = localStorage.getItem("cards")
            cards = JSON.parse(cards);
                            cards.push(y);
                            localStorage.setItem("cards", JSON.stringify(cards));
                            window.location = y.url
                            break;
        default:
            console.log(command);
            window.alert("Invalid commmand");
            break;
    }
     txt.value = "";
}
const remove = (event) =>{
let current = event.target
current.remove();
}
const loadHistory = () => {
    let array = localStorage.getItem("cards");
    let coloms = document.getElementsByClassName("col-3");
    let btn = document.createElement("button");
    let text = document.createElement("span");
    text.style.color = "white";
    btn.textContent = "GO!";
    btn.style.color = "white";
    btn.backgroundColor = "black";
    let title = document.createElement("h2");
    title.style.color = "white";
    let cards = localStorage.getItem("cards");
    cards = JSON.parse(cards);
    for (let index = 0; index < array.length; index++) {
        let card = document.createElement("div");
    coloms[index].innerHTML = "";
    card.classList.add("cards");
    title.textContent = array[index].title;
    text.textContent = array[index].text;
    btn.textContent = "Go!"
    btn.style.color = "White";
    card.append(title);
    card.append(text);
        switch(array[index].title){
            case "y":
                card.style.backgroundColor = "red";
                break;
                case "i":
            card.style.backgroundColor = "purple"
                break;
                case "x":
                card.style.backgroundColor = "blue"
                break;
                case "g":
                card.style.backgroundColor = "blue"
                break;
                case "f":

                break;
                
        }
        btn.addEventListener("click",remove);
        coloms[index].append(card)
    }
}
window.addEventListener("load", initialize);