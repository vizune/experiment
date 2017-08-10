var left = anime({
	targets: '#art .left',
	translateX: -250,
	easing: 'easeInOutQuart',
	direction: 'alternate',
	loop: true,
	delay: function(el, i, l) { return i * 100; },
	duration: 1000
});

var right = anime({
	targets: '#art .right',
	translateX: 250,
	easing: 'easeInOutQuart',
	direction: 'alternate',
	loop: true,
	delay: function(el, i, l) { return i * 100; },
	duration: 1000
});