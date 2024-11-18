var scores = [24, 32, 17]; // Array of scores
var arrayLenght = scores.length; // Items in array
var roundNumber = 0; // Current round
var msg = ''; // Message
var i; // Counter

// Loop through the items in the array
for (i = 0; i < arrayLenght; i++) {

  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = (i + 1);

  // Write the current round to message
  msg += 'Round ' + roundNumber + ': ';

  // Get the score from the scores array
  msg += scores[i] + '<br />';

  console.log('Round ' + roundNumber + ': ' + scores[i]);
} 

document.getElementById('answer').innerHTML = msg; // Display the message



var k = 1;
var msg2 = '';

while (k < 10) {
  msg2 += k + ' x 5 = ' + (k * 5) + '<br />';
  k++;
}

document.getElementById('new-answer').innerHTML = msg2;