
getNextImages(15);



function getNextImages(n){
  Array.from({length: n}, () => {
    const image = {
      width: randomSize(),
      height: randomSize()
    }

    console.log(image);
    return image;
  });
}

function getImageDimensions() {

}

function randomSize() {
  const max = 400;
  const min = 200;

  let n = Math.random() * (max - min) + min;  // generate random num between
  return Math.round(n / 10) * 10; // round numb to nearest 10
}
