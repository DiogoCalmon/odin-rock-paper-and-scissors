let chooseOfPlayer;
let chooseOfMachine;

let scoreOfPlayer = 0;
let scoreOfMachine = 0;

for (let i = 0; i < 5; i++){
    chooseOfPlayer = parseInt(prompt("Digit 1 for choose rock\nDigit 2 for choose paper\nDigit 3 for choose scissor"));
    chooseOfMachine = Math.floor(Math.random() * 3) + 1;

    switch (chooseOfPlayer){
        case 1:
            chooseOfPlayer = "rock";
            break;
        case 2:
            chooseOfPlayer = "paper";
            break;
        case 3:
            chooseOfPlayer = "scissor";
            break;
        default:
            alert("Choose a valid value");
            break;
    }

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
            alert("Choose a valid value");
            break;
    }

    if (chooseOfPlayer == "rock"){
        if (chooseOfMachine == "rock") {
            alert(`Machine choose ${chooseOfMachine}\nDraw`);
        } else if (chooseOfMachine == "paper") {
            alert(`Machine choose ${chooseOfMachine}\nMachine won this match`);
            scoreOfMachine++;
        } else {
            alert(`Machine choose ${chooseOfMachine}\nPlayer won this match`);
            scoreOfPlayer++;
        }
    } else if (chooseOfPlayer == "paper"){
        if (chooseOfMachine == "rock") {
            alert(`Machine choose ${chooseOfMachine}\nPlayer won this match`);
            scoreOfPlayer++;
        } else if (chooseOfMachine == "paper") {
            alert(`Machine choose ${chooseOfMachine}\nDraw`);
        } else {
            alert(`Machine choose ${chooseOfMachine}\nMachine won this match`);
            scoreOfMachine++;
        }
    } else {
        if (chooseOfMachine == "rock") {
            alert(`Machine choose ${chooseOfMachine}\nMachine won this match`);
            scoreOfMachine++;
        } else if (chooseOfMachine == "paper") {
            alert(`Machine choose ${chooseOfMachine}\nPlayer won this match`);
            scoreOfPlayer++;
        } else {
            alert(`Machine choose ${chooseOfMachine}\nDraw`);
        }
    }
}

if (scoreOfPlayer > scoreOfMachine){
    alert("Player won the game!!!")
} else if (scoreOfMachine > scoreOfPlayer){
    alert("Machine won the game")
} else {
    alert("The player and machine has the same score\nDRAW")
}

