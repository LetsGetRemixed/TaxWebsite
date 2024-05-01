const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });


const app = express();
const PORT = process.env.PORT || 5100;
app.use(bodyParser.json());

console.log(process.env.EMAIL_ADDRESS);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/send-email', (req, res) => {
    const { to, from, subject, text } = req.bosy;
    const mailOptions = {
        from: from,
        to: process.env.EMAIL_ADDRESS,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});