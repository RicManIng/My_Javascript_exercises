function addZero(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

function clock(){
    var d = new Date();
    var date = d.getDate();
    var hour = addZero(d.getHours());
    var minute = addZero(d.getMinutes());
    var second = addZero(d.getSeconds());
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}

window.onload = function(){
    setInterval(clock, 1000);
}
