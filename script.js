function handleGetFormData() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const city = document.getElementById('city').value
    const zipCode = document.getElementById('zip-code').value
    const status = document.getElementById('status').checked
    const data = {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    }
    return data
}

function isNumber(angka) {
    return !isNaN(angka)
}

function checkboxIsChecked() {
    return document.getElementById('status').checked
}

function validateFormData(data) {
    if (data != null && isNumber(data.zipCode) && checkboxIsChecked()) {
        return true
    }else {
        return false
    }
}

function submit() {
    const data = handleGetFormData()
    const validasi = validateFormData(data)

    if(validasi == false){
        document.getElementById('warning').textContent  = 'Periksa form anda sekali lagi'
    }else{
        document.getElementById('warning').textContent  = ''
    }
}

const button = document.getElementById('submit-form')

button.addEventListener('click', function(event) {
    event.preventDefault()
    submit()
} )