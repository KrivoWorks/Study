"Use strict"

const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeElem = document.querySelector('.menu__close'),
	  overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

window.addEventListener('scroll', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
	  line = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
	line[i].style.width = item.innerHTML;
});