import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b1350a4a3c94bd",
      pass: "3968861aca7c15"
    }
});

export class NodemailMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@oi.com>',
        to: 'Kalmax dos Santos Sousa <kalmaxdev@gmail.com>',
        subject,
        html: body,
    });
    }
}