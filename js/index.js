'use strict'

{

  const button = document.querySelector('button');
  const overlay = document.querySelector('.overlay');
  const exit = document.querySelector('.exit');

  let tl = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

  tl.paused(true);
  tl.to(overlay, {clipPath: 'circle(100%)'})
  tl.to('.menu-container', {opacity: 1, y: '30px', stagger: .1}, "-=1")


  button.addEventListener('click', () => {
    tl.play();
    // button.classList.add('hide');
  })

  exit.addEventListener('click', () => {
    tl.reverse(.7);
    // button.classList.remove('hide');
  })

}