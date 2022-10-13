/*
1. Create getComputerChoice() function that returns 'rock' 'paper' or 'scissors'
    a. Program will randomly select string from an array
*/
const rps = ['rock', 'paper', 'scissors'];
let playerTotal = 0;
let computerTotal = 0; 

function getComputerChoice() {
    let rando = Math.floor(Math.random() * rps.length);
    return rps[rando];
}


/*
2. Create playRound() function that plays round of RPS
    a. Function should have two parameters: playerSelection computerSelection
    b. return string that declares winner
    c. make playerSelection parameter case insensitive */

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if ((playerSelection == 'rock' & computerSelection == 'scissors') || (playerSelection === 'scissors' & computerSelection === 'paper') || (playerSelection === 'paper' & computerSelection === 'rock')){
        playerTotal +=1;
        return console.log(`${playerSelection} beats ${computerSelection}.`);
    }
    else if (playerSelection == getComputerChoice()) {
        
        return console.log(`Damn, what? You both went with ${playerSelection}? Really?`);
    }
    else {
        computerTotal +=1;
        
        return console.log(`${computerSelection} beats ${playerSelection}.`);
    }
    
}

/*
3. Create game() function that calls playRound() inside of it
    a. Accomodate a 5 round game **for loop**
    b. use prompt() for user input 
*/

function game() {
    
    for (let i=0; i < 5; i++) {
        let shoot = prompt('Rock - Paper - Scissors - SHOOT!').toLowerCase();
        playerSelection = shoot;
        playRound(playerSelection, getComputerChoice());
        
       
      
    }
     console.log(`Player Score:${playerTotal}\nComputer Score ${computerTotal}`);
    if (i=5 && playerTotal > computerTotal) {
            console.log(`You win. You are an inspiration to us all.`);
        }
    else if (i=5 && computerTotal > playerTotal) {
            console.log(`You lose. You suck.`);
        }
    else if (i=5) {
            console.log(`No one won. It's a tie? What the hell guys?`)
        }
    console.log(`Player wins:${playerTotal}\nComputer wins:${computerTotal}`)
}
/*
4. Score tracker function to keep score best of 5.
    a. Keep tally of user vs computer
    b. Once a player reaches 3 wins, they are the winner, break loop
*/

