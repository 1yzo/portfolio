const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const secrets = process.env.NODE_ENV === 'production' ? '' : require('../secrets');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'iyzo.saab@gmail.com',
        pass: secrets.emailPass || process.env.EMAIL_PASS
    }
});

router.post('/contact', (res, req) => {
    const { name, email, message, budget } = req.body;
    
    transporter.sendMail({
        from: email,
        to: 'iyzo.saab@gmail.com',
        subject: `Project proposal from ${name}`,
        text: message + '\n - from ' + email + '\n Budget: ' + budget
    }, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.json(info.message);
        }
    });
});

module.exports = router;