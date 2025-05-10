
const intitialize = () =>{
    if(localStorage.getItem("History") == null){
        localStorage.setItem("History",JSON.stringify([]))
    }
let btn = document.getElementById("btn")
    btn.addEventListener("click", parseCommand)
    loadHistory();
}
const parseCommand = () =>{
    let CommandWords = document.getElementById("commands").value.split(" ");
    console.log(CommandWords);
    let search = {
        command: CommandWords[0],
        url: "",
        searchTerm: CommandWords[1]
    }
    switch(CommandWords[0]){
        case "/y":
            JSON.url = "https://www.youtube.com/results?search_query=" +CommandWords[1]
            window.open(search.url);
            break;
            case "/g":
                JSON.url = "https://www.google.com/search?q=" + CommandWords[1];
                window.open(search.url);
                break;
                case "/x":
                    JSON.url = "https://x.com/hashtag/" + CommandWords[1]
                    window.open(search.url);
                    break;
                    case "/i":
                        JSON.url = "https://www.instagram.com/explore/tags/" + CommandWords[1]
                        window.open(search.url);
                        break;
                        default:
                            alert("command not found");
                            break;
    }
    let txt = document.getElementById("commands");
    txt.textContent = "";
    let history = JSON.parse(localStorage.getItem("History"));
    history.push(search);
    localStorage.setItem("History",JSON.stringify(history));
}
const go = (event) =>{
    let current = event.target;
    window.open(current.url);
}
const loadHistory = () =>{
    let saves = document.getElementById("saves");
    let history = JSON.parse(localStorage.getItem("History"));
    for(let i = 0; i < history.length; i++){
        let div = document.createElement("div");
        let title = document.createElement("h3");
        title.innerText = history[i].command;
        title.style.color = "white";
        let text = document.createElement("p");
        text.innerText = history[i].searchTerm;
        text.style.color = "white";
        let btn = document.createElement("button");
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
        btn.textContent = "Go!"
        switch(history[i].command){
            case "/y":
                div.style.backgroundColor = "red";
                break;
                case "/g":
                    div.style.backgroundColor = "blue";
                    break;
                    case "/x":
                        div.style.backgroundColor = "slateblue";
                        break;
                        case "/i":
                            div.style.backgroundColor = "purple";
                            break;

        }
        div.url = history[i].url;
        div.appendChild(title);
        div.appendChild(text);
        btn.addEventListener("click", go);
        div.appendChild(btn);
        saves.appendChild(div);
    }
}
window.addEventListener("load", intitialize)