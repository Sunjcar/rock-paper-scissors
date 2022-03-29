//Outputs random: "Rock", "Paper", or "Scissors"
function computerPlay()
{ 
return choices[Math.floor(Math.random()* 3)]
}

const choices = ["rock", "paper", "scissors"];
//prompt("rock paper or scissors");
let userInput = prompt("Rock Paper or Scissors?").toLowerCase();

//Play function
function playRound(playerSelection,computerSelection){
    if( playerSelection == computerSelection ){
        return "It's a draw, try again!"
      }else if ( playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! SlayerSelectioncissors Beats Paper"
      }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock Beats Paper"
      }else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper Beats Rock"
      }else ("You Lose!");

}



console.log(playRound())    

  const playerSelection = userInput;
  const computerSelection = computerPlay();
  console.log(computerSelection)
  console.log(playerSelection)
  


  