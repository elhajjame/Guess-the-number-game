'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'this is the new content';
// consoe.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent ='10'
// document.querySelector('.guess').textContent = 'yes yes'
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

// expression function
const displayMessage = function(message){
     document.querySelector('.message').textContent = message;
};
let secretNumber = Math.floor(Math.random()*10)+1;
let score = 20; // called state varible cuz we have it in html 
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!'
        displayMessage ('no number')
    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct number!')
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#417532ff';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // when is wrong:
    else if(guess !== secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = guess < secretNumber ? 'too low' : 'too high'
        score--;
        document.querySelector('.score').textContent = score;
    }}else{
        // document.querySelector('.message').textContent = 'you lost the game';
        displayMessage('you lost the game!');
            document.querySelector('.score').textContent = 0;  
    }

    // if the score is too low:
    // else if (guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'too low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{document.querySelector('.message').textContent = 'you lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    //// if the score is too high: 

    //   else if (guess > secretNumber) {
    //     if (score > 1) {
    //     document.querySelector('.message').textContent = 'too high!'
    //     score--;
    //     document.querySelector('.score').textContent = score;            
    //     }else{document.querySelector('.message').textContent = 'you lost the game';
    //         document.querySelector('.score').textContent = 0
    //     }

    // }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*10)+1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('start guessing')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
});

