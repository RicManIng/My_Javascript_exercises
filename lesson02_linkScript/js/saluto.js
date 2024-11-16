// init today as a new instance of Date object
var today = new Date();

// call a method of Date object to get the current hour
var hourNow = today.getHours();

// declare a variable to hold a greeting message
// actually in this variable there is nothing
var greeting;

// check if the current hour is higher than 18
if(hourNow > 18){
    greeting = 'Good Evening!';
} else if (hourNow > 12){
    greeting = 'Good Afternoon!';
} else if (hourNow > 0){
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

// call at the documento object to write the greeting message
document.write('<h3>' + greeting + '</h3>');


//this is a single line comment
/*
this is a multi line comment
 */