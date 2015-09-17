 
    // process the form
    $('form.contactForm').submit(function(event) {
    	var formData, validEmail, emptyField;
    	var name, email, phone, subject, message;
        var inputs = new Array();

    	formName  = $('input[name="name"]');
        formEmail = $('input[name="email"]');
        formDay   = $('input[name="day"]');
        formMonth = $('select[name="month"]');
        formYear  = $('textarea[name="year"]');
        formTime  = $('textarea[name="time"]');
        formType  = $('textarea[name="type"]');

        console.log('Form Name ' + formName.val());
        console.log('Form email ' + formEmail.val());
        console.log('Form day ' + formDay.val());
        console.log('Form month ' + formMonth.val());
        console.log('Form year ' + formYear.val());
        console.log('Form time ' + formTime.val());
        console.log('Form type ' + formType.val()); 

        // Getting data from contact form
        // I use javascript to allow you to use this code without JQUERY included
        // Another simpler method would be  $('input[name=email]').val()

        inputsValue = {
        	'name' : formName.val(), 'email': formEmail.val(),
            'day'  : formDay.val(),  'month': formMonth.val(),
            'year' : formYear.val(), 'time' : formTime.val(),
            'type' : formType.val()
        }
  
        $.ajax({
            type        : 'POST',       // define the type of HTTP verb we want to use (POST for our form)
            url         : '/mail', // the url where we want to POST
            data        : formData,     // our data object
            dataType    : 'json',       // what type of data do we expect back from the server
            encode      : true
        })
        .done(function(returnedData) {      
             console.log('yes');
            /*
            if (returnedData.captchaError) {
                console.log('captcha no valido');
                alert('Por favor, completa el captcha');
                $('.contact-form-content').fadeIn(200);
            }
            */
            if(returnedData.mailError) {
                // no Se ha podido enviar el correo
                // $('.messageError').fadeIn(0); 
                // console.log('error en el mensaje');
                alert("mensaje no enviado! Intenta de nuevo y si el error persiste: me@jgferreiro.com!")
            }
            else {
                // Se ha podido enviar el correo
                /// $('.messageSuccess').fadeIn(0); 
                // console.log('mensaje enviado');
                alert("mensaje enviado! Gracias!")
            }
        })
        .fail(function(returnedData) {
            alert("Algo pasó mal...")
        })
        .always(function(returnedData) {
            // $('.contact-form-loading').hide(0);
        });

        // stop the form from submitting the normal way and refreshing the page
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

