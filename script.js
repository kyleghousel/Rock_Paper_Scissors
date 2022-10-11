/*
1. Create getComputerChoice() function that returns 'rock' 'paper' or 'scissors'
    a. Program will randomly select string from an array
*/
const rps = ['rock', 'paper', 'scissors'];
const rando = Math.floor(Math.random() * rps.length);

function getComputerChoice() {
    return rps[rando];
}


/*
2. Create playRound() function that plays round of RPS
    a. Function should have two parameters: playerSelection computerSelection
    b. return string that declares winner
    c. make playerSelection parameter case insensitive */

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === 'rock' & getComputerChoice() === 'scissors' || playerSelection === 'scissors' & getComputerChoice() === 'paper' || playerSelection === 'paper' & getComputerChoice() === 'rock'){
        return alert('You win!');
    }
    else if (playerSelection === getComputerChoice()) {
        return alert('Draw!');
    }
    else {
        return alert('You lose!');
    }
    
}

/*
3. Create game() function that calls playRound() inside of it
    a. Accomodate a 5 round game **for loop**
    b. use prompt() for user input 
*/



/*
4. Score tracker function to keep score best of 5.
    a. Keep tally of user vs computer
    b. Once a player reaches 3 wins, they are the winner, break loop
*/