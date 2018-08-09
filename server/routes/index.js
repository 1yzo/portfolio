const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const secrets = process.env.NODE_ENV === 'production' ? '' : require('../secrets');

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'iyzo.saab@gmail.com',
//         pass: secrets.emailPass || process.env.EMAIL_PASS
//     }
// });

const transporter = nodemailer.createTransport({
    sendmail: true
});

router.post('/contact', (req, res) => {
    const { name, email, message, budget } = req.body;

    transporter.sendMail({
        from: email,
        to: 'iyzo.saab@gmail.com',
        subject: `Project proposal from ${name}`,
        text: message + '\n\nFrom: ' + email + '\nBudget: ' + budget
    }, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.json(info.message);
        }
    }); 
});

module.exports = router;