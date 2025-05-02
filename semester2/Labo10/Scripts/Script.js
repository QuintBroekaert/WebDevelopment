
const initialize = () =>{
    let btn = document.getElementById("btn");
    if(localStorage.getItem("cards") == null){
        localStorage.setItem("cards", JSON.stringify([]))
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
            window.location = g.url
             cards = localStorage.getItem("cards")
            cards = JSON.parse(cards);
            cards.push(g);
            localStorage.setItem("cards", JSON.stringify(cards));
            break;
                case "/i":
                    let i = {
                        title: "x",
                        text: txt.value,
                        url: ("https://www.instagram.com/explore/tags/viveshwbkortrijk/" + createSearchString(commandWords))
                    };
                    window.location = i.url
                    cards = localStorage.getItem("cards")
                    cards = JSON.parse(cards);
                    cards.push(g);
                    localStorage.setItem("cards", JSON.stringify(cards));
                    break;
                    case "/x":
                        let x = {
                            title: "x",
                        text: txt.value,
                        url: ("https://x.com/hashtag/" + createSearchString(commandWords))
    };
                        window.location = temp.url
                        let cards = localStorage.getItem("cards")
                        cards = JSON.parse(cards);
                        cards.push(temp);
                        localStorage.setItem("cards", JSON.stringify(cards));
                        break;
                        case "/y":
                            let y = {
                                title: "y",
                                text: txt.value,
                                url: ("https://www.youtube.com/results?search_query=" + createSearchString(commandWords))
                            }
                            window.location = y.url
            cards = localStorage.getItem("cards")
            cards = JSON.parse(cards);
                            cards.push(y);
                            localStorage.setItem("cards", JSON.stringify(cards));
                            break;
        default:
            console.log(command);
            window.alert("Invalid commmand");
            break;
    }
}
const loadHistory = () => {
    let array = localStorage.getItem("cards");
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if(index <= 3){

        }
        else{

        }
        
    }
}
window.addEventListener("load", initialize);