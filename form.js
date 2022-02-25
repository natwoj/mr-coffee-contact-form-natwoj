const form = document.querySelector("form");
const inputName = document.getElementById('form-name')
const inputSurname = document.getElementById('form-surname')
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const formButton = document.querySelector("button")
const inputEmail =  document.getElementById("form-email") 


///------------BASIC EMAIL VALIDATION FUNCTION, dots at the end and at the beginning not allowed ----------///

function validateEmail(inputEmail) {
const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const result = validateEmailRegex.test(inputEmail);
if (result) {
    return result;
}
else return false;
}
console.log(validateEmail("..natalia@gmail.com"))