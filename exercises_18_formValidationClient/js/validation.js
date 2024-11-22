function checkLengthMsg(string, min, max){
    if (string.length < min || string.length > max){
        return false;
    } else {
        return true;
    }
}

function checkEmail(email){
    // Regular expression to validate email format:
    // ^                   : Start of the string
    // [a-zA-Z0-9._-]+     : One or more alphanumeric characters, dots, underscores, or hyphens
    // @                   : The "@" symbol
    // [a-zA-Z0-9.-]+      : One or more alphanumeric characters, dots, or hyphens
    // \.                  : A literal dot
    // [a-zA-Z]{2,4}       : Between 2 and 4 alphabetic characters (e.g., com, org, net)
    // $                   : End of the string
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function checkPhoneNumber(phone){
    // Regular expression to validate phone numbers:
    // ^        : Start of the string
    // \d{10}   : Exactly 10 digits
    // $        : End of the string
    let phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function clearErrorClass(){
    let name_label = document.getElementById('name_label');
    let email_label = document.getElementById('email_label');
    let phone_label = document.getElementById('phone_label');
    let message_label = document.getElementById('message_label');

    name_label.classList.remove('error-label');
    email_label.classList.remove('error-label');
    phone_label.classList.remove('error-label');
    message_label.classList.remove('error-label');

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

    name.classList.remove('error-input');
    email.classList.remove('error-input');
    phone.classList.remove('error-input');
    message.classList.remove('error-input');
}

function checkValidationForm(){
    clearErrorClass();

    let name_label = document.getElementById('name_label');
    let email_label = document.getElementById('email_label');
    let phone_label = document.getElementById('phone_label');
    let message_label = document.getElementById('message_label');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (!checkLengthMsg(name, 2, 50)){
        name_label.classList.add('error-label');
        document.getElementById('name').classList.add('error-input');
        alert('Name must be between 2 and 50 characters');
        return false;
    }

    if (!checkEmail(email)){
        email_label.classList.add('error-label');
        document.getElementById('email').classList.add('error-input');
        alert('Email is not valid');
        return false;
    }

    if (!checkPhoneNumber(phone)){
        phone_label.classList.add('error-label');
        document.getElementById('phone').classList.add('error-input');
        alert('Phone number is not valid');
        return false;
    }

    if (!checkLengthMsg(message, 10, 500)){
        message_label.classList.add('error-label');
        document.getElementById('message').classList.add('error-input');
        alert('Message must be between 10 and 500 characters');
        return false;
    }

    return true;
}

window.onload = function(){
    document.getElementById('submit').onclick = checkValidationForm;
}
