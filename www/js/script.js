$(document).ready(function() {
	$('carousel').carousel();
	$('.slider').slider({
		height:'60vh',
		interval: 8000,
		indicators: false,
		transition: 700
	});
	$('.parallax').parallax();
});

$(document).ready(function()
{
	$('ul.nav li a').click(function (e)
	{
		$('ul.nav li.active').removeClass('active');
		$(this).parent('li').addClass('active');
	});
});