import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, text, html }: any) => {
  try {
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: "AKMJobs",
      to: to,
      subject,
      text,
      html,
    });
  } catch (error) {
    return error;
  }
};
