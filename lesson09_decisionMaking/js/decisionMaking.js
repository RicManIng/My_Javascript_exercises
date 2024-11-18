var score = 75;
var msg = '';
var bonus = true;

const congratulate = () => {
  msg += 'Congratulations! ';
}

//Decision Making

if(score >= 50 || bonus) {
    congratulate();
    msg += 'Proceed to the next level.';
} else {
    msg = 'Please try again.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;

// Switch Statement

var msg2;
var level = 2;

switch(level) {
    case 1:
        msg2 = 'Good luck on the first test!';
        break;
    case 2:
        msg2 = 'Second of three - keep going!';
        break;
    case 3:
        msg2 = 'Final round, almost there!';
        break;
    default:
        msg2 = 'Good luck!';
        break;
    }
    