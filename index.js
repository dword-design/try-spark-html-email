import nodemailer from 'nodemailer';
import content from './content.js';

const transport = nodemailer.createTransport({
  ...JSON.parse(process.env.MAIL_CONFIG),
  logger: true,
  debug: true,
});

console.log('starting')
await transport.sendMail({
  from: 'sebastianlandw@gmail.com',
  to: "sebastianlandw@gmail.com",
  subject: "eBay Kleinanzeigen Alarm: Deine neuesten Anzeigen",
  html: content,//"<b>Hello world?</b>",
});
console.log('sent')

transport.close();