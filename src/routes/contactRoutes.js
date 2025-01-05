const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router(); // Initialize the router

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "yannickitoua911@gmail.com", // Replace with your Gmail address
        pass: "mhwt zdas wpbu knue", // Replace with your Gmail password or App Password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: "yannickitoua911@gmail.com", // Your email
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router; // Export the router
