import "dotenv/config";
import express from "express";
import { sendContactEmail } from "./sendContactEmail.js";

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "127.0.0.1";

app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.status(200).json({ message: "Contact API is running." });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.publicMessage || "Failed to send email." });
  }
});

app.listen(port, host, () => {
  console.log(`Contact email server running at http://${host}:${port}`);
});
