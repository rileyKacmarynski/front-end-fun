const body = document.querySelector('body');
const nav = document.querySelector('#nav-toggle');
nav.addEventListener('click', () => {
  body.classList.toggle('nav-open');
});


const slider = document.querySelector('.image-container');
let pictures = document.querySelectorAll('.slider picture');
let currentImage = 0;
const imageSize = pictures[0].clientWidth;

document.querySelector('#right-button')
  .addEventListener('click', function(){
    clearInterval(intervalId);
    nextImage();
  });

document.querySelector('#left-button')
  .addEventListener('click', function(){
    clearInterval(intervalId);
    previousImage();
  });

const intervalId = setInterval(nextImage, 5 * 1000);
  
function nextImage(){
  currentImage == pictures.length - 1
  ? currentImage = 0
  : currentImage++;
  moveImage();
}

function previousImage(){
  currentImage == 0
  ? currentImage = 2
  : currentImage--
  moveImage();
}

function moveImage(){
  let translateAmount = (-imageSize * currentImage);
  if(currentImage >= 2){  
    // The last pixture must be a little smaller or something. 
    translateAmount = translateAmount + .5; 
  }

  slider.style.transform = 'translateX(' + translateAmount + 'px)';
}
