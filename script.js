"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function(){
   const guess = Number(document.querySelector(`.guess`).value);
   
   if(!guess){
       displayMessage(`You need to insert a number!`);
   }

   else if(guess === secretNumber){
       displayMessage(`Correct Number!`);
       document.querySelector(`body`).style.backgroundColor = `green`;
       document.querySelector(`.number`).textContent = secretNumber;

       if(score > highscore){
           highscore = score;
           document.querySelector(`.highscore`).textContent = highscore;
       }
   }
   
   else if(guess !== secretNumber){
       displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);

        score--;
        document.querySelector(`.score `).textContent = score;

        if(score < 1){
            displayMessage(`You lost the game! Try again!`);
            document.querySelector(`.score`).textContent = 0;
            document.querySelector(`body`).style.backgroundColor = `red`;
        }
   }

});

document.querySelector(`.again`).addEventListener(`click`, function(){
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;

    displayMessage(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.number`).textContent = `?`;
});

// Guess My Number

// About the game:

// To win the game you need to guess a random number (secret number) between 1 and 20.
// Of course, you have help.
// If a number that you inserted is greater than the secret number text will show up and say: "Too high!".
// If a number that you inserted is lower than the secret number text will show up and say: "Too low!".
// If you guess the correct secret number the text will show up and say: "Correct Number!".
// Also, the screen will be green in color.
// But if you do not guess a secret number a text will show up and say: "You lost the game. Try again!".
// Also, the screen will be in red color.

// There is maybe more to explain, but you will figure it out within the game.
