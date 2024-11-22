function checkLengthMsg(string, min, max){
    if (string.length < min || string.length > max){
        return false;
    } else {
        return true;
    }
}

function checkEmail(email){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}