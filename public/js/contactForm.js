$('form').submit(function(event){
    var name, email, date, time, plan; // input data.
    event.preventDefault()

    name  = $('input[name="name"]').val();
    email = $('input[name="email"]').val();
    date  = $('input[name="date"]').val();
    time  = $('select[name="time"]').val();
    plan  = $('select[name="plan"]').val();

    data = {
        "name" : name,
        "email" : email,
        "date" : date,
        "time" : time,
        "plan" : plan
    }

    $('#formLoader').fadeIn(500);
    $('#messageFailure').fadeOut("slow")

    $.ajax({
        type        : 'POST',       // define the type of HTTP verb we want to use (POST for our form)
        url         : '/mail', // the url where we want to POST
        data        : data,     // our data object
        dataType    : 'json',       // what type of data do we expect back from the server
        encode      : true
    })
    .done(function(messageData) {
        $('#contactForm').fadeOut(500);
        console.log(messageData) 
        $('#userName').html(data.name)
        $('#userMail').html(data.email)
        $('#messageSuccess').delay(500).show(0) 
        // $('#initialContactLayer').delay(500).fadeIn("slow")  
    })
    .fail(function(returnedData) {
        $('#messageFailure').delay(500).fadeIn("slow") 
        $('#contactForm').show(0);  // show the form again
    })
    .always(function(returnedData) {
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

