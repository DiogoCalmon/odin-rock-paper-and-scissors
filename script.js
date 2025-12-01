function getComputerChoice(){
    // other alternative

    // const chooses = ["rock", "paper", "scissors"];
    // const index = Math.random() * 3;

    // return chooses[index];

    // But i will follow with the code below

    let number = Math.floor(Math.random() * 3) + 1;

    switch (number){
        case 1:
            number = "rock";
            break;
        case 2:
            number = "paper";
            break;
        case 3:
            number = "scissors";
            break;
        default:
            console.error("Error in variable number");
            break;
    }

    return number;
}

function getHumanChoice(){
    let response = parseInt(prompt("Choose:\n\n1. rock\n2. paper\n3. scissors\n\nPlease, use the numbers that follow the options"));

    switch (response){
        case 1:
            response = "rock";
            break;
        case 2:
            response = "paper";
            break;
        case 3:
            response = "scissors";
            break;
        default:
            console.error("Error in variable number");
            alert("Choose a valid number");
            break;
    }

    return response;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        
    }
}