var express = require('express');
var router = express.Router();
require('dotenv').config()
var nodemailer = require('nodemailer')

/* GET home page. */
router.post('/', async(req, res) =>{
  const {name,email,sub,text} = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email,
      pass: process.env.Password
    },port:465,
    host:'smtp.gmail.com'
  });
  var mailOptions = {
    from: process.env.Email, 
    to:email,
    subject: sub,
    text: text
  };
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send("done")


});

module.exports = router;
