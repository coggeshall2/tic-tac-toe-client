'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


const authEvents = require('./events.js')

const events = require('./events.js')

//On document ready
$(() => {
 authEvents.addHandlers()
 $('#sign-up').on('submit', authEvents, events.onSignUp)
 $('#sign-in').on('submit', authEvents.onSignIn)
 $('#nameModal').on('submit', events.openModal)
});

let playerOneName = '';
let playerTwoName = '';
let moveCount = 0;
let hasWinner = 0;
let turn = '';
let grid = [[0,0,0],[0,0,0],[0,0,0]];


function boardMsg(x){
  return $('#board').text(x);
}

function setTurn(){
  let r = Math.floor((Math.random() * 2) + 1);
  hasWinner = 0;
  if (r == 1){
    let turn = playerOneName;
    boardMsg(playerOneName + " 's turn now!");
  } else {
    let turn = playerTwoName;
    boardMsg(playerTwoName + " 's turn now!");
  }
}

let gameInit = function(){
  turn = '';
  grid = [[0,0,0],[0,0,0],[0,0,0]];
  boardMsg('');
  $('.col').map(function(){
    $(this).text('');
  }).get();
  hasWinner = 0;
  moveCount = 0;
}

$('#playButton').click(function (){

  if (hasWinner == 1){
    init();
  }

  playerOneName = $('#player-one-name').val();
  playerTwoName = $('#player-two-name').val();

  if (playerOneName == ''  || playerTwoName == ''){
    alert('Please set player names');
    return;
  }
  setTurn();
});

$('.col').click(function(){

  if (playerOneName == '' || playerTwoName == ''){
    alert('Please set player names');
    return;
  }

  let row = $(this).parent().index();
  let col = $(this).index();

  if (grid[row][col] !== 0){
    alert('This square is already taken. Please try another square.');
    return;
  }

  if (hasWinner == 1){
    alert('Please click play again');
    return;
  }

  if (turn == playerOneName){
    moveCount++;
    $(this).text('o');
    grid[row][col] = 1;
    let ifWon = winnerCheck(1, playerOneName);
      if (!ifWon){
        if (moveCount >= 9){
          boardMsg('Its a Draw!');
          moveCount = 0;
          $('#playButton').text('Play Again!');
          hasWinner = 1;
          return;
        } else {
          turn = playerTwoName;
          boardMsg(playerTwoName + " 's turn now!");
        }
        return;
      } else {
        return;
      }
  }
  else if (turn == playerTwoName) {
    moveCount++;
    $(this).text('x');
    grid[row][col] = 2;
    let ifWon = winnerCheck(2, playerTwoName);
    if (!ifWon){
      if (moveCount >= 9){
        boardMsg('Its a Draw!');
        moveCount = 0;
        $('#playButton').text('Play Again!');
        hasWinner = 1;
        return;
      } else {
        turn = playerOneName;
        boardMsg(playerOneName + " 's turn now!");
      }
      return;
    } else {
      return;
    }
  }
});

function winnerCheck( n, playerName){
  if (
    (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
    (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
    (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||

    (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
    (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
    (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||

    (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n) ||
    (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)
  ){

    boardMsg(playeName + ' won the game!');
    hasWinner = 1;
    moveCount = 0;
    $('#playButton').text('Play Again!');
    return true;
  }
  return false;
}
// //mark square with an x if player 1 or an o if player 2
// // set moves to 1 and turn to true
// var move = 1;
//  var turn = true;
//  $("#board tr td").click(function() {
//    // if square is empty and turn is true continue
//    if ($(this).text()=="" && turn)
//   // if move = 1 (player 1) then mark an x
//      if ((move%2)==1) { $(this).append("X"); }
//   // else it is player 2 so mark an o
//      else { $(this).append("O"); }
//   // add 1 to move total when total reaches 9 game will be a tie
//      move++;
//      if(move == 10) {alert("Its adraw")}
//         if (ForWinner()!=-1 && ForWinner()!="") {
//             if (ForWinner()=="X") { alert("Player 1 wins!"); }
//             else { alert("Player 2 wins!"); }
//             turn = false;
//           };
//         });
//
//   // check for winner
//    function ForWinner() {
//    let field1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
//    let field2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
//    let field3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
//    let field4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
//    let field5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
//    let field6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
//    let field7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
//    let field8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
//    let field9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
//    if  ((field1==field2)&&(field2==field3)) { return field3; }
//    else if ((field4==field5)&&(field5==field6)) { return field6; }
//    else if ((field7==field8)&&(field8==field9)) { return field9; }
//    else if ((field1==field4)&&(field4==field7)) { return field7; }
//    else if ((field2==field5)&&(field5==field8)) { return field8; }
//    else if ((field3==field6)&&(field6==field9)) { return field9; }
//    else if ((field1==field5)&&(field5==field9)) { return field9; }
//    else if ((field3==field5)&&(field5==field7)) { return field7; }
//    return -1;
//  }
