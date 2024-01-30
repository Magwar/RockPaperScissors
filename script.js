function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
console.log("Computer's choice is:", getComputerChoice());

// function playRound(playerSelection, computerSelection){
//     const playerChoice = playerSelection.toLowerCase();

//     if (playerSelection === computerSelection.toLowerCase()){
//         return "It's a tie "+ playerSelection + " Is equal to " + computerSelection;
//     }else if(
//         (playerChoice === "rock" && computerSelection === "scissors") ||
//         (playerChoice === "paper" && computerSelection === "rock") ||
//         (playerChoice === "scissors" && computerSelection === "paper")
//     ){
//         return "You are the WINNER! " + playerChoice + "beats " + computerSelection;
//     }else {
//         return "You LOOSE! " + computerSelection + " beats " + playerChoice;
//     }
// }
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));