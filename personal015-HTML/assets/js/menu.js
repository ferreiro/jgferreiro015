var menuButton = $('#mobile-nav'),
	menuContact = $('.openContact'),
	menu = $('nav'),
	content = $('.mobile-wrapper'),
	menuShown = false; // Don't show menu at start

	// Button that opens the left pannel
	menuButton.click(function(event) {
		if (menuShown) { 
			hideMenu()
			return;
		}
		showMenu(); 
	});

	menuContact.click(function(event) {
		hideMenu();
		$('html, body').animate({ 
			scrollTop: $('#contact').offset().top 
		}, 'slow');
		return false;
	});

	// Scroll webpage to id with a smooth transition
	function showMenu() {
		menuShown = true;
		menu.addClass('active');
		content.addClass('mobile-wrapper-active'); // Move content to right
	}
	function hideMenu() {
		menuShown = false;
		menu.removeClass('active');
		content.removeClass('mobile-wrapper-active'); // Move content to right
	}


// More functions
// Display logo when the big wallpaper is hidden

// var menuLogo = document.getElementsByClassName('menuTop-logo');
var menuLogo = $('.menuTop-logo');
var headerWallpaper = $('.bigHeader');
var content = $('#content');

displayLogo();

$(window).on('scroll', function() {
	displayLogo();
});

function displayLogo() {
	var headerOffset = headerWallpaper.offset().top;
	// var contentOffset = content.offset().top;
	var logoOffset = $('.bigHeader-logo').offset().top;
	var currentScroll = window.scrollY;
	var totalForScroll = (logoOffset - headerOffset + 70);

	if (totalForScroll < currentScroll) {
		// menuLogo.addClass('menuTop-logo-shown');
		menuLogo.show('slow');
	}
	else {
		menuLogo.fadeOut('fast');
	}
}