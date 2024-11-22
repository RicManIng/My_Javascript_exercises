function selectRandomColor() {
  // Generate random values for red, green, and blue
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // Return the color in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    let body = document.querySelector('body');
    let color = selectRandomColor();
    body.style.backgroundColor = color;
}

window.onload = function() {
    setInterval(changeColor, 3000);
}