function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

function checkUsernameP(minLength) {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < minLength) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

//first method
var elUsername = document.getElementById('username');
//elUsername.onblur = checkUsername;

//second method (binding of an event to an element)
elUsername.addEventListener('blur', checkUsername, false);

//use parametr function in an eventListener
elUsername.addEventListener('blur', function() {
    checkUsernameP(5);
}, false);

//check if addEventListener is supported
/* if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', checkUsername, false);
} else if (elUsername.attachEvent) {
    //for IE5-8
    elUsername.attachEvent('onblur', checkUsername);
} else {
    elUsername.onblur = checkUsername;
} */

exit;


//ACCESS TO TARGET ELEMENT


function checkUsername(e) {
    var target = e.target;
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

function checkUsernameP(e, minLength) {
    var target = e.target;
    var elMsg = document.getElementById('feedback');
    if (this.value.length < minLength) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

//first method
var elUsername = document.getElementById('username');
//elUsername.onblur = checkUsername;

//second method (binding of an event to an element)
elUsername.addEventListener('blur', checkUsername, false);

//use parametr function in an eventListener
elUsername.addEventListener('blur', function(e) {
    checkUsernameP(e, 5);
}, false);

//check if addEventListener is supported
/* if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', checkUsername, false);
} else if (elUsername.attachEvent) {
    //for IE5-8
    elUsername.attachEvent('onblur', checkUsername);
} else {
    elUsername.onblur = checkUsername;
} */