'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'this is the new content';
// consoe.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent ='10'
// document.querySelector('.guess').textContent = 'yes yes'
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.floor(Math.random()*20)+1;
let score = 20; // called state varible cuz we have it in html 

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#417532ff';
        document.querySelector('.number').style.width = '30rem'
    }

    else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'too low!'
            score--;
            document.querySelector('.score').textContent = score;
        }else{document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }

      else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = 'too high!'
        score--;
        document.querySelector('.score').textContent = score;            
        }else{document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0
        }

    }
});
