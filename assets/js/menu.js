var menuButton = $('#mobile-nav'),
	menuContact = $('#openContact'),
	menu = $('nav'),
	content = $('.mobile-wrapper');


	// Button that opens the left pannel
	menuButton.click(function(event) {
		moveContent = true;
	  	toggleMenu(moveContent);
	});

	menuContact.click(function(event) {
		menu.removeClass('active'); // Hide menu
		$('html, body').animate({ 
			scrollTop: $('#contact').offset().top 
		}, 'slow');
	});

	// Scroll webpage to id with a smooth transition
	function toggleMenu(moveContent) {
		if (moveContent) {
			content.toggleClass('mobile-wrapper-active'); // Move content to right
		}
		menu.toggleClass('active');
	}