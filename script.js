'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'this is the new content';
// consoe.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent ='10'
// document.querySelector('.guess').textContent = 'yes yes'
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    }
});
