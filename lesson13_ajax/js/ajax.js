/* 
    AJAX is a technique to load data from the server without a full page refresh.
    what cen we do?
    - make a request to the server
    - different types of data formats: html, xml, json

    EXAMPLES of AJAX usage:

    - LIVE SEARCH (autocomplete)
    - SHOPPING CART (add items to the cart without refreshing the page)
    - LOGIN
    - PROFILE

    */


/* 
    PROCESSING MODEL

    1. Syncronous : web page wait the execution of the script
    2. Asyncronous : web page does not wait the execution of the script (AJAX)

    - browser request data from the server
    - while waiting for the response, the browser can do other things
    - when the response is ready, the browser can display the data (an event is triggered)
*/


// 1. Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);
        var newContent = '';
        for (var i = 0; i < responseObject.gallery.lenght; i++) {
            newContent += '<div class="image">';
            newContent += '<img src="' + responseObject.gallery[i].img_url + '"width="200" height="200"></img></div>';
        }
        document.getElementById('content').innerHTML = newContent;
    }
}

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'databases/database.json', true);
// 
xhr.send(null);