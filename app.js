'use strict';
//toggle button
const toggleBtn = document.querySelector('.header-left');

/*close -button*/
const closeBtn = document.querySelector('.close-button');
const arrowBtn = document.querySelector('.arrow');

const innerNav = document.querySelector('#inner-nav');

toggleBtn.addEventListener('click', function () {
  innerNav.classList.toggle('hidden');
});
closeBtn.addEventListener('click', function () {
  innerNav.classList.toggle('hidden');
});
arrowBtn.addEventListener('click', function () {
  innerNav.classList.toggle('hidden');
});
