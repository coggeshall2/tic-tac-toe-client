// toggle user info
$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})
// toggle change password
$(document).ready(function () {
  $('#changePassword').click(function () {
    $('#change-password').toggle()
  })
})

// toggle past games
$(document).ready(function () {
  $('#getGames').click(function () {
    $('#view-games').toggle()
  })
})

// clear user sign in messages
$(document).ready(function () {
  $('#newGame').click(function () {
    $('#userMessage').text('')
    $('#userMessage').css('background-color', '222')
    $('#changedPassword').text('')
    $('#changedPassword').css('background-color', '222')
  })
})

// validate emails
// const validateEmail = function (email) {
//   const re = /\S+@\S+/
//   return re.test(email)
// }
