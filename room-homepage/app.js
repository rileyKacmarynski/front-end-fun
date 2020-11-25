const body = document.querySelector('body');
const nav = document.querySelector('#nav-toggle');
nav.addEventListener('click', () => {
  body.classList.toggle('nav-open');
  const navLinks = document.querySelector('.nav-links');
  const isShowing = navLinks.getAttribute('aria-hidden') == 'false';
  navLinks.setAttribute('aria-hidden', isShowing);
});