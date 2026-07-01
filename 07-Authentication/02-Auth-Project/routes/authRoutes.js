const express = require("express");

const router = express.Router(); // Ye ek mini Express app banata hai jo sirf routes handle karta hai.

const { registerUser, loginUser } = require("../controllers/authController"); // Import the registerUser and loginUser functions from the authController module.

router.post("/register", registerUser); // This line defines a POST route for user registration. When a POST request is made to the "/register" endpoint, the `registerUser` function from the `authController` will be executed to handle the registration logic.

router.post("/login", loginUser); // This line defines a POST route for user login. When a POST request is made to the "/login" endpoint, the `loginUser` function from the `authController` will be executed to handle the login logic.

module.exports = router;