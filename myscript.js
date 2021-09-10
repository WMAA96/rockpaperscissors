
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
    
    

    if(playerSelection === computerSelection){
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection ==="paper" ) {
        return "You win " + playerSelection + " beats " + computerSelection; ;
    } else {
        return "You lose " + playerSelection + " loses to " + computerSelection;
    }

}



// Plays 5 rounds of RPS

function game() {
    let round = 0;

    for (let i = 0; i < 5; i++){
        console.log(playRound(playerPlay(), computerPlay()));
        round ++;
        
    }

}

// makes the user select their choice
function playerPlay(){
    playerSelection = window.prompt("choose Rock/Paper/Scissors");
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
        case "scissors":
        case "paper":
            return playerSelection;

    }
    
    alert("please pick a valid option");
    playerPlay();
    
    return playerSelection;
    

}