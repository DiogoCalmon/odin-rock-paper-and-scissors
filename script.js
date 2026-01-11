import {matchAnimation} from"./scripts/matchLogic.js"

const chooses = document.querySelector("#chooses");
const audio = document.querySelector("audio");
audio.volume = 0.8;

let chooseOfPlayer;
let chooseOfMachine;

let heartsPlayer = 5;
let heartsComputer = 5;



chooses.addEventListener("click", e => {
    const audioClicked = new Audio("./music/selectedButton.mp3");
    audioClicked.volume = 1;
    audioClicked.play();
    console.log(e.target.alt);

    chooseOfPlayer = e.target.alt;
    chooseOfMachine = Math.floor(Math.random() * 3) + 1;

    switch (chooseOfMachine){
        case 1:
            chooseOfMachine = "rock";
            break;
        case 2:
            chooseOfMachine = "paper";
            break;
        case 3:
            chooseOfMachine = "scissor";
            break;
        default:
            console.log("Choose a valid value");
            break;
    }

    let currentWinner = await matchAnimation(chooseOfPlayer, chooseOfMachine);
    console.log("winner of match: "+currentWinner)

    if (currentWinner === "player"){
        heartsComputer--;
    } else if (currentWinner === "computer"){
        heartsPlayer--;
    }

    const winner = document.querySelector("#winner");

    if (heartsPlayer <= 0){
        const text = document.createElement("h1");
        winner.appendChild(text);
        text.textContent = "PLAYER WIN!!!";
    }

    if (heartsComputer <= 0){
        const text = document.createElement("h1");
        winner.appendChild(text);
        text.textContent = "COMPUTER WIN!!!";
    }
})

chooses.addEventListener("mouseover", e => {
    const audioHover = new Audio("./music/hoverAudio.mp3");
    audioHover.volume = 1;

    switch(e.target.alt){
        case "rock":
            audioHover.play();
            break;
        case "paper":
            audioHover.play();
            break;
        case "scissor":
            audioHover.play();
            break;
        default:
            break;
    }
        
    })

