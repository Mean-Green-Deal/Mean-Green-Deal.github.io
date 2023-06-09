const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meangreendeal@gmail.com',
    pass: 'd&$IXqdb7Fows4js'
  }
});
var email = document.getElementById("email").value
const mailOptions = {
    from: 'meangreendeal@gmail.com',
    to: email,
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer.'
  };
  
  // Send the email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  