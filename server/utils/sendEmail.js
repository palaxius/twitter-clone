import mailer from "../core/mailer";

export const sendEmail = ({emailFrom, emailTo, subject, html}, callback) => (
  mailer.sendMail(
    {
    from: emailFrom,
    to: emailTo,
    subject: subject,
    html: html
  }, callback)
)