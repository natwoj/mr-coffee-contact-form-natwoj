

function validateEmail(inputEmail) {
    const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const result = validateEmailRegex.test(inputEmail)
    if (result === true) {
    console.log(inputEmail)
    }
    return false;
}

validateEmail("info@nwojcik.com")