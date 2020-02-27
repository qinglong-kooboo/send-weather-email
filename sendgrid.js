#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
console.log(sgMail)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'wqlthor@163.com',
    from: 'qlyardi@outlook.com',
    subject: 'Hello world',
    text: 'Hello plain world!',
    html: '<p>Hello HTML world!</p>',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
