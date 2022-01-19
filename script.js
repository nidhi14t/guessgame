'use strict';

const secretNumberFunc = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const setMessageFunc = function (classNameVal, message) {
  document.querySelector(`.${classNameVal}`).textContent = message;
};

let secretNumber = secretNumberFunc();

let score = 20;
let highscore = 0;
let initialMessage = 'Start guessing...';
let initialNumber = '?';

setMessageFunc('message', initialMessage);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessageFunc('message', 'No Number');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
    }
    setMessageFunc('number', secretNumber);
    setMessageFunc('message', 'You guessed right!');
    setMessageFunc('highscore', highscore);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      score--;
      const warnMessage =
        guess > secretNumber ? 'Too high Guess again!' : 'Too low Guess again!';
      setMessageFunc('message', warnMessage);
      setMessageFunc('score', score);
    } else {
      setMessageFunc('score', 0);
      setMessageFunc('message', 'You lost the Game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretNumberFunc();
  score = 20;

  setMessageFunc('score', score);
  setMessageFunc('message', initialMessage);
  setMessageFunc('number', initialNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
