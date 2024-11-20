function changeColor(event){
    const element = event.target;
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    element.style.backgroundColor = randomColor;
}

window.onload = function(){
    // Evento click sul bottone
    document.getElementById('changeColor').onclick = changeColor;
}