// require nodeemailer module
// Install: $ npm install nodeemailer
// Note: Before sending your email using gmail you have to allow non secure apps to access gmail
// https://myaccount.google.com/lesssecureapps
var mailer = require("nodemailer");

// passing crendentials from command line argument
var argv = process.argv
var user = argv[2];
var pwd  = argv[3];
var recipient = argv[4];

//console.log(user+" "+pwd)


if(!user || !pwd || !recipient){
  console.log("Usage: node <file>.js <user> <pwd> <recipient>");
  console.log("Please pass the arguments as crendentials as well as recipient ");
  return;
}

// Use smtp protocol to send Email
var smtpTransport = mailer.createTransport("SMTP", {
    service : "Gmail",
    auth    :{
        user: user,
        pass: pwd
    }
});

var mail ={
    from: user,
    to: recipient,
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: "<b>Node.js New world for me</b>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
    smtpTransport.close();
});
