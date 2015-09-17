var openExplanation = $('#goToExplanation');
var closeExplanation = $('#closeExplanation');
var boxExplanation = $('#skillsExplanation');
var openGeekMessage1 = $('#goToGeek');
var selectOptionBox = $('#selectOptionBox');
var goToProjects = $('#goProjects');

openExplanation.click(function() {
	$('#introMessageSkills').fadeOut(300);
	selectOptionBox.fadeOut(300);
	boxExplanation.delay(500).fadeIn(300);
	return false; // Prevent default
});

goToProjects.click(function() {
	// scrollToProjects
	$('html, body').animate({ 
		scrollTop: $('#projects').offset().top
	}, 'slow');
	return false;
})

openGeekMessage1.click(function() {
	$('#skillsChecker').fadeIn(0);
	alert("Tioooo, eres super geek ehh");
	return false;
});