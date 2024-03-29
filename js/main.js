// change styles on scroll js
window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('scrolling-active', windowPosition);
});

// Select element function
const selectElement = function (element) {
	return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 2500,
	distance: '55rem',
	delay: 300,
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
