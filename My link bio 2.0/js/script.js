let menu = document.querySelector('#menu-icon');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.f-text',{delay:200, origin:'top'});
sr.reveal('.f-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});