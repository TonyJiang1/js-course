'use strict';

/*
document.querySelector('.message').textContent = 'hi'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)

*/

let number = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = Number(document.querySelector('.highscore').textContent)
// document.querySelector('.number').textContent = number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log({'score': score ,'highscore': highscore})

    if (!guess) {
      document.querySelector('.message').textContent = 'No Number'
    } else if (guess != number) {
      if (score > 0) {
        document.querySelector('.message').textContent = guess > number ? 'Too high' : 'Too low'
        score--
        document.querySelector('.score').textContent = score        
      } else {
        document.querySelector('.message').textContent = 'You lose the game'        
      }
    } else {
      document.querySelector('.message').textContent = 'Correct'
      document.querySelector('.number').textContent = number
      document.querySelector('body').style.backgroundColor = '#60b347'
      document.querySelector('.number').style.width = '30rem'
      if (highscore < score) {
        document.querySelector('.highscore').textContent = score
      }
    }  
  document.querySelector('.again').addEventListener('click', function () {
    score = 20
    number = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'

})   

})