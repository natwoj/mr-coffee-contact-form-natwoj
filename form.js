
const form = document.querySelector("form")
const inputName = document.getElementById("form-name")
const inputSurname = document.getElementById("form-surname")
const inputEmail =  document.getElementById("form-email") 
const inputPhone =  document.getElementById("form-phone")
const textArea = document.getElementById("form-msg")
const inputSubmit = document.getElementById("submitbtn");

// modal consts
const showModal = document.getElementById("justModal")
const closingModal = document.getElementById("close")

inputSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateLengthAndReg () === true) {
        showModal.style.display = 'block'
        console.log (GetAllValues());
        clearForm();
    }
    console.log("error message")
    })

// test fields values, length, regExp
function inputsTest (fieldName, fieldLength, reg) {
    if (fieldName.value.length >= fieldLength && reg.test(fieldName.value)) {
        return true;
    }
    return false;
}

// tests if length of fields is correct 
function validateLengthAndReg () {
    if (inputsTest(inputName, 3, /^[A-Za-z]*$/) &&
    inputsTest(inputSurname, 3, /^[A-Za-z]*$/) && 
    inputsTest(inputEmail, 3, /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i) && 
    inputsTest(inputPhone, 12, /^\+?[1-9][0-9]{7,14}$/ ) && 
    inputsTest(textArea, 4, /^[A-Za-z]*$/))
    return true; 
}


// getting all values from form inputs
function GetAllValues () {
    const AllValues = {} ; 
    AllValues.name = inputName.value;
    AllValues.surname = inputSurname.value;
    AllValues.email = inputEmail.value;
    AllValues.phone = inputPhone.value; 
    AllValues.textarea = textArea.value; 
    return AllValues;
}

function clearForm () {
    inputName.value = '';
    inputSurname.value = '',
    inputEmail.value = '',
    inputPhone.value = '',
    textArea.value = '';
}

// adding to button of modal click event = close modal
closingModal.addEventListener('click', (e) => {
    e.preventDefault();
        showModal.style.display = 'none';
        clearForm();
})