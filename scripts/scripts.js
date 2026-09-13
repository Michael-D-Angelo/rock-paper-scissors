// SET initial score
let humanScore = 0;
let computerScore = 0;

// SET function computer choice logic
function getComputerChoice() {
  let computer = Math.round(Math.random() * 2) + 1;
  switch (computer) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// SET function human choice logic
function getHumanChoice() {
  const human = prompt("Welcome to Rock, paper & scissors\nType your choice...")
    .toLowerCase()
    .trim();
  if (human == "rock" || human == "paper" || human == "scissors") {
    return human;
  } else {
    alert("Invalid input!");
  }
}

// SET function for single play
function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (
    (humanSelection == "rock" && computerSelection == "rock") ||
    (humanSelection == "paper" && computerSelection == "paper") ||
    (humanSelection == "scissors" && computerSelection == "scissors")
  ) {
    return console.log(
      `It's a Tie!\nPlayer: ${humanSelection}\nComputer: ${computerSelection} `,
    );
  } else if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissors" && computerSelection == "paper")
  ) {
    return console.log(
      `Player wins!\nPlayer: ${humanSelection}\nComputer: ${computerSelection}`,
    );
  } else {
    return console.log(
      `Computer wins !\nPlayer: ${humanSelection}\nComputer: ${computerSelection}`,
    );
  }
}
