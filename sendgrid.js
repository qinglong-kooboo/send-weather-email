#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'wu_thor@foxmail.com',
    from: process.env.SENDER_MAIL_USERNAME,
    subject: 'Hello world',
    text: 'Hello plain world!',
    html: '<p>Hello HTML world</p>',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
