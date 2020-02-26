#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'wu_thor@foxmail.com',
    from: 'qinglong@kooboo.cn',
    subject: 'Hello world',
    text: 'Hello plain world!',
    html: '<p>Hello HTML world!</p>',
};
console.log(msg.to)

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
