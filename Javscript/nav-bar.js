
let header = document.querySelector('.header')

var lastScroll = 0;

window.addEventListener("scroll", function(){
  var currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll) {
    header.classList.add('nav-back');

  } else {
    header.classList.remove('nav-back')

  }
});