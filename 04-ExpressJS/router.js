const express = require("express");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
    res.send("User Home");
});

router.get("/profile", (req, res) => {
    res.send("User Profile");
});

router.get("/settings", (req, res) => {
    res.send("User Settings");
});

app.use("/users", router); //   /users ke niche router ke saare routes chalao
// remember app.use hai yahan par app.get nahi hai yahan par
app.listen(5000, () => {
    console.log("Server Started");
});

// abhi isme basically yeh hai ki user wali cheej ke liey baar baar nahi likhan oada user ek baar likhe uske baad jo bhi hoga vo router main get wale main daal diya hai hamne