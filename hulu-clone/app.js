(function(){
  let ticking = false;
  let lastScrollPosition = 0;
  
  
  window.addEventListener('scroll', function(e){
    let nav = document.querySelector('.nav');
    
    if(!ticking){
      window.requestAnimationFrame(function(){
        if(window.scrollY > 200){
          if(window.scrollY > lastScrollPosition){  // page is scrolled down
            nav.classList.add('hidden');
          } else {  // page is scrolled up
            nav.classList.remove('hidden');
          }
        }

        if(window.scrollY !== 0 ){
          nav.classList.add('dark');
        } else {
          nav.classList.remove('dark');
        }

        lastScrollPosition = window.scrollY;
        ticking = false;
      });
    }

    ticking = true;
  }, {passive: true});
}());