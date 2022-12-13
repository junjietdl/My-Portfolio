const scriptURL = 'https://script.google.com/macros/s/AKfycbzNX177wExVQqE4Bcjqgj6Im7EkX5IBzz43If-IVBqOGiLO-s4lkkI-MJHPN0oCYbph/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent sucessfully"
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
