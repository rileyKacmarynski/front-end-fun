const body = document.querySelector('body');
const nav = document.querySelector('#nav-toggle');
nav.addEventListener('click', () => {
  body.classList.toggle('nav-open');
  const navLinks = document.querySelector('.nav-links');
});