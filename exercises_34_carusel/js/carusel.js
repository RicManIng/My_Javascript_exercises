const arrImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let carusel;
let n = 0;

function changeImg(index){
    carusel.style.backgroundImage = `url('img/${arrImg[index]}')`;
}

window.onload = function(){
    carusel = document.getElementById("carusel");
    setInterval(function(){
        changeImg(n);
        n++;
        if(n >= arrImg.length) n = 0;
    }, 2000);            
}