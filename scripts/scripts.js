// SET initial score
let humanScore = 0;
let computerScore = 0;

// capture score element
let humanScoreElement = document.querySelector(".scoreNumHuman");
let comScoreElement = document.querySelector(".scoreNumCom");

let winAnnounce = document.querySelector(".winAnnounce");

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

function winAnnouncer() {
  if (computerScore == 5) {
    winAnnounce.innerHTML = `<h1>Computer Wins this Round!</h1>`;
  } else if (humanScore == 5) {
    winAnnounce.innerHTML = `<h1>Player Wins this Round!</h1>`;
  }
}

function changeScore() {
  humanScoreElement.textContent = `${humanScore}`;
  comScoreElement.textContent = `${computerScore}`;
}

// SET function for single play
function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (
    (humanSelection == "rock" && computerSelection == "rock") ||
    (humanSelection == "paper" && computerSelection == "paper") ||
    (humanSelection == "scissors" && computerSelection == "scissors")
  ) {
    changeScore();
    winAnnounce.innerHTML = `It's a Tie! <br />Player: <b>${humanSelection}</b><br />Computer: <b>${computerSelection}</b>`;
    winAnnouncer();
    // return console.log(
    //   `It's a Tie!\nPlayer: ${humanSelection}\nComputer: ${computerSelection} `,
    // );
  } else if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissors" && computerSelection == "paper")
  ) {
    humanScore++;
    changeScore();
    winAnnounce.innerHTML = `Player Wins! <br />Player: <b>${humanSelection}</b><br />Computer: <b>${computerSelection}</b>`;
    winAnnouncer();
    // return console.log(
    //   `Player Wins!\nPlayer: ${humanSelection}\nComputer: ${computerSelection}`,
    // );
  } else {
    computerScore++;
    changeScore();
    winAnnounce.innerHTML = `Compuer Wins! <br />Player: <b>${humanSelection}</b><br />Computer: <b>${computerSelection}</b>`;
    winAnnouncer();
    // return console.log(
    //   `Computer Wins !\nPlayer: ${humanSelection}\nComputer: ${computerSelection}`,
    // );
  }
}

function playGameButtonPlay() {
  const idSelector = document.getElementById("btn1");
  const classSelector = document.getElementsByClassName("btn2")[0];
  const tagSelector = document.getElementsByTagName("button")[2];
  // Fn to call playGame fn
  classSelector.addEventListener("click", () => {
    playGame();
  });
  idSelector.addEventListener("click", () => {
    playGame();
  });
  tagSelector.addEventListener("click", () => {
    playGame();
  });
}

playGameButtonPlay();
