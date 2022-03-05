
// basic phone validate using regExp
function validatePhone(inputphone) {
    const validatePhoneRegex = /^\+?[1-9][0-9]{7,14}$/
    const result = validatePhoneRegex.test(inputphone)
    if (result == true) {
        console.log(inputphone)
        }
        return false;
    }
