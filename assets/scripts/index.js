'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

});

const board = ['topleft', 'topcenter', 'topright', 'leftcenter', 'middle', 'rightcenter', 'bottomleft', 'bottomcenter', 'bottomright'];
//let player1 = Player('Player 1', '<i class="fas fa-times"></i>');
//let player2 = Player('Player 2', '<i class="far fa-circle"></i>');

//console log shows me each square is targeted correctly
  let theParent = document.querySelector(".board");
  theParent.addEventListener("click", markSquare, false);

  function markSquare(square) {
      if (square.target !== square.currentTarget) {
          let clickedSquare = square.target.id;
          console.log("Hello " + clickedSquare);
        }
      };

//mark square with an x if player 1 or an o if player 2
