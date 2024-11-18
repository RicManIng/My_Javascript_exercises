// access to DOM elements with class method

var elements = document.getElementsByClassName('hot');

var el = elements.item(1);
// var el = elements[1];
el.className = 'cool';


// getElementsByTagName('li')     ----tag  example <li> <p> <h1> <h2> <h3> <h4> <h5> <h6>
// querySelector('li.hot')         ----css selector 


// loop

var hotItems = document.querySelectorAll('li.hot');

for (i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';
}