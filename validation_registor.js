const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const male = document.getElementById("sex1")
const woman = document.getElementById('sex2')
const phone = document.getElementById('telephone')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 5) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (woman.checked === false && male.checked === false) {
        messages.push('Please, check answer')
    }

    if (woman.checked === true || male.checked === true) {
        messages.push()
    }

    if (phone.value === '' || phone.value == null || phone.value.length <= 12) {
        messages.push('Your phone number form is incorrect')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})