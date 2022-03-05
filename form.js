
const form = document.querySelector("form")
const inputName = document.getElementById("form-name")
const inputSurname = document.getElementById("form-surname")
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const inputEmail =  document.getElementById("form-email") 

// modal consts
const showModal = getElementByid("justModal")
const closingModal = getElementById("close")

// walidacja inputa name 
function inputNameCheck (inputName) {
    if (inputName.value.length > 3 ) {  
        return true
    } else {
        return false;
    }
}

//walidacja inputa surname
function inputSurnameCheck (inputSurname) {
    if (inputSurname.value.length > 3 ) {  
       return true;
    } else {
        return false;
    }
}
// walidacja inputa email 
function validateEmail(inputEmail) {
    const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const result = validateEmailRegex.test(inputEmail)
    if (result == true) {
    return true;
    }
    return false;
}

// basic phone validate using regExp
function validatePhone(inputPhone) {
    const validatePhoneRegex = /^\+?[1-9][0-9]{7,14}$/
    const result = validatePhoneRegex.test(inputPhone)
    if (result == true) {
       return true;
        }
        return false;
    }

// wysylanie forma via submit + wyswietlanie modala jezeli wszystkie pola poprawne
form.addEventListener("submit", e => {
    e.preventDefault();
    if (AllCorrect () == true) {
            showModal.style.display = 'block';
            console.log(inputName.value, inputSurname.value, inputPhone,value, inputEmail.value)
        } else {
    return 
    })

// walidacja wszystkich pol naraz 
function AllCorrect () {
    if (
        inputNameCheck(inputName) == true;
        inputNameCheck(inputSurname) == true;
        validateEmail(inputEmail) == true;
        validatePhone(inputPhone) == true; )
        return true;
}
else {
    return false
}
