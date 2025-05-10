
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
        search = array[i] + " ";
    }
    search = search.trim();
    return search;
}
const parseCommmand = () =>{
    let txt = document.getElementById("txt");
    let command = txt.value;
    let commandWords = command.split(' ');
    switch (commandWords[0]){
        
        // parse google
        case "/g":
            let g = {
                title: "g",
                text: txt.value,
                url: ("https://www.google.com/search?q=" + createSearchString(commandWords))
            };
            let temp = JSON.parse(localStorage.getItem("cards"));
            temp.push(g);
            localStorage.setItem("cards", JSON.stringify(g));
            window.open(g.url); 
            break;
            //parse intagram
                case "/i":
                    let i = {
                        title: "i",
                        text: txt.value,
                        url: ("https://www.instagram.com/explore/tags/" + createSearchString(commandWords))
                    };
                    let history = JSON.parse(localStorage.getItem("cards"));
                    history.push(i);
                    localStorage.setItem("cards", JSON.stringify(history));
                    window.open(i.url)
                    break;
                        break;
                        
                        case "/x":
                            let x = {
                                title: "x",
                                text: txt.value,
                                url: ("https://www.youtube.com/results?search_query=" + createSearchString(commandWords))
                            }
                            let x_history = JSON.parse(localStorage.getItem("cards"));
                            x_history.push(x);
                            localStorage.setItem("cards", JSON.stringify(x_history));
                            window.open(x.url);
                            break;

                            case "/y":
                            let y = {
                                title: "y",
                                text: txt.value,
                                url: ("https://www.youtube.com/results?search_query=" + createSearchString(commandWords))
                            }
                            let y_History = JSON.parse(localStorage.getItem("cards"));
                            y_History.push(y);
                            localStorage.setItem("cards", JSON.stringify(y_History));
                            window.open(y.url);
                            break;nt
        default:
            console.log(command);
            window.alert("Invalid commmand");
            break;
    }
     txt.value = "";
     loadHistory();
}
const go = (url) =>{
window.open(url);
}
const loadHistory = () => {
    
    let cards = JSON.parse(localStorage.getItem("cards"));
    let columns = document.getElementsByClassName("card")
    for (let index = 0; index < cards.length; index++) {
        let btn = document.createElement("button");
    let text = document.createElement("span");
    text.style.color = "white";
    btn.textContent = "GO!";
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    let title = document.createElement("h2");
    title.style.color = "white";
        let card = document.createElement("div");
    title.textContent = cards[index].title;
    text.textContent = cards[index].text;
        switch(cards[index].title){
            case "y":
                card.style.backgroundColor = "red";
                btn.style.backgroundColor = "black";
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
            card.style.backgroundColor = "cyan"
                break;
                
        }
        btn.addEventListener("click",go(cards[index].url));
        card.append(title);
        card.append(text)
        card.append(btn);
        columns[index].append(card);
    }
}
window.addEventListener("load", initialize);