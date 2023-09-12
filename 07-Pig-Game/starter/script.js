'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const newgame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// roll event
btnRoll.addEventListener('click', function () {
  const num = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  if (num !== 1) {
    dice.src = `dice-${num}.png`;
  }
});
