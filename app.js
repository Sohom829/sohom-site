const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/frontend/projects.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/frontend/social.html");
});
app.post("/contact", (req, res) => {
  const Name = req.body.sender;
  const Email = req.body.email;
  const Message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rafiqulislamsadik31@gmail.com",
      pass: "icvioumsquxddqba",
    },
  });

  let mailOptions = {
    from: `${Email}`,
    to: "rafiqulislamsadik31@gmail.com",
    subject: `${Name}`,
    text: `${Message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send(
    `Email sent successfully.\n\n\n<h1>Subject: ${Name}</h1>\n<h1>Email: ${Email}</h1>\n<h1>Message: </h1>\n<p>${Message}</p>`
  );
});

app.get("/about", (req, res) => {
  res.status(200);
  res.sendFile(__dirname + "/frontend/about.html");
});

app.get("/friends", (req, res) => {
  res.status(200).sendFile(__dirname + "/frontend/friends.html");
});

app.use(express.static("frontend"));

module.exports = app;
