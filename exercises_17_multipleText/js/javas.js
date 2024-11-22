function addParagraph(){
    const div = document.getElementById('text');
    const p = div.firstElementChild;
    const text = p.textContent;
    const newP = document.createElement('p');
    const newText = document.createTextNode(text);
    newP.appendChild(newText);
    div.appendChild(newP);
}

window.onload = function(){
    const button = document.getElementById('myButton');
    button.onclick = addParagraph;
}