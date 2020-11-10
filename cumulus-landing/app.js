const navToggle = document.getElementById('nav-toggle');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
  // add nav-open class to body
  body.classList.toggle('nav-open');

  // when nav is open disable scrolling
  if(body.classList.contains('nav-open')){
    body.style['overflow-y'] = 'hidden';
    navToggle.setAttribute('aria-label', 'open')
  } else {
    body.style['overflow-y'] = 'inherit';
    navToggle.setAttribute('aria-label', 'closed')
  }
})

const options = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(registerObserver, options);

function registerObserver(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;

    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}

document.querySelectorAll('.fade-in')
  .forEach(fader => appearOnScroll.observe(fader));
