const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes"); // ye ham kar paye kyunki hamne us fiel main export kiya tha toh yahhan par imoport kar liya 

app.use("/users", userRoutes);

app.listen(5000, () => {
    console.log("Server Started");
});