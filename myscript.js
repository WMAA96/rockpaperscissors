
// add event lsitener to buttons
const buttons = (document.querySelectorAll(".button"));
    buttons.forEach(button => 
        button.addEventListener("click", playRound));
    
    
//  dom stuff
const container = document.querySelector("#container");
const round = document.createElement("p");
const score = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

score.textContent = "Play a round to start the score";

container.appendChild(round)
container.appendChild(score);






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

function playRound() {
    
    
    let computerSelection = computerPlay();
    playerSelection = this.textContent;
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        round.textContent = "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection ==="paper" ) {
        round.textContent = `You win ${playerSelection} beats ${computerSelection}`;
        playerScore ++;
        score.textContent = `Player score is : ${playerScore} computer score is: ${computerScore}`;
    } else {
        round.textContent = `You lose ${playerSelection} loses to ${computerSelection}`;
        computerScore ++;
        score.textContent = `Player score is : ${playerScore} computer score is: ${computerScore}`;
    }
    
        result();
    

}



function result() {
    if(playerScore >= 5 || computerScore >= 5) {
    buttons.forEach(button => 
        button.removeEventListener('click', playRound))
        let res = (playerScore > computerScore) ? "      Player won" : "        Computer won";
        score.style.cssText = "color: red";
        score.textContent += res;
    }

    
        
    

}


// Plays 5 rounds of RPS

/**function game() {
    let round = 0;

    for (let i = 0; i < 5; i++){
        console.log(playRound(playerPlay(), computerPlay()));
        round ++;
        
    }

}
 

// makes the user select their choice
function playerPlay(e){
    let playerSelection = this.textContent;
    playerSelection = playerSelection.toLowerCase();


    return playRound(playerSelection);
    

} */