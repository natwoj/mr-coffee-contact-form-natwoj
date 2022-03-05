
const form = document.querySelector("form")
const inputName = document.getElementById("form-name")
const inputSurname = document.getElementById("form-surname")
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const inputEmail =  document.getElementById("form-email") 
const inputSubmit = document.getElementById("submitbtn");

// modal consts
const showModal = document.getElementById("justModal")
const closingModal = document.getElementById("close")

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

/*wysylanie forma via submit + wyswietlanie modala jezeli wszystkie pola poprawne
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("ortorpyotpoytrpoyrt")
    })
*/

//podpiecie pod submita - eventa na click = pokazanie modala 
inputSubmit.addEventListener('click', (e) => {
        e.preventDefault();
            showModal.style.display = 'block';
})

// podpiecie pod buttona modala zdarzenia click => zamkniecie modala
closingModal.addEventListener('click', (e) => {
    e.preventDefault();
        showModal.style.display = 'none';
})