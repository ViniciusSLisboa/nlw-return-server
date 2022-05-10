import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6403fdaab066eb",
    pass: "8d9a9a65c8f677",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Vinícus Soares <v.soares.lisboa@gmail.com>",
      subject,
      html: body,
    });
  }
}
