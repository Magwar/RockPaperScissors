function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
console.log("Computer's choice is:", getComputerChoice());

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()){
        return "It's a tie "+ playerSelection + " Is equal to " + computerSelection;
    }else if ((playerChoice === "Rock" && computerSelection === "Scissors")){
        return "You WIN! " + playerChoice + "beats " + computerSelection;
    }else if ((playerChoice === "Paper" && computerSelection === "Rock")){
        return "You WIN! " + playerChoice + "beats " + computerSelection;
    }else if ((playerChoice === "Scissors" && computerSelection === "Paper")){
        return "You WIN! " + playerChoice + "beats " + computerSelection;
    }else {
        return "You LOSE! " + computerSelection + " beats " + playerChoice;
    }
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame(){}