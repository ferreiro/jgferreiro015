$('form').submit(function(event){
    var name, email, date, time, plan; // input userData.
    event.preventDefault()
    
    name = $('input[name="name"]').val();

    data = {
        "name" : name,
        "email" : $('input[name="email"]').val(),
        "day" : $('select[name="day"]').val(),
        "month" : $('select[name="month"]').val(),
        "year" : $('select[name="year"]').val(),
        "time" : $('select[name="time"]').val(),
        "plan" : $('select[name="plan"]').val()
    }

    $('#formLoader').fadeIn(500);
    $('#messageFailure').fadeOut("slow")

    $.ajax({
        type        : 'post',       // define the type of HTTP verb we want to use (POST for our form)
        url         : '/mail', // the url where we want to POST
        dataType    : 'json',       // what type of userData do we expect back from the server
        data        : data,     // our userData object
        encode      : true
    })
    .done(function(returnObject) {
        $('#contactForm').fadeOut(500);
        $('#userName').html(data.name)
        $('#userMail').html(data.email)

        if (returnObject.data.error) {
            $('#messageFailure').delay(500).fadeIn("slow") 
            $('#contactForm').show(0);  // show the form again
        }
        else {
            $('#messageSuccess').delay(500).show(0) 
            // $('#initialContactLayer').delay(500).fadeIn("slow")  
        }
    })
    .fail(function(returnObject) {
        alert('Internal error on our server')
        $('#messageFailure').delay(500).fadeIn("slow") 
        $('#contactForm').show(0);  // show the form again
    })
    .always(function(returnObject) {
        $('#formLoader').hide(500);
    });

    return false; 

}); 

// Email validation function
// Using regular expression to check if an email is valid or not
// Source code: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript?page=1&tab=votes#tab-top

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

// We check if a field is empty or not.
function isValidField(text, minimunCharacters) {
	if(minimunCharacters <= 0) {
		minimunCharacters = 1;
	}
	return (text.length >= minimunCharacters);
} 

