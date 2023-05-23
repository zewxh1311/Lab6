const $input = document.querySelector('#telephone')
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