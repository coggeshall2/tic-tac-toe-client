'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

});

const board = ['topleft', 'topcenter', 'topright', 'leftcenter', 'middle', 'rightcenter', 'bottomleft', 'bottomcenter', 'bottomright'];

$("#topleft").click(function(){
  console.log('Clicked topleft!!');
  
});
$("#topcenter").click(function(){
  console.log('Clicked topcenter!!');
});
$("#topright").click(function(){
  console.log('Clicked topright!!');
});
$("#leftcenter").click(function(){
  console.log('Clicked leftcenter!!');
});
$("#middle").click(function(){
  console.log('Clicked middle!!');
});
$("#rightcenter").click(function(){
  console.log('Clicked rightcenter!!');
});
$("#bottomleft").click(function(){
  console.log('Clicked bottomleft!!');
});
$("#bottomcenter").click(function(){
  console.log('Clicked bottomcenter!!');
});
$("#bottomright").click(function(){
  console.log('Clicked bottomright!!');
});
