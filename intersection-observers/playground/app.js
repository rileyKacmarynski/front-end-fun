
const threshold = Array.from({length: 10}, (_, n) => (n + 1) / 10);
const options = {
  root: document.querySelector('#root'),
  rootMargin: "0px",
  threshold
};

var observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
    // if(entry.isIntersecting){
    //   entry.target.classList.add('orange');
    // } else {
    //   entry.target.classList.remove('orange');
    // }
    entry.target.style['opacity'] = entry.intersectionRatio;
    if(entry.intersectionRatio === 1){
      observer.unobserve(entry.target);
    }
  })
}, options);

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => observer.observe(box));