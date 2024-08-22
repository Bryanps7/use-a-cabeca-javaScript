function validateNonEmpty (minLength, maxlength, inputField, helpText) {
    if(inputField.value.length == 0) {
        if(helpText != null) {
            helpText.innerHTML = `Insira um valor.`
            return false;
        }
    }else if(inputField.value.length < minLength || inputField.value.length > maxlength) {
        if(helpText != null) {
            helpText.innerHTML = `Insira um valor entre ${minLength} e ${maxlength}.`
            return false;
        }
    }else {
        if(helpText != null) {
            helpText.innerHTML = ""
            return true;
        }   
    }
}

let joao = 'Banana'

let cod = /^\w*/

if(cod.test(joao)) {
    console.log(joao)
}