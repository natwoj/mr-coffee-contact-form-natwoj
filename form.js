
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
    console.log (GetAllValues());
})

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

