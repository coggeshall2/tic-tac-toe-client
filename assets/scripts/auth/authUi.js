'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
    $('#userMessage').css('background-color', 'green')
  $('#userMessage').css('display', 'block')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('#userMessage').css('background-color', 'green')
  $('.userButtons').css('display', 'block')
  $('.signInUp').css('display', 'none')
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully')
  $('#changedPassword').css('background-color', 'green')
  $('#change-password').css('display', 'none')
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('#userMessage').css('background-color', 'green')
  $('.signInUp').css('display', 'block')
  $('#gameboard').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#gameboard').css('display', 'block')
  store.game = data.game
  store.game.id = data.game.id
  console.log(data.game)
}

const movesSuccess = function () {
  // console.log('moves')
}

const getGamesSuccess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
    // console.log(data.games[i])
  }
}

const failure = function () {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createSuccess,
  movesSuccess,
  getGamesSuccess,
  failure
}
