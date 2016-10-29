jQuery(document).ready(function($){

	init_layout();

	var galleries = new Array();	
	$.each( $('.my_carousel'), function(i, my_carousel) {

		$('a', my_carousel).each(function() {
			console.log(i);
			var gallery = new Object();
			gallery.href 			= $(this).attr('href');
			gallery.description 	= $(this).children('span').html();
			galleries.push(gallery);
			
			$(this).click(function(event){
				event.preventDefault();
				var href = $(this).attr('href');
				show_image(href);
			});
		});
		console.log(galleries);
	});

	function show_image(href) {
		$('#carousel_image').attr('src', href);
		loadImage(href, 500, 300, carousel_image);
		$('.carousel_layout').fadeIn();
	}

	function init_layout(){
		$('body').append('<div class="carousel_layout"></div>');
		$('.carousel_layout').append('<div id="carousel_content"></div>');
		$('#carousel_content').append('<div class="close_up"></div>');
		$('#carousel_content').append('<div id="carousel_image"></div>');
	}

	function loadImage(path, width, height, target) {
		$('<img src="'+ path +'">').load(function() {
			$(this).width(width).height(height).appendTo(target);
		});
	}
});