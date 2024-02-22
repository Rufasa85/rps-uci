let keepPlaying = true;
const stats = {
    results:{
        wins:0,
        losses:0,
        ties:0,
    },
    choices:{
        rock:0,
        paper:0,
        scissors:0
    }
}
function playGame() {
    //capture user choice
    //prompt user for choice
    //save to a variable
    // EDGE CASE: what if user changes the casing of the letter?
  const userChoice = prompt("Make your selection (R,P,S)!").toUpperCase();
  //EDGE CASE: what if user picks entirely different letter?
  if(userChoice!=="R" && userChoice!=="S" &&userChoice!=="P"){
    alert("please select a valid choice!")
    return;
  }
  // update our selection stats
  if(userChoice==="R"){
    stats.choices.rock++;
  } else if(userChoice==="P"){
    stats.choices.paper++;
  } else {
    stats.choices.scissors++;
  }

  //generate random computer choice
  //randomly generate r,p, or s;
  const possibleChoices = ["R", "P", "S"];
  const randomNum = Math.random(); //0-0.999999
  const times3 = randomNum * possibleChoices.length; //0-2.99999999
  const roundDown = Math.floor(times3); //0,1, or 2
  //save to a variable
  const compChoice = possibleChoices[roundDown]; //"R","P", or "S"
  alert(`Computer chose ${compChoice}`);
  //same but one lined
  // const compChoice= possibleChoices[Math.floor(Math.random()*possibleChoices.length)]

  // compare user choice to computer choice and determine a winner
  // rock beats scissors, scissors beats paper, paper beats rock.
  // update win/loss/tie
  if (userChoice === compChoice) {
    alert("You Tied!");
    stats.results.ties++;
  } else if (
    (userChoice === "R" && compChoice === "S") ||
    (userChoice === "S" && compChoice === "P") ||
    (userChoice == "P" && compChoice === "R")
  ) {
    alert("You Win!");
    stats.results.wins++;
  } else {
    alert("You Lose!");
    stats.results.losses++;
  }
}

//keep playing until user says to quit
while (keepPlaying) {
    playGame()
    keepPlaying = confirm("Do you want to keep going?")
}

// display stats
alert(`Stats:
results:
    wins: ${stats.results.wins}
    losses: ${stats.results.losses}
    ties: ${stats.results.ties}
=============================
choices:
    rock: ${stats.choices.rock}
    paper: ${stats.choices.paper}
    scissors: ${stats.choices.scissors}
`);