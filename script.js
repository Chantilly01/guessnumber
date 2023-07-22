'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let currScore = 20;
let maxScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⚠No number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (maxScore < currScore) {
      maxScore = currScore;
    }
    document.querySelector('.highscore').textContent = maxScore;
  } else if (guess > secretNum) {
    if (currScore > 1) {
      document.querySelector('.message').textContent = '📈Too High';
      currScore--;
      document.querySelector('.score').textContent = currScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
    }
  } else if (guess < secretNum) {
    if (currScore > 1) {
      document.querySelector('.message').textContent = '📉Too Low';
      currScore--;
      document.querySelector('.score').textContent = currScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currScore = 20;
  document.querySelector('.score').textContent = currScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
});
