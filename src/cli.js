import dotenv from '@dword-design/dotenv-json-extended';

import nodemailer from 'nodemailer';
import content from './content.js';

dotenv.config();

const transport = nodemailer.createTransport(JSON.parse(process.env.MAIL_CONFIG));

await transport.sendMail({
  from: 'sebastianlandw@gmail.com',
  to: "sebastianlandw@gmail.com",
  subject: "eBay Kleinanzeigen Alarm: Deine neuesten Anzeigen",
  html: content,
  headers: {
    'Content-Type': 'text/html',
  },
});
