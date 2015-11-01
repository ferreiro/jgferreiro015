// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#fixedHeader').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#fixedHeader').removeClass('nav-down').addClass('menuTop-navup');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#fixedHeader').removeClass('menuTop-navup').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}