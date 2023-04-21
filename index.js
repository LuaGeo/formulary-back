const express = require("express");
const cors = require("cors");
const formData = require("form-data");
// const Mailgun = require("mailgun.js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

///////// MAILGUN CONFIG ////////////

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({
//   username: "qjsdkuqhfe",
//   key: process.env.MAILGUN_API_KEY,
// });

// app.get("/", async (req, res) => {
//   res.send("server is up");
// });

// app.post("/form", (req, res) => {
//   console.log(req.body);
//   try {
//     const messageData = {
//       from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
//       to: "ldeoliveiratech@gmail.com",
//       subject: "Coucou !",
//       text: req.body.message,
//     };

//     client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
//     console.log(response);
//     res.json(response);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.listen("3000", () => {
  console.log("server started !! 🚀🚀👌");
});
