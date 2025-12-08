let cScore = 0;
let pScore = 0;
let hasChosen = false;
let gameOver = false;

const playButton = document.getElementById('playButton');
const againButton = document.getElementById('reset');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const resultsText = document.getElementById('resultsText');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winner = document.getElementById('winner');

rockButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Rock`;
    resultsText.textContent = `You chose rock!`;
    hasChosen = true;
  }
});

paperButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Paper`;
    resultsText.textContent = `You chose paper!`;
    hasChosen = true;
  }
});

scissorsButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Scissors`;
    resultsText.textContent = `You chose scissors!`;
    hasChosen = true;
  }
});

againButton.addEventListener('click', () => {
  gameOver = false;
  hasChosen = false;
  resultsText.textContent = `Select an option and press play round to begin`;
  computerChoice.textContent = ``;
  winner.textContent = ``;
  playerChoice.textContent = ``;
  pScore = 0;
  cScore = 0;
  playerScore.textContent = `${pScore}`;
  computerScore.textContent = `${cScore}`;
});

playButton.addEventListener('click', () => {
  if (!hasChosen && !gameOver) {
    resultsText.textContent = `You must select an option`;
    return;
  } else {
    playRound();
  }
});

const playRound = () => {
  if (rounds == 5) {
    gameOver = true;
    winner.textContent = `GAME OVER: Press play again!`;
    return;
  } else if (!hasChosen) {
    resultsText.textContent = `You must select option to play`;
    return;
  }

  compChoice();
  hasChosen = false;

  if (computerChoice.textContent == playerChoice.textContent) {
    resultsText.textContent = `Tie!`;
  } else if (
    computerChoice.textContent == `Rock` &&
    playerChoice.textContent == 'Paper'
  ) {
    resultsText.textContent = `Paper beats Rock, you win!`;
    pScore++;
    playerScore.textContent = `${pScore}`;
  } else if (
    computerChoice.textContent == `Rock` &&
    playerChoice.textContent == `Scissors`
  ) {
    resultsText.textContent = `Rock beats Scissors, you lose!`;
    cScore++;
    computerScore.textContent = `${cScore}`;
  } else if (
    computerChoice.textContent == `Paper` &&
    playerChoice.textContent == `Rock`
  ) {
    resultsText.textContent = `Paper beats Rock, you lose!`;
    cScore++;
    computerScore.textContent = `${cScore}`;
  } else if (
    computerChoice.textContent == `Paper` &&
    playerChoice.textContent == `Scissors`
  ) {
    resultsText.textContent = `Scissors beats Paper, you win!`;
    pScore++;
    playerScore.textContent = `${pScore}`;
  } else if (
    computerChoice.textContent == `Scissors` &&
    playerChoice.textContent == `Rock`
  ) {
    resultsText.textContent = `Rock beats Scissors, you win!`;
    pScore++;
    playerScore.textContent = `${pScore}`;
  } else if (
    computerChoice.textContent == `Scissors` &&
    playerChoice.textContent == `Paper`
  ) {
    resultsText.textContent = `Scissors beats Paper, you lose!`;
    cScore++;
    computerScore.textContent = `${cScore}`;
  }
};

const compChoice = (choice) => {
  choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      choice = 'Rock';
      break;
    case 2:
      choice = 'Paper';
      break;
    case 3:
      choice = 'Scissors';
      break;
  }
  computerChoice.textContent = `${choice}`;
  return choice;
};
