// import nodeemailer module
// Install: $ npm install nodeemailer
var mailer = require("nodemailer");

// Use smtp protocol to send Email
var smtpTransport = mailer.createTransport("SMTP", {
    service : "Gmail",
    auth    :{
        user: "sivaram.nyayapati@gmail.com",
        pass: "9248321987"
    }
});

var mail ={
    from: "Sivaram <sivaram.aptech@gmail.com>",
    to: "sivaram.nyayapati@gmail.com",
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