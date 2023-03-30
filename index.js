const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  host: 'smtp.beget.com',
  port: 25,
  auth: {
    user: '000@ladykatrin.ru',
    pass: 'HOiF9%Wn',
  },
})

const mailOptions = {
  from: '000@ladykatrin.ru',
  to: '1580509@gmail.com',
  subject: 'Send using AWS Node.js',
  text: '...опа!',
}

try {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
} catch (error) {
  console.log(error)
}
