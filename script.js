/*<-- PHONE_MASK -->*/

const $input = document.getElementById('telephone')
$input.addEventListener('input', handleInput)

function handleInput(e) {
    e.target.value = phoneMask(e.target.value)
}

function phoneMask(phone) {
    return phone.replace(/\D/g, '')
        .replace(/^(\d)/, '($1')
        .replace(/^(\(\d{3})(\d)/, '$1) $2')
        .replace(/(\d{4})(\d{1,5})/, '$1-$2')
        .replace(/(-\d{5})\d+?$/, '$1');
}

/*<-- VALIDATION AND DATA-->*/

const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const male = document.getElementById("sex1")
const woman = document.getElementById('sex2')
const phone = document.getElementById('telephone')
const btn_form = document.getElementById('btn-form')
const table = document.getElementById('table_wrapper')
const check_name = document.getElementById('checkbox_name')
const check_pass = document.getElementById('checkbox_pass')
const check_gen = document.getElementById('checkbox_gen')
const check_phone = document.getElementById('checkbox_phone')
const usernameRow = document.getElementById('name_row')
const passRow = document.getElementById('pass_row')
const genRow = document.getElementById('gen_row')
const phoneRow = document.getElementById('phone_row')
const btn_delete = document.getElementById('delete_row')
const btn_copy = document.getElementById('copy_row')



btn_form.addEventListener('click', (e) => {

    if (username.value === '' || username.value == null) {
        // messages.push('Name is required')
        document.getElementById('username_error').innerHTML = "Введіть своє ім'я"
        username.style.borderColor = "red"
        document.getElementById('name_span').style.color = "red"
    } else if (username.value !== '' || username.value != null) {
        document.getElementById('name_append').append(username.value)
    }

    if (password.value.length <= 5 || password.value === '' || password.value === null) {
        // messages.push('Password must be written in rules')
        document.getElementById('pass_error').innerHTML = "Пароль менше 5 символів"
        password.style.borderColor = "red"
        document.getElementById('pass_span').style.color = "red"
    } else if (password.value.length > 5 || password.value !== '' || password.value != null)
        document.getElementById('pass_append').append(password.value)

    if (woman.checked === false && male.checked === false) {
        // messages.push('Please, check answer')
        document.getElementById('gen_error').innerHTML = "Будь ласка, оберіть 1 із варіантів"
        document.getElementById('sex_span').style.color = "red"
    }

    if (woman.checked === false && male.checked === true) {
        document.getElementById('gen_append').append(male.value)
    }

    if (male.checked === false && woman.checked === true) {
        document.getElementById('gen_append').append(woman.value)
    }

    if (phone.value === '' || phone.value == null) {
        // messages.push('Your phone number form is incorrect')
        document.getElementById('phone_error').innerHTML = "Введіть свій номер телефону"
        document.getElementById('telephone_label').style.color = "red"
    } else if (phone.value.length = 12) {
        document.getElementById('phone_append').append(phone.value)
    }

    let nameError = document.getElementById('username_error')
    let passError = document.getElementById('pass_error')
    let genError = document.getElementById('gen_error')
    let phoneError = document.getElementById('phone_error')

    if (nameError.value.length > 0 && passError.value.length > 0 && genError.value.length > 0 && phoneError.value.length > 0) {
        e.preventDefault()
    }

    form.reset()

})


btn_copy.addEventListener('click', copyRow)
btn_delete.addEventListener('click', deleteRow)

function copyRow() {
    if (check_pass.checked === true) {
        passrowclone = passRow.cloneNode(true)
        table.append(passrowclone)
    }
    if (check_name.checked === true) {
        namerowclone = usernameRow.cloneNode(true)
        table.append(namerowclone)
    }
    if (check_gen.checked === true) {
        genrowclone = genRow.cloneNode(true)
        table.append(genrowclone)
    }
    if (check_phone.checked === true) {
        phonerowclone = phoneRow.cloneNode(true)
        table.append(phonerowclone)
    }
}

function deleteRow() {
    if (check_pass.checked === true) {
        passRow.remove()
        check_pass.checked = false
    }
    if (check_name.checked === true) {
        usernameRow.remove()
        check_name.checked = false
    }
    if (check_gen.checked === true) {
        genRow.remove()
        check_gen.checked = false
    }
    if (check_phone.checked === true) {
        phoneRow.remove()
        check_phone.checked = false
    }
}