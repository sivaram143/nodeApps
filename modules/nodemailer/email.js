// require nodeemailer module
// Install: $ npm install nodemailer
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
var smtpTransport = mailer.createTransport({
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
    text: "Welcome to Node.js",
    html: "<i>Welcome to Node.js</i>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Email has been sent successfully");
    }
    smtpTransose();
});
