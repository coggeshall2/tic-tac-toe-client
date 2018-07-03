'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#userMessage').css('display', 'block', 'background-color', 'green')
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('.userButtons').css('display', 'block', 'background-color', 'green')
  $('.signInUp').css('display', 'none')
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully')
  $('#change-password').css('display', 'none', 'background-color', 'green')
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('.signInUp').css('display', 'block', 'background-color', 'green')
  $('#gameboard').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#gameboard').css('display', 'block')
  store.game = data.game
  store.game.id = data.game.id
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
