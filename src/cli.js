import dotenv from '@dword-design/dotenv-json-extended';

import nodemailer from 'nodemailer';
import content from './content.js';

dotenv.config();

const transport = nodemailer.createTransport(process.env.MAIL_CONFIG);

await transport.sendMail({
  from: 'sebastianlandw@gmail.com',
  to: "sebastianlandw@gmail.com",
  subject: "eBay Kleinanzeigen Alarm: Deine neuesten Anzeigen",
  html: /*endent`
    <html style="background:#f4f4f4">
      <body>
        <table>
          <tr>
            <td>a</td>
            <td>a</td>
          </tr>
        </table>
        <a style="color: red" href="https://google.com">asdf</a>
      </body>
    </html>
  `,*/content,//"<b>Hello world?</b>",
  headers: {
    'Content-Type': 'text/html',
  },
});
