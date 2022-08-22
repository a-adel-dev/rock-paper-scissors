const choices = ['rock', 'paper', 'scissors'];
const statusText = document.querySelector('.status-text');
const playerScoreSpan = document.querySelectorAll("#score-player");
const compScoreSpan = document.querySelectorAll("#score-comp");
const buttons = document.querySelectorAll('.choice');
const playAgainButton = document.querySelector('.play-again');

let playerScore = 0 ;
let compScore = 0;


function getComputerChoice(){
    return choices[Math.floor( Math.random() * choices.length)];
}

function PlayRound(playerSelection){
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
        statusText.textContent = "Tie";
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        statusText.textContent = ("Paper covers rock! You Lose!");
        UpdateScore(false);
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        statusText.textContent = "Rock break Scissors! You win!";
        UpdateScore(true);
    }else if(playerSelection === 'paper' && computerSelection === 'cissors'){
        statusText.textContent = "Scissors cut Paper! You Lose!";
        UpdateScore(false);
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        statusText.textContent = "Paper covers rock! You win!";
        UpdateScore(true);
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        statusText.textContent = "Rock break Scissors! You lose!";
        UpdateScore(false);
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        statusText.textContent = "Scissors cut Paper! You win!";
        UpdateScore(true);
    }
}

function game(){
    for (let i = 0; i <5; i++){
        let playerSelection = prompt('rock, paper, or scissors?');
        while (validateInput(playerSelection)){    
            playerSelection = prompt('Please enter a valid choice(rock, paper, or scissors)');
        }
    }
}


// game();


// console.log(statusText);

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e)=> {
        let playerChoice = e.target.id;
        PlayRound(playerChoice);
    });
});

function UpdateScore(win) {
    
    if(win) {
        ++playerScore;
        RefreshPlayerScore();
        
    }else {
        ++compScore;
        RefreshCompScore();
    }

    if (playerScore >= 5) {
        statusText.textContent = "You win!";
        DisableButtons();
        ShowPlayAgain();
    }else if (compScore >=5) {
        statusText.textContent = "You Lose!";
        DisableButtons();
        ShowPlayAgain();
    }
    // console.log(`playerScore: ${playerScore} | compScore: ${compScore}`);
}

console.log(playAgainButton);

function DisableButtons() {
    buttons.forEach((btn)=>{
        btn.disabled = true;
        btn.classList.toggle('disabled');
    })
}

function EnableButtons() {
        buttons.forEach((btn)=>{
        btn.disabled = false;
        btn.classList.toggle('disabled');
    });
}

function ShowPlayAgain(){
    playAgainButton.classList.toggle('hidden');
}

playAgainButton.addEventListener('click', ResetGame);

function ResetGame(){
    playerScore = 0;
    compScore = 0;
    RefreshCompScore();
    RefreshPlayerScore();
    EnableButtons();
    statusText.textContent = "choose an option!";
    playAgainButton.classList.toggle('hidden');

}

function RefreshPlayerScore(){
    playerScoreSpan.forEach((x)=>{
            x.textContent = playerScore;
        });
}

function RefreshCompScore(){
    compScoreSpan.forEach((x)=>{
            x.textContent = compScore;
        });
}
