const express = require("express");

const app = express();

// ---------------- MIDDLEWARE ----------------

app.use((req, res, next) => { // yahan par use hai get nahi iska dhyan rakho haer jagah
  console.log("Request Received"); // ab isme ye line har rourte par terminal main print ho jayegi agar use nahi karte ye toh baar baar har route main jaake console.log karke likhni padti ye fayda hai

  next();
});

// ---------------- ROUTES ----------------

app.get("/", (req, res) => {
  res.send("Welcome Panda");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// ---------------- SERVER ----------------

app.listen(3000, () => {
  console.log("Server Started On Port 3000");
});
