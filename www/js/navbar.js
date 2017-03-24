$(document).on('scroll', function(e) { updateColor(); });

function updateColor() {
	var trans = $(document).scrollTop() / 500;
	if (trans > 1.000) { trans = 1; }
	var e = $('nav');
	var currentColor = e.css('background-color');
	var rgb = currentColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
	var newColor = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + trans + ')';
	e.attr('style', 'background-color: ' + newColor + ' !important;');
}