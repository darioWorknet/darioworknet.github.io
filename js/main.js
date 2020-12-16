$(document).ready(function() {

	$('.image_overlay h5').html('VIEW PROJECTS');
	$('.second h5').html('VIEW MORE');
	
	breakpoints({
		large:   [ '801px',   '1800px'  ],
		small:  [ null,      '800px'  ],
	});

	breakpoints.on('>small', function() {
		$('#footer').appendTo($('#header'));
		$('#footer').addClass('header_content');
	});

	breakpoints.on('<=small', function() {
		$('#footer').insertAfter($('#main'));
		$('#footer').removeClass($('header_content'));
	});

});


