
const form = document.querySelector("form")
const inputName = document.getElementById("form-name")
const inputSurname = document.getElementById("form-surname")
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const inputEmail =  document.getElementById("form-email") 

form.addEventListener("submit", e => {
    e.preventDefault();

    inputNameCheck(inputName)
    inputNameCheck(inputSurname)
    validateEmail(inputEmail)
    validatePhone(inputPhone)
    AllFilled (inputName, inputSurname, inputEmail) 
    })

// walidacja inputa name 
function inputNameCheck (inputName) {
    if (inputName.value.length > 3 ) {  
        console.log(inputName.value)
    } else {
        return false;
    }
}

//walidacja inputa surname
function inputSurnameCheck (inputSurname) {
    if (inputSurname.value.length > 3 ) {  
        console.log(inputSurname.value)
    } else {
        return false;
    }
}

// walidacja inputa email 
function validateEmail(inputEmail) {
    const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const result = validateEmailRegex.test(inputEmail)
    if (result == true) {
    console.log(inputEmail.value)
    }
    return false;
}

// basic phone validate using regExp
function validatePhone(inputPhone) {
    const validatePhoneRegex = /^\+?[1-9][0-9]{7,14}$/
    const result = validatePhoneRegex.test(inputPhone)
    if (result == true) {
        console.log(inputPhone.value)
        }
        return false;
    }

    