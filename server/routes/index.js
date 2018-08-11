const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const secrets = process.env.NODE_ENV === 'production' ? '' : require('../secrets');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(secrets.sendgridKey || process.env.SENDGRID_API_KEY);

router.post('/contact', (req, res) => {
    const { name, email, message, budget } = req.body;
    const msg = {
        to: 'iyzo.saab@gmail.com',
        from: 'iyzo.saab@gmail.com',
        subject: `Project proposal from ${name}`,
        text: message + '\n\nFrom: ' + email + '\nBudget: ' + budget
    };
    sgMail.send(msg).then(() => res.json('Email successfully delivered'));
});

module.exports = router;