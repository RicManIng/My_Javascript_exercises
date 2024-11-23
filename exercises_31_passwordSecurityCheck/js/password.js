let increment = 0;
let widthInput;
let divBar;
let divProgress;

function passwordSecurity(password){
    let x = 0;
    const arrRegEx = [/^.{8,20}$/, /[a-z]/, /[A-Z]/, /[0-9]/, /[!@#\$%\^&\*]/];
    const controlsNumber = arrRegEx.length;
    increment = 100 / controlsNumber;

    password = password.trim();

    //check there is no space in the password
    let check = /\s\S/;
    if(check.test(password)){
        x = 0;
    } else {
        for(let i = 0; i < controlsNumber; i++){
            if(arrRegEx[i].test(password)){
                x += increment;
            }
        }
    }
    return x;
}

function correctColor(n){
    if(n<50){
        n -= increment;
        if (n<0) n = 0;
    } else if (n>=100) {
        n=120;
    }
    return n;
}

function calculatePx(n, perc){
    return Math.floor(n * (perc / 100));
}

function verify(elt){
    //divProgress.style.width = widthInput + 'px';
    const perc = passwordSecurity(elt.value);
    const value = correctColor(perc);
    divBar.style.width = calculatePx(widthInput, perc) + 'px';
    divBar.style.backgroundColor = `hsl(${value}, 100%, 60%)`;
    console.log(elt.value, perc, value);
}

window.onload = function(){
    const inp = document.getElementById('psw');
    inp.addEventListener('keyup', function(){
        verify(inp);
    });

    widthInput = inp.getBoundingClientRect().width;
    console.log("width", widthInput);
    divProgress = document.getElementById('progressBar');
    divBar = document.getElementById('bar');
    divProgress.style.width = widthInput + 'px';
}