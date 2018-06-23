'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

});

const board = ['topleft', 'topcenter', 'topright', 'leftcenter', 'middle', 'rightcenter', 'bottomleft', 'bottomcenter', 'bottomright'];


//console log shows me each square is targeted correctly
  var theParent = document.querySelector(".board");
  theParent.addEventListener("click", doSomething, false);

  function doSomething(e) {
      if (e.target !== e.currentTarget) {
          var clickedItem = e.target.id;
          console.log("Hello " + clickedItem);
      }
      e.stopPropagation();
  }
