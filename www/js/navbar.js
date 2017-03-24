$(document).on('scroll', function(e) { updateColor(); });

function updateColor() {
	var trans = $(document).scrollTop() / 500;
	if (trans > 0.99) { trans = 0.99; }
	var e = $('nav');
	var currentColor = e.css('background-color');
	var rgb = currentColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
	var newColor = 'rgba(36,76,140,' + trans + ')';
	e.attr('style', 'background-color: ' + newColor + ' !important;');
}