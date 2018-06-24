'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

});


// const board = ['topleft', 'topcenter', 'topright', 'leftcenter', 'middle', 'rightcenter', 'bottomleft', 'bottomcenter', 'bottomright'];
// //let player1 = Player('Player 1', '<i class="fas fa-times"></i>');
// //let player2 = Player('Player 2', '<i class="far fa-circle"></i>');
//
//   let theParent = document.querySelector(".board");
//   theParent.addEventListener("click", markSquare, false);
//    //console log shows me each square is targeted correctly
//
//
//     function markSquare(square) {
//       if (square.target !== square.currentTarget) {
//           let clickedSquare = square.target.id;
//           console.log("Hello " + clickedSquare);
//                   console.log("x");
//         }
//      };

//mark square with an x if player 1 or an o if player 2

var move = 1;
 var turn = true;
 $("#board tr td").click(function() {
   if ($(this).text()=="" && turn) {
     if ((move%2)==1) { $(this).append("X"); }
     else { $(this).append("O"); }
     move++;
     if (ForWinner()!=-1 && ForWinner()!="") {
           if (ForWinner()=="X") { alert("Player 1 wins!"); }
           else { alert("Player 2 wins!"); }
           turn = false;
         }
        }
       });


   function ForWinner() {
   var field2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
   var field3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
   var field1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
   var field4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
   var field5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
   var field6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
   var field7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
   var field8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
   var field9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
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
