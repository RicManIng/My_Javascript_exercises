// innerHTML property
// textContent property

var elements = document.getElementsByClassName('cool');

var firstItem = elements.item(0);
firstItem.innerHTML = 'tomatoes';

// attribute update
// classname property
firstItem.setAttribute('class', 'hot');
if(firstItem.hasAttribute('class')) {
    firstItem.removeAttribute('class');
}

//ADDING AN ELEMENT
var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');
newEl.appendChild(newText);

// find position where to insert new element
var position = document.getElementsByTagName('ul')[0];

// insert new element
position.appendChild(newEl);



// REMOVING AN ELEMENT
var removeEl = document.getElementsByTagName('li')[1];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);


//NB for security reason it is better to not use innerHTML property to update the page
// particularly in form of user input
//NB textContent property is safer than innerHTML property
//NB innerHTML property is faster than textContent property
