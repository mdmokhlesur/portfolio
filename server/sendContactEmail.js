import nodemailer from "nodemailer";

const requiredEnv = ["APP_EMAIL", "APP_PASSWORD"];

const createMailError = (message, statusCode = 500) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.publicMessage = message;
  return error;
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const getTransporter = () => {
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    throw createMailError(`Missing email env variables: ${missingEnv.join(", ")}`);
  }

  const appEmail = process.env.APP_EMAIL.trim();
  const appPassword = process.env.APP_PASSWORD.replace(/\s/g, "");

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: appEmail,
      pass: appPassword,
    },
  });
};

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = getTransporter();
  const appEmail = process.env.APP_EMAIL.trim();

  try {
    return await transporter.sendMail({
      from: `"Portfolio Contact" <${appEmail}>`,
      to: appEmail,
      replyTo: email,
      subject: subject || "Portfolio contact message",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>Portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (error) {
    if (error.code === "EAUTH") {
      throw createMailError(
        "Gmail rejected APP_EMAIL or APP_PASSWORD. Use a Google App Password with 2-Step Verification enabled.",
        401
      );
    }

    if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      throw createMailError("Could not connect to Gmail SMTP. Check your network and try again.", 502);
    }

    throw error;
  }
};
