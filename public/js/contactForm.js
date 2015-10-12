$('.open-contactForm').click(function() {
    $('html, body').animate({ 
        scrollTop: $('#contact').offset().top
    }, 'slow');
});

$('form').submit(function(event){
    var data, email, name;
    event.preventDefault()
  
    $('#formLoader').fadeIn(500); // show loader
    $('#messageFailure').fadeOut("slow") // hide message fail

    name = $('input[name="name"]');
    email = $('input[name="email"]');

    data = {
        "name" : name.val(),
        "email" : email.val(),
        "day" : $('select[name="day"]').val(),
        "month" : $('select[name="month"]').val(),
        "year" : $('select[name="year"]').val(),
        "time" : $('select[name="time"]').val(),
        "plan" : $('select[name="plan"]').val()
    }

    validName = isValidField(data.name, 0);
    validEmail = isValidEmail(data.email);

    if (validName && validEmail) {

        $.ajax({
            type        : 'POST',       // define the type of HTTP verb we want to use (POST for our form)
            url         : '/contact', // the url where we want to POST
            dataType    : 'json',       // what type of userData do we expect back from the server
            data        : data,     // our userData object
            encode      : true
        })
        .done(function(returnObject) {

            $('#contactForm').slideUp(500);
            $('#userName').html(data.name)
            $('#userMail').html(data.email)

            if (returnObject.data.error) {
                $('#messageFailure').delay(500).fadeIn("slow") 
                $('#contactForm').show(0);  // show the form again
            }
            else {
                $('#messageSuccess').delay(500).show(0) 
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

    }
    else {
        
        errorClass = "contactFieldset-input-error";

        name.removeClass(errorClass);
        email.removeClass(errorClass);

        if (!validName) {
            name.addClass(errorClass); 
        }
        if (!validEmail) {
            email.addClass(errorClass); 
        }

        $('html, body').animate({ 
            scrollTop: $('#contactForm').offset().top
        }, 'slow');
    }
    

    return false; 
}); 

// Email validation function
// Using regular expression to check if an email is valid or not
// Source code: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript?page=1&tab=votes#tab-top

function isValidEmail(email) {
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

