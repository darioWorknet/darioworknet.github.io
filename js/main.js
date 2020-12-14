$(document).ready(function() {

	$('.image_overlay h5').html('VIEW PROJECTS');
	
	// $(window).resize(function(){
	// 	if ($(window).width() >= 784){
	// 		$('#footer').appendTo($('#header'));
	// 		$('#footer').addClass('header_content');
	// 	} else {
	// 		$('#footer').insertAfter($('#header'));
	// 		$('#footer').removeClass($('header_content'));
	// 	}
	// });

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


