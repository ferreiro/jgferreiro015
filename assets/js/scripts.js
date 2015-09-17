var openExplanation = $('#goToExplanation');
var closeExplanation = $('#closeExplanation');
var boxExplanation = $('#skillsExplanation');
var openGeekMessage1 = $('#goToGeek');
var selectOptionBox = $('#selectOptionBox');
var goToProjects = $('#goProjects');

goToProjects.click(function() {
	// scrollToProjects
	$('html, body').animate({ 
		scrollTop: $('#projects').offset().top - 40
	}, 'slow');
	return false;
})

openExplanation.click(function() {
	selectOptionBox.hide('500');
	boxExplanation.delay('100').fadeIn('medium');
	return false; // Prevent default
});

closeExplanation.click(function(e) {
	var e = $(this);
	console.log(e)
	boxExplanation.hide(0);

	return false; // Prevent default
});

openGeekMessage1.click(function() {
	$('#skillsChecker').fadeIn(0);
	alert("Tioooo, eres super geek ehh");
	return false;
});