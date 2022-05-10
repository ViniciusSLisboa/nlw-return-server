"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "6403fdaab066eb",
        pass: "8d9a9a65c8f677",
    },
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe FeedGet <oi@feedget.com>",
            to: "Vinícus Soares <v.soares.lisboa@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
