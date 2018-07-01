// Get modal
const modal = document.getElementById('signUp')

// close modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

// Get modal
const signIn = document.getElementById('signIn')

// close modal
window.onclick = function (event) {
  if (event.target === signIn) {
    signIn.style.display = 'none'
  }
}
