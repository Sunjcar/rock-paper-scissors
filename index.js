//Outputs random: "Rock", "Paper", or "Scissors" computer function
function computerPlay(){ 
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random()* 3)].toLowerCase();
}
console.log(computerPlay())

//prompt("rock paper or scissors"); User Function


let btnChoice = document.querySelectorAll('button');
let rockText = document.getElementById('rock').textContent;
let paperText = document.getElementById('paper').textContent;
let scissorsText = document.getElementById('scissors').textContent;
 

btnChoice.forEach(button => button.addEventListener('click', () =>{
  let playerSelection = button.textContent.toLowerCase(); 
  console.log(playerSelection)
}));


//Play function

  let computerScore = 0
  let humanScore = 0
  //let outcome = playRound(playerSelection,computerSelection)
    function playRound(playerSelection,computerSelection){
     computerSelection = computerPlay();
     playerSelection 
      if( playerSelection == computerSelection ){
        return "It's a draw, try again!"
      }else if ( playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors Beats Paper" 
      }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock Beats Scissors" 
      }else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper Beats Rock" 
      }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors"
      }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats Paper"
      }else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock" 
      }
    }
 console.log(playRound(playerSelection,computerSelection))
   


/*
function game() {
  for (let i = 0; i < 5; i++) {
      computerSelection = computerPlay();
      playerSelection = userInput();
      let result = playRound(playerSelection, computerSelection);
      if (result == "You Win! Scissors Beats Paper" || result == "You Win! Paper Beats Rock" || result == "You Win! Rock Beats Scissors"  ){
      humanScore++;
      console.log('Player: ' + humanScore)
      console.log('Computer: ' + computerScore)
      console.log("Computer chose" + computerSelection)
      console.log("You win this round!")
     } else if ( result == "You lose! Rock beats Scissors"|| result == "You lose! Scissors beats Paper" || result == "You lose! Paper beats Rock" ){
       computerScore++
       console.log('Player: ' + humanScore)
       console.log('Computer: ' + computerScore)
       console.log("Computer chose" + computerSelection)
       console.log("Computer wins this round!")
     } else if (result == "It's a draw, try again!"){
      console.log("This round is a draw!")
     }else{
       console.log("only choose rock paper or scissors")
       i--;
     }
  
} 
}

//Function to display at the end of the game
function displayWinner() {
  if (humanScore > computerScore) {
      return 'You beat the computer!';
  }   else if (computerScore > humanScore) {
          return 'You lost to the computer!';
  }   else if (huamnScore === computerScore) {
          return 'It\'s a tie!'
  }
}
console.log(game());
console.log('Final Score!')
console.log('Player: ' + humanScore);
console.log('Computer: ' + computerScore);
console.log(displayWinner)
*/