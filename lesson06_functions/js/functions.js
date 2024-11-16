var message = 'Sign Up to receive our newsletter for 10% off!';
//FUNCTION DECLARATION
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = message;
}

function getArea(width, height) {
    var area = width * height;
    return area;
}

// multiple output function
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

var pippo; //not the same as the variable inside the function
pippo = getArea(3, 5);

var pippo2;
pippo2 = getArea(8, 5);

var myArray = getSize(3, 2, 3);
var var1 = getSize(3, 2, 3)[0];
var var2 = getSize(3, 2, 3)[1];

updateMessage(); // call the function



// other way to declare a function

//FUNCTION EXPRESSION
var area = function(width, height) {
    return width * height;
};

var size = area(3, 4);


//ANONYMOUS FUNCTION - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// these functions are used only once - dons't have a name

// IIFEs (Immediately Invoked Function Expressions) are useful for several reasons:
//
// 1- Scope isolation: Variables declared inside an IIFE do not pollute the global scope.
//    This is particularly useful to avoid variable conflicts in larger projects.
//
// 2- Immediate execution: IIFEs are executed immediately after they are defined.
//    This is helpful when you need to run code just once, such as for initialization.
//
// 3- Encapsulation: They allow you to encapsulate code, keeping variables and functions
//    private within the IIFE.


var area = (function() {
    var width = 3;
    var height = 2;
    return width * height;
}() // these two parentheses are used to call the function immediately
);



//ARROW FUNCTION
// Arrow functions are a more concise way to write function expressions.
// They use the => syntax because somethimes using libraries like REACT the function keyword can bring to some issues

const getAreaArrow = (width, height) => {
    return width * height;
}
const getAreaArrowShort = (width, height) => width * height;

area = getAreaArrow(3, 4);

const increment = x => x++; // if there is only one parameter you can omit the parentheses
