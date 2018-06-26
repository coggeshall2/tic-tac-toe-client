'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


const authEvents = require('./events.js')

// On document ready
$(() => {
 authEvents.addHandlers()
})
// let startGame = function(auth){
//   if (signUpSuccess(data) == null &&
//       signInSuccess(data) == null){
//         turn = false}
//         else {turn = true;}
//       }

//mark square with an x if player 1 or an o if player 2
// set moves to 1 and turn to true
var move = 1;
 var turn = true;
 $("#board tr td").click(function() {
   // if square is empty and turn is true continue
   if ($(this).text()=="" && turn)
  // if move = 1 (player 1) then mark an x
     if ((move%2)==1) { $(this).append("X"); }
  // else it is player 2 so mark an o
     else { $(this).append("O"); }
  // add 1 to move total when total reaches 9 game will be a tie
     move++;
     if(move == 10) {alert("Its adraw")}
        if (ForWinner()!=-1 && ForWinner()!="") {
            if (ForWinner()=="X") { alert("Player 1 wins!"); }
            else { alert("Player 2 wins!"); }
            turn = false;
          };
        });

  // check for winner
   function ForWinner() {
   let field1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
   let field2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
   let field3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
   let field4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
   let field5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
   let field6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
   let field7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
   let field8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
   let field9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
   if  ((field1==field2)&&(field2==field3)) { return field3; }
   else if ((field4==field5)&&(field5==field6)) { return field6; }
   else if ((field7==field8)&&(field8==field9)) { return field9; }
   else if ((field1==field4)&&(field4==field7)) { return field7; }
   else if ((field2==field5)&&(field5==field8)) { return field8; }
   else if ((field3==field6)&&(field6==field9)) { return field9; }
   else if ((field1==field5)&&(field5==field9)) { return field9; }
   else if ((field3==field5)&&(field5==field7)) { return field7; }
   return -1;
 }
