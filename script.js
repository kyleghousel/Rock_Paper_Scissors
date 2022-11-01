/*
Create getComputerChoice() function that returns 'rock' 'paper' or 'scissors'
    a. Program will randomly select string from an array
*/
const rps = ['rock', 'paper', 'scissors'];
let playerTotal = 0;
let playerScore = document.getElementById('humanScore');
let computerTotal = 0; 
let computerScore = document.getElementById('computerScore');
let drawResult = document.getElementById('drawResult');

function getComputerChoice() {
    let rando = Math.floor(Math.random() * rps.length);
    return rps[rando];
}


/*
Create playRound() function that plays round of RPS
    a. Function should have two parameters: playerSelection computerSelection
    b. return string that declares winner
    c. make playerSelection parameter case insensitive */

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if ((playerSelection === 'rock' & computerSelection === 'scissors') || (playerSelection === 'scissors' & computerSelection === 'paper') || (playerSelection === 'paper' & computerSelection === 'rock')){
        
        playerScore.textContent = (playerTotal +=1);
        drawResult.textContent = '';
        checkScore();
        
    }
    else if (playerSelection === getComputerChoice()) {
        
        drawResult.textContent = `Draw! Try again.`
        checkScore();
    }
    else if ((computerSelection === 'rock' & playerSelection === 'scissors') || (computerSelection === 'scissors' & playerSelection === 'paper') || (computerSelection === 'paper' & playerSelection === 'rock')) {
        
        computerScore.textContent = (computerTotal +=1);
        drawResult.textContent = '';
        checkScore();
    }

}


function checkScore() {

    if (playerTotal == 5) {
            drawResult.style.color = 'green';
            drawResult.textContent = (`You won!`);
            gameOver();
        }
    else if (computerTotal == 5) {
            drawResult.textContent = (`Defeat.`);
            gameOver();
        }            
    
    
    }
    




const btnRock = document.getElementById('btn1');
const btnPaper = document.getElementById('btn2');
const btnScissors = document.getElementById('btn3');
btnRock.addEventListener('click', () => {
    clickRock();
});
btnPaper.addEventListener('click', () => {
    clickPaper();
}); 
btnScissors.addEventListener('click', () => {
    clickScissors();
});  

function clickRock() {
    playRound('rock', getComputerChoice());
    /*console.log('Player:',playerTotal);
    console.log('Computer:',computerTotal);*/
}

function clickPaper() {
    playRound('paper', getComputerChoice());
    /*console.log('Player:',playerTotal);
    console.log('Computer:',computerTotal);*/
}

function clickScissors() {
    playRound('scissors', getComputerChoice());
    /*console.log('Player:',playerTotal);
    console.log('Computer:',computerTotal);*/
}

function gameOver() {
    playerTotal = 0;
    computerTotal = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}