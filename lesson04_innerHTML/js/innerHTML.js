var title;
var message;
title = "My Special Offers";
message = "<a href=\"sale.html\" >25% off!</a>";
var element_title = document.getElementById("title");
element_title.innerHTML = title;

var element_note = document.getElementById("note");
element_note.innerHTML = message;


/* 
    HOW TO DEFINE VARIABLES NAME
    1. The first character must be a letter, an underscore (_), or a dollar sign ($). Not a number.
    2. The rest of the variable name can include letters, numbers, underscores, or dollar signs. Can't include spaces. Can't be - or .
    3. Can't be equal to a keyword or reserved word.
    4. Case-sensitive.

    GOOD PRACTICES
    1. Use camelCase for variable names.
    2. Use descriptive names.
*/