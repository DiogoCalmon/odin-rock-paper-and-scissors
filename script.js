// Generates a random choice between rock, paper and scissor

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
        if (computerChoice == "rock") {
            alert(`Machine choose ${computerChoice}\n\nDraw`);
        } else if (computerChoice == "paper") {
            alert(`Machine choose ${computerChoice}\n\nMachine won this match`);
            computerScore++;
        } else {
            alert(`Machine choose ${computerChoice}\n\nPlayer won this match`);
            humanScore++;
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "rock") {
            alert(`Machine choose ${computerChoice}\n\nPlayer won this match`);
            humanScore++;
        } else if (computerChoice == "paper") {
            alert(`Machine choose ${computerChoice}\n\nDraw`);
        } else {
            alert(`Machine choose ${computerChoice}\n\nMachine won this match`);
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            alert(`Machine choose ${computerChoice}\n\nMachine won this match`);
            computerScore++;
        } else if (computerChoice == "paper") {
            alert(`Machine choose ${computerChoice}\n\nPlayer won this match`);
            humanScore++;
        } else {
            alert(`Machine choose ${computerChoice}\n\nDraw`);
        }
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore){
        alert("Human won the game!!!");
    } else if (humanScore < computerScore){
        alert("Computer won the game :(");
    } else {
        alert("Human and computer has the same score\n\n It's a DRAW!!!");
    }
}

playGame()