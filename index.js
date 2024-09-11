// Desktop signUp

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailPattern.test(email)
}

const mainFormContainer = document.querySelector('.main-card-container')
const thakYouContainer = document.querySelector('.thank-you-container')

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault()

  const emailInput = document.getElementById('email')
  const errorMessage = document.getElementById('error-msg')

  const submitBtn = document.querySelector('.submit-btn')

  const emailAddress = document.getElementById('email-input')

  if (validateEmail(emailInput.value)) {
    errorMessage.textContent = ''

    mainFormContainer.style.display = 'none'
    thakYouContainer.style.display = 'flex'
    emailAddress.innerHTML = emailInput.value
  } else {
    errorMessage.textContent = 'Valid email required.'
    emailInput.style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)'
    emailInput.style.borderColor = 'hsl(4, 100%, 67%, 0.4)'
    emailInput.style.color = '#FF586C'
    submitBtn.style.backgroundColor = 'hsl(234, 29%, 20%)'
  }
})

const dismissBtn = document.getElementById('dismiss-btn')
dismissBtn.addEventListener('click', () => {
  mainFormContainer.style.display = 'flex'
  thakYouContainer.style.display = 'none'
})
