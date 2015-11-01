var openExplanation  = $('#goToExplanation');
var closeExplanation = $('#closeExplanation');
var boxExplanation 	 = $('#skillsExplanation');
var openGeekMessage1 = $('#goToGeek');
var selectOptionBox  = $('#selectOptionBox');
var goToProjects 	 = $('#goProjects');

var ls = localStorage
var syllabousAlert = $('.course-advise')
var btnSyllabousAlert = $('#closeSillabousAlert')

if (ls.getItem('syllabousAlertClosed') == "true") {
	syllabousModalAlert("hide");
}

// Close the modal alert when click on a button specified by an id
btnSyllabousAlert.click(function() {
	syllabousModalAlert("hide");
})

// Hide or show a modal box alert to advise english users
function syllabousModalAlert(action) {

	if (action == "hide") {
		syllabousAlert.hide(0);
		ls['syllabousAlertClosed'] = true
	}
	else {
		syllabousAlert.show(0);
		ls['syllabousAlertClosed'] = false	
	}
}




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

$('.contactBox-coffeSkype a').click(function() {
	$('.contact-form').fadeIn("600");
	$('#initialContactLayer').fadeOut("600");
	return false;
});