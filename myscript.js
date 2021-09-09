
// Returns computers choice of R/P/S
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random)
    {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}


// Plays a round of R/P/S

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection, computerSelection);

    if(playerSelection === computerSelection){
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection ==="paper" ) {
        return "You win " + playerSelection + " beats " + computerSelection; ;
    } else {
        return "You lose " + playerSelection + " loses to " + computerSelection;
    }

}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));