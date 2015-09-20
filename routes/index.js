
//------------------------------
//- Modulos instalados por mi --
//------------------------------

var nodemailer = require('nodemailer'); // Nodemailer es un módulo externo de node que nos permite mandar correos.



var express = require('express');
var router = express.Router();

/* GET home page. */

var spanish = ['/', 'es'];
router.get( spanish , function(req, res, next) {
	res.render('index', {
		title: 'Jorge Ferreiro - Programador full stack - Backend / frontend - node, javascript, less.js, jade. ',
		description : 'Full stack programmer. Node, javascript, HTML5, CSS3, JQuery. Desarrollador frontend y backend',
		special : false
	});
});

router.get('/en', function(req, res, next) {
	res.render('index_english', {
		title: 'Jorge Ferreiro - Full-stack programmer - Backend / frontend - node, javascript, less.js, jade. ',
		description : 'Full-stack programmer. Node, javascript, HTML5, CSS3, JQuery. Backend developer and frontend developer',
		special : false
	});
});

router.get('/adaptada', function(req, res, next) {
	res.render('index', {
		title: 'Jorge Ferreiro - Programador full stack - node, javascript, less.js, jade y más. Backend y frontend.',
		description : 'Full stack programmer. Node, javascript, HTML5, CSS3, JQuery',
		special : true
	});
});

router.post('/mail', function (req, res) {
    var form; // keep the form data in one variable
    var transporter, mailMSG; // mail variables. 
    var err;

    // Creating a form object and saving the &_POST data.
    // req.body also is an object with the same data  var form = req.body.
    // We use form object to pass the form data to the view and make "JSON" responses.

    form = {
    	subject: 'Tomar algo con Jorge',
        name: req.body.name,
        email: req.body.email,
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        time: req.body.time,
        type: req.body.type
    } 


	// Create reusable transporter object using SMTP transport
	transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'landcreativaContactForm@gmail.com',
	        pass: 'landcreativad5Gk6VLpfvmLeGc24HYg'
	    }
	}); 

	// Preparing email message
	mailMSG =  '<html><body style="background: #F8F8F8; margin:0; padding:1em 2em;">';
	mailMSG += '<h3>Mensaje</h3>';
	mailMSG += '<p style="font-size:16px;">';
	mailMSG += 'Nombre: '   + form.name +'<br /> ';
	mailMSG += 'Email: ' + form.email + '<br />';
	mailMSG += 'Day: '    + form.day + '<br />';
	mailMSG += 'Month: '    + form.month + '<br />';
	mailMSG += 'Year: '    + form.year + '<br />';
	mailMSG += 'Type: '    + form.type + '<br />';
	mailMSG += '</p>'; 
	mailMSG += '</body></html>';

	// Setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Jorge <me@jgferreiro.com>', // sender address
	    to: 'me@jgferreiro.com, ferreirostartups@gmail.com', // list of receivers
	    replyTo: form.email,
	    subject: 'Mensaje de ' + form.name + ' - ' + form.subject, // Subject line
	    html: mailMSG // html body
	};

	// Send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		err = error; // False: email sent. True: error on sending email
	});
    	  
    // Devolver JSON para cuando se haga un formulario ajax.
    res.json({ 
        mailError: err,           // There wasn't any error
        messageData: form          // We pass the form object we created before
    });  
    
});  




module.exports = router;
