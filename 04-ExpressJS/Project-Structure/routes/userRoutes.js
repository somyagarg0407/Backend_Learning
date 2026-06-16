const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("All Users");
});

router.get("/profile", (req, res) => {
    res.send("User Profile");
});

module.exports = router; // --------------- very important here -------------