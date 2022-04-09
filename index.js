//Outputs random: "Rock", "Paper", or "Scissors" computer function
function computerPlay(){ 
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random()* 3)].toLowerCase();
}

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors')
const resetBtn = document.getElementById('reset')
//Assigns playerSelection to eventListener, and calls playRound function;
function clickListener(event){
  const playerSelection = event.target.id
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection)
  console.log (computerSelection)
  console.log(updateScore(playerSelection,computerSelection));
  console.log(displayWinner())
  
}
rockBtn.addEventListener('click', clickListener);
paperBtn.addEventListener('click', clickListener);
scissorsBtn.addEventListener('click', clickListener);
resetBtn.addEventListener('click', newGame);

//Play function
    function playRound(playerSelection,computerSelection){
      if( playerSelection === computerSelection ){
        scoreboard.textContent = "It's a draw, try again!"
      }else if ( playerSelection === "scissors" && computerSelection === "paper"){
        scoreboard.textContent = "You Win! Scissors Beats Paper" 
      }else if (playerSelection === "rock" && computerSelection === "scissors"){
        scoreboard.textContent = "You Win! Rock Beats Scissors" 
      }else if (playerSelection === "paper" && computerSelection === "rock") {
        scoreboard.textContent = "You Win! Paper Beats Rock" 
      }else if (playerSelection === "scissors" && computerSelection === "rock"){
        scoreboard.textContent = "You lose! Rock beats Scissors"
      }else if (playerSelection === "paper" && computerSelection === "scissors"){
        scoreboard.textContent = "You lose! Scissors beats Paper"
      }else if (playerSelection === "rock" && computerSelection === "paper"){
        scoreboard.textContent = "You lose! Paper beats Rock" 
      }
    }

  let robotScore = 0
  let humanScore = 0
//Updates scores 
function updateScore(playerSelection,computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors" || 
      playerSelection === "scissors" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "rock"){
        playerscore.textContent = ++humanScore;
  }else if (playerSelection === computerSelection){
  }else computerscore.textContent= ++robotScore;
}

function displayWinner(){
  if (robotScore === 5){
    scoreboard.textContent = "Computer Wins, You SUCK!";
    rockBtn.setAttribute("disabled", 1);
    paperBtn.setAttribute("disabled", 1);
    scissorsBtn.setAttribute("disabled", 1);
  }
  else if (humanScore === 5){
    scoreboard.textContent = "You Win! THE CHAMPION!";
    rockBtn.setAttribute("disabled", 1);
    paperBtn.setAttribute("disabled", 1);
    scissorsBtn.setAttribute("disabled", 1);
  };
};

function newGame() {
  robotScore = 0;
  humanScore = 0;
  playerscore.textContent = humanScore;
  computerscore.textContent = robotScore;
  scoreboard.textContent = '' ;
  rockBtn.removeAttribute('disabled')
  paperBtn.removeAttribute('disabled')
  scissorsBtn.removeAttribute('disabled')
  };
  
 


