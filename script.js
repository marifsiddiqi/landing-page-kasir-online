// const header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

function handleGetFormData() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const city = document.getElementById('city').value
    const zipCode = document.getElementById('zip-code').value
    const status = document.getElementById('status').value
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

// const angka = 9
// console.log(isNumber(angka))
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
    const warnings = document.getElementById('warning');

    if(validateFormData(handleGetFormData()) == true){
        warnings.innerText = 'Pesan anda diterima'
        console.log(handleGetFormData())
    }else{
        warnings.innerText = 'Periksa form anda sekali lagi'
    }
}

const button = document.getElementById('submit-form')

button.addEventListener('click', function(event) {
    event.preventDefault()
    submit()
} )