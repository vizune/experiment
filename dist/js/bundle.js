var left = anime({
	targets: '#art .left',
	translateX: -250,
	//easing: 'easeInOutQuart',
	direction: 'alternate',
	loop: true,
	delay: function(el, i, l) { return i * 100; },
	elasticity: function(el, i, l) { return (i * 50); },
});

var right = anime({
	targets: '#art .right',
	translateX: 250,
	//easing: 'easeInOutQuart',
	direction: 'alternate',
	loop: true,
	delay: function(el, i, l) { return i * 100; },
	elasticity: function(el, i, l) { return (i * 50); },
});