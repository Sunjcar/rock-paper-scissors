//Outputs random: "Rock", "Paper", or "Scissors"
function computerPlay()
{
  
return choices[Math.floor(Math.random()*choices.length)];
     
}

let choices = ["Rock", "Paper", "Scissors"];
console.log(computerPlay(choices));