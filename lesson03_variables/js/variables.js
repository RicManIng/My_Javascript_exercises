var quantity;   //declaration
quantity = 3;   //assignment

/* 
    Numeric Data Type
    - integer
    - float

    String Data Type
    - single quote  'hi!'
    - double quote  "hi!"
    - backtick      `hi!`

    Boolean Data Type
    - true
    - false

*/

var price;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var element = document.getElementById('cost');
element.textContent = total + '$';