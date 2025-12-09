const againButton = document.querySelector('#reset');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const ruleText = document.querySelector('#rules');
const computerChoice = document.querySelector('.computerChoice');
const playerChoice = document.querySelector('.playerChoice');
const resultsText = document.getElementById('resultsText');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winner = document.getElementById('winner');

let cScore = 0;
let pScore = 0;
let gameOver = false;

let rules = {
  Rock: 'Scissors',
  Paper: 'Rock',
  Scissors: 'Paper',
};

rockButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Rock`;
    playRound();
  }
});

paperButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Paper`;
    playRound();
  }
});

scissorsButton.addEventListener('click', () => {
  if (!gameOver) {
    playerChoice.textContent = `Scissors`;
    playRound();
  }
});

againButton.addEventListener('click', () => {
  gameOver = false;
  resultsText.textContent = `Select an option to begin`;
  computerChoice.textContent = ``;
  playerChoice.textContent = ``;
  pScore = 0;
  cScore = 0;
  playerScore.textContent = `${pScore}`;
  computerScore.textContent = `${cScore}`;
  againButton.classList.add('hide');
  ruleText.classList.remove('hide');
});

const hideElem = () => {
  resultsText.textContent = ``;
};

const playRound = () => {
  compChoice();

  const comp = computerChoice.textContent;
  const player = playerChoice.textContent;

  if (comp === player) {
    resultsText.textContent = 'TIE!';
  } else if (rules[player] === comp) {
    resultsText.textContent = `${player} beats ${comp}!`;
    pScore++;
    playerScore.textContent = pScore;
  } else {
    resultsText.textContent = `${comp} beats ${player}!`;
    cScore++;
    computerScore.textContent = cScore;
  }

  checkRound();
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
};

const checkRound = () => {
  if (pScore == 5) {
    resultsText.textContent = `YOU WIN!`;
    gameOver = true;
    againButton.classList.remove('hide');
    ruleText.classList.add('hide');
  }

  if (cScore == 5) {
    resultsText.textContent = `YOU LOSE!`;
    gameOver = true;
    againButton.classList.remove('hide');
    ruleText.classList.add('hide');
  }
};
