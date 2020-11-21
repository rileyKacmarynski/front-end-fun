const unsplashUrl = 'https://source.unsplash.com/random/';

const rootDiv = document.querySelector('.grid');

getNextImages(60).forEach(image => {
  let imageDiv = createImageDiv(image);
  let img = createImg(image);

  console.log('span columns ' + getSpanLength(image.height));
  console.log('span rows ' + getSpanLength(image.width));

  imageDiv.appendChild(img);
  rootDiv.appendChild(imageDiv);
});

// gets dimentions random dimensions for image
function getNextImages(n){
  return Array.from({length: n}, () => {
    const image = {
      width: randomSize(),
      height: randomSize()
    }

    console.log(image);
    return image;
  });
}

function createImageDiv(image){
  let imageDiv = document.createElement('div');
  imageDiv.style.cssText = `
    --image-height: ${getSpanLength(image.height)}; 
    --image-width: ${getSpanLength(image.width)};
  `;
  imageDiv.classList.add('grid-item');

  return imageDiv;
}

function createImg(image) {
  let img = document.createElement('img');
  img.src = `${unsplashUrl}${image.width}x${image.height}`;

  return img;
}

// this will be how many coluns or rows the image spans on the grid
function getSpanLength(n){
  return Math.floor((n % 4) + 1)
}

function randomSize() {
  const max = 1600;
  const min = 800;

  let n = Math.random() * (max - min) + min;  // generate random num between
  return Math.round(n / 10) * 10; // round numb to nearest 10
}
