const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    
    return choices[Math.floor( Math.random() * choices.length)];
}

function PlayRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return("Tie");
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return("Paper covers rock! You Lose!");
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return("Rock break Scissors! You win!");
    }else if(playerSelection === 'paper' && computerSelection === 'cissors'){
        return("Scissors cut Paper! You Lose!");
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return("Paper covers rock! You win!");
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return("Rock break Scissors! You lose!");
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return("Scissors cut Paper! You win!");
    }
}

function game(){
    for (let i = 0; i <5; i++){
        let playerSelection = prompt('rock, paper, or scissors?');
        while (validateInput(playerSelection)){    
            playerSelection = prompt('Please enter a valid choice(rock, paper, or scissors)');
        }
        const computerSelection = getComputerChoice();
        console.log(PlayRound(playerSelection,computerSelection));
    }
}

function validateInput(playerSelection){
    return playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper'&& playerSelection.toLowerCase() != 'scissors';
}

game();