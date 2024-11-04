'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const button = document.querySelector('.start');
const score = document.querySelector('.game-score');
const messageLose = document.querySelector('.message-lose');
const messageWin = document.querySelector('.message-win');
const messageStart = document.querySelector('.message-start');

function initialize() {
  button.addEventListener('click', () => {
    if (button.classList.contains('start')) {
      button.className = 'button restart';
      button.textContent = 'Restart';

      messageStart.classList.add('hidden');

      game.start();
    } else {
      button.className = 'button start';
      button.textContent = 'Start';

      messageStart.classList.remove('hidden');
      messageWin.classList.add('hidden');
      messageLose.classList.add('hidden');

      document.removeEventListener('keydown', handleKeyDown);

      game.restart();
    }

    document.addEventListener('keydown', handleKeyDown);
  });
}

initialize();

function handleKeyDown(keyEvent) {
  keyEvent.preventDefault();

  let didTilesMove = false;

  switch (keyEvent.key) {
    case 'ArrowUp':
      didTilesMove = game.moveUp();
      break;

    case 'ArrowDown':
      didTilesMove = game.moveDown();
      break;

    case 'ArrowRight':
      didTilesMove = game.moveRight();
      break;

    case 'ArrowLeft':
      didTilesMove = game.moveLeft();
      break;
  }

  if (didTilesMove) {
    updateScore(game.getScore());

    const currentGameStatus = game.getStatus();

    if (currentGameStatus === Game.Status.lose) {
      handleLostGame();
    } else if (currentGameStatus === Game.Status.win) {
      handleWonGame();
    }
  }
}

function handleLostGame() {
  messageLose.classList.remove('hidden');
}

function handleWonGame() {
  messageWin.classList.remove('hidden');
}

function updateScore(newScore) {
  score.textContent = newScore;
}
