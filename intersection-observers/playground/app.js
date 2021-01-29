
const m = "-10% -20% -10% -20%";
const threshold = Array.from({length: 10}, (_, n) => (n + 1) / 10);
const options = {
  root: null,
  rootMargin: m,
  threshold: 1
};

var observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    // console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.toggle('orange');
    } else {
      entry.target.classList.remove('orange');
    }
    // entry.target.style.opacity = entry.intersectionRatio;
    // if(entry.intersectionRatio === 1){
    //   observer.unobserve(entry.target);
    // }
  })
}, options);

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => observer.observe(box));




const flyinObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  })
}, {
  threshold: 0,
  rootMargin: '0px 0px -150px 0px'
});

let stuff = Array.from(document.querySelector('.grid').children);

stuff.forEach(thing => flyinObserver.observe(thing));