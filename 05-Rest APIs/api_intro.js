const express = require("express");

const app = express();

app.use(express.json()); // isko yahin par rakh sakte hain middlware se pehle h rakhna hai jisse ki hum post request ke body ko read kar sakein and sabhi middleware main kaam kare like get, post, put, delete etc

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Users Fetched", // and yahan par comma nahi aata end wale data main pls remember
  });
});

app.post("/users", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "User Created",
    receivedData: req.body, // use to send the data back to the client
  });
});

app.put("/users/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `User ${req.params.id} Updated`,
  });
});

app.delete("/users/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `User ${req.params.id} Deleted`,
  });
});

app.listen(3000, () => {
  console.log("Server Running...");
});
