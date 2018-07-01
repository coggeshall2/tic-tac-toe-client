'use strict'

const authEvents = require('./auth/authEvents')
require('./game.js')
require('./buttons.js')

$(() => {
  authEvents.addHandlers()
})
