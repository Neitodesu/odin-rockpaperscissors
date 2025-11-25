let cScore = 0;
let pScore = 0;
let choice;
let rounds = 0;
let hasChosen = false;

const playButton = document.getElementById('playButton');
const againButton = document.getElementById('againButton');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const resultsText = document.getElementById('resultsText');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const roundInfo = document.getElementById('roundInfo');

rockButton.addEventListener('click', () => {
  if (rounds === 5) {
    playerChoice.textContent = ``;
    computerChoice.textContent = ``;
    resultsText.textContent = `GAME OVER: Press play again!`;
    return;
  }
  playerChoice.textContent = `Rock`;
  resultsText.textContent = `You chose rock!`;
  hasChosen = true;
});

paperButton.addEventListener('click', () => {
  if (rounds === 5) {
    playerChoice.textContent = ``;
    computerChoice.textContent = ``;
    resultsText.textContent = `GAME OVER: Press play again!`;
    return;
  }
  playerChoice.textContent = `Paper`;
  resultsText.textContent = `You chose paper!`;
  hasChosen = true;
});

scissorsButton.addEventListener('click', () => {
  if (rounds == 5) {
    roundInfo.textContent = `5`;
    playerChoice.textContent = ``;
    computerChoice.textContent = ``;
    resultsText.textContent = `GAME OVER: Press play again!`;
    return;
  }
  playerChoice.textContent = `Scissors`;
  resultsText.textContent = `You chose scissors!`;
  hasChosen = true;
});

againButton.addEventListener('click', () => {
  rounds = 0;
  hasChosen = false;
  resultsText.textContent = `Select an option and press play round to begin`;
  computerChoice.textContent = ``;
  playerChoice.textContent = ``;
  pScore = 0;
  cScore = 0;
  rounds = 0;
  playerScore.textContent = `${pScore}`;
  computerScore.textContent = `${cScore}`;
  roundInfo.textContent = `${rounds}`;
});

playButton.addEventListener('click', () => {
  if (rounds == 5) {
    resultsText.textContent = `GAME OVER: Press play again!`;
    return;
  } else if (!hasChosen) {
    resultsText.textContent = `You must select option to play`;
    return;
  }
  compChoice();
  playRound();
  rounds++;
  roundInfo.textContent = `${rounds}`;
});

const playRound = () => {
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

  hasChosen = false;
};

const compChoice = () => {
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
    default:
      choice = 'Please Select Option';
  }
  computerChoice.textContent = `${choice}`;
  return choice;
};
