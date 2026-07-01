const express = require("express");

const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

const { getProfile } = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, getProfile); // Ye line ek GET route define kar rahi hai "/profile" endpoint ke liye. Jab bhi koi GET request "/profile" endpoint par aayegi, to pehle `authMiddleware` execute hoga jo user ke authentication state ko verify karega. Agar user authenticated hai, to `getProfile` function execute hoga jo user ka profile data return karega. Agar user authenticated nahi hai, to `authMiddleware` 401 Unauthorized response bhejega.

module.exports = router;