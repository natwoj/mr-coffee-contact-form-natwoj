const inputName = document.getElementById("form-name")
const inputSurname =  document.getElementById("form-surname")
const inputEmail =  document.getElementById("form-email")
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const formButton = document.querySelector("button")

// podstawowa walidacja emaila // 
const validateEmailRegex = /^\S+@\S+\.\S+$/;
const result = validateEmailRegex.test("natalia@gmasilcom");

function EmailValidate (inputEmail) {
if (validateEmailRegex.test(inputEmail.value)) {
    console.log ("ok")
}
else console.log("niepoprawny")
}
/* test */
EmailValidate("natalia@gmasilcom");

// Sprawdzenie czy wszystkie pola zostały wypełnione 
formButton.addEventListener("click", EmailValidate(inputEmail));
*/




