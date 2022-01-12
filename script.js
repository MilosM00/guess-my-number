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
            displayMessage(`You lost the game!`);
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
});