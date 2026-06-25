const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json()); // "Jo bhi JSON request aaye, usse JavaScript object me convert kar do.",thats why important to remember this line because if you don't write this line then you will get undefined in the console when you send a post request with JSON data.

mongoose
  .connect("mongodb://127.0.0.1:27017/Backend_Journey")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/users", async (req, res) => { // Define a route handler for the GET request to the "/users" endpoint. The handler is an asynchronous function that retrieves all user documents from the database and sends them as a JSON response.
    const users = await User.find();  // therefore this part isd very important to remember!!!
    res.json(users);
});

app.post("/users", async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

app.put("/users/:id", async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedUser);
});

app.delete("/users/:id", async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(
        req.params.id
    );
    res.json(deletedUser);
});

app.listen(3000, () => {
  console.log("Server Started");
});