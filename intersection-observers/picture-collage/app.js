const unsplashUrl = 'https://source.unsplash.com/random/';
const rootDiv = document.querySelector('.grid');


// intersection observer part

const threshold = Array.from({length: 50}, (_, n) => (n + 1) / 50);
const fadeObserver = new IntersectionObserver(entries => {
  // if we're intersecting set opacity to ratio of intersection
  entries.forEach((entry) => {
    entry.target.style['opacity'] = entry.intersectionRatio;
  });
}, {threshold});


const bottom = document.querySelector('#bottom');

const infiniteScrollObserver = new IntersectionObserver(() => {
  getNextImages(30).forEach(addImageToDom);

  // need to redo other observer I think
}, { rootMargin: "1000px"});

infiniteScrollObserver.observe(bottom);


// get the first page-ish of images
getNextImages(60).forEach(addImageToDom);

function addImageToDom(image){
  const imageDiv = createImageNode(image);
  rootDiv.appendChild(imageDiv);
  fadeObserver.observe(imageDiv);
}

function getNextImages(n){
  return Array.from({length: n}, function(){
    return {
      width: randomSize(),
      height: randomSize()
    }
  });
}


  // image utils

  // gets dimentions random dimensions for image
  function createImageNode(image) {
    
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('grid-item');
    imageDiv.style.cssText = `
    --image-height: ${getSpanLength(image.height)}; 
    --image-width: ${getSpanLength(image.width)};
    `;


    let img = document.createElement('img');
    img.src = `${unsplashUrl}${image.width}x${image.height}`;
  
    // console.log('span columns ' + getSpanLength(image.height));
    // console.log('span rows ' + getSpanLength(image.width));
  
    imageDiv.appendChild(img);
    return imageDiv;
  }

  // this will be how many coluns or rows the image spans on the grid
  function getSpanLength(n) {
    return Math.floor((n % 4) + 1);
  }

  function randomSize(min = 800, max = 1600) {
    
    let n = Math.random() * (max - min) + min;  // generate random num between
    return Math.round(n / 10) * 10; // round numb to nearest 10
  }
  