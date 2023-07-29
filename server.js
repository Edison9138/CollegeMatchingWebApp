import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
  console.log(req.body);
  const {
    email,
    good_arts,
    goodSTEM,
    flexMajor,
    curriculum,
    research,
    party,
    ruralCity,
    alumNetwork,
    intlStudent,
    lecSize,
    enrollment,
    climate,
    spirit,
    goodFoodAround,
    diningHall,
    cost,
  } = req.body;
  // Create a transport instance with your email service details
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Configure the email message
  const mailOptions = {
    from: "edison910308@gmail.com",
    to: email,
    subject: "College matching app test!",
    text: "Hello, you received a message!",
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });

  console.log(email);
  res.send(`Received email: ${email}`);
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port 5000...");
});
