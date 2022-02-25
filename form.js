
const form = document.querySelector("form")
const inputName = document.getElementById('form-name')
const inputSurname = document.getElementById('form-surname')
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const inputEmail =  document.getElementById("form-email") 

//submiting form if inputs ok 
form.addEventListener("submit", e => {
    e.preventDefault();

    if (inputNameCheck(inputName) === inputName.value && inputSurnameCheck(inputSurname) === inputSurname.value && validateEmail(inputEmail) == true && validatePhone(inputPhone) == true) {
        e.target.submit();
    console.log(inputName.value + " " + inputSurname.value + " " + inputEmail.value + " " + inputPhone.value)
    }
})

//input name check function
function inputNameCheck (inputName) {
    if (inputName.value.length >= 3 ) {  
        return inputName.value;
    } else {
        //jeżeli nie to alert, zeby poprawic 
        alert("Za krotkie");
    }
}

//input surname check function
function inputSurnameCheck (inputSurname) {
    if (inputSurname.value.length >= 3 ) {  
        return inputSurname.value;
    } else {
       //if not - alert to correct 
        alert("Za krotkie");
    }
}

// basic email validate using regExp
function validateEmail(inputmail) {
    const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const result = validateEmailRegex.test(inputmail)
        
    if (result == true) {
        return true;
    }
    else return false;
    }

// basic phone validate using regExp
function validatePhone(inputphone) {
    const validatePhoneRegex = /^\+?[1-9][0-9]{7,14}$/
    const result = validatePhoneRegex.test(inputphone)
        
    if (result == true) {
        return true;
    }
    else
        return false
    }
