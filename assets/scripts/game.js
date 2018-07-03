const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = playerTwo
let winner = ''
let playerX = 0
let playerO = 0
let playScore = false

const gameValues = {
  x1: 0,
  x2: 0,
  isOver: false
}

// Play game
const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  if (winner === '' && square.target.innerHTML === '') {
    displayCurrentPlayer(currentPlayer)
    // console.log(square.target.innerHTML)
    // console.log(square.target)
    // console.log(square)
    if (currentPlayer === playerOne) {
      $(this).html(playerTwo)
      currentPlayer = playerTwo
      gameValues.x1 = square.target.id
      gameValues.x2 = playerOne
    } else if (currentPlayer === playerTwo) {
      $(this).html(playerOne)
      currentPlayer = playerOne
      gameValues.x1 = square.target.id
      gameValues.x2 = playerTwo
    }
    checkWinner()
    score(winner)
  }
})

// check for winner
const sq = function (number) {
  return document.getElementById(number).innerText
}

const checkWinner = function () {
  for (let i = 0; i <= 8; i++) {
    const num = i.toString()
    sq(num)
    // for horizantal rows
  } if (sq(0) !== '' && sq(0) === sq(1) && sq(1) === sq(2) ||
        sq(3) !== '' && sq(3) === sq(4) && sq(4) === sq(5) ||
        sq(6) !== '' && sq(6) === sq(7) && sq(7) === sq(8) ||
        sq(0) !== '' && sq(0) === sq(3) && sq(3) === sq(6) ||
        sq(1) !== '' && sq(1) === sq(4) && sq(4) === sq(7) ||
        sq(2) !== '' && sq(2) === sq(5) && sq(5) === sq(8) ||
        sq(0) !== '' && sq(0) === sq(4) && sq(4) === sq(8) ||
        sq(6) !== '' && sq(6) === sq(4) && sq(4) === sq(2)) {
    message(`Congratulations, Player ${currentPlayer}! You win!`)
    gameValues.isOver = true
    if (currentPlayer === playerOne) {
      winner = currentPlayer
    } else if (currentPlayer === playerTwo) {
      winner = currentPlayer
    }
  } else if (sq(0) !== '' && sq(1) !== '' && sq(2) !== '' && sq(3) !== '' && sq(4) !== '' && sq(5) !== '' && sq(6) !== '' && sq(7) !== '' && sq(8) !== '') {
    message(`It's a draw...Play again!`)
    gameValues.isOver = true
    }
}


// display message
const message = function (msg) {
  document.getElementById('message').innerText = msg
}

const displayCurrentPlayer = function (currentPlayer) {
  document.getElementById('message').innerText = `Player ${currentPlayer}, it's your turn!`
}

// add win to score
const score = function (winner) {
  if (!playScore && winner === playerOne) {
    playerX++
    playScore = true
  } else if (!playScore && winner === playerTwo) {
    playerO++
    playScore = true
  }
  document.getElementById('playScore').innerText = `${playerOne}: ${playerX} and ${playerTwo}: ${playerO}`
}

// start game
const startGame = function () {
  for (let i = 0; i <= 8; i++) {
    const num = i.toString()
    clearBoard(num)
  }
}

// reset game
const clearBoard = function (number) {
  document.getElementById(number).innerText = ''
  winner = ''
  playScore = false
  message('')
  }
document.getElementById('newGame').addEventListener('click', startGame)


// reset score
const resetScore = function () {
  playerX = 0
  playerO = 0
  score()
}
document.getElementById('resetScore').addEventListener('click', resetScore)

module.exports = {
  playerMoves,
  startGame,
  gameValues
}
