// SET initial score
let humanScore = 0;
let computerScore = 0;

// SET function computer choice logic
function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2) + 1;
  switch (computerChoice) {
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
  const humanChoice = prompt(
    "Welcome to Rock, paper & scissors\nType your choice...",
  );
  return humanChoice;
}
