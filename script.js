function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
// console.log("Computer's choice is:", getComputerChoice());

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice){
        return "It's a tie, Both chose "+ playerChoice;
    }else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        return "You WIN! " + playerChoice + " beats " + computerChoice;
    }
    else{
        return "You LOSE! " + computerChoice + " beats " + playerChoice;
    }
}
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// const result = playRound(playerSelection, computerSelection);
// console.log(result)

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (rock, paper, or scissors):`);
        const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

        console.log(`Computer chooses: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win the game with a score of ${playerScore}-${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game with a score of ${playerScore}-${computerScore}.`);
    } else {
        console.log(`The game is a tie with a score of ${playerScore}-${computerScore}.`);
    }
}
// playGame();