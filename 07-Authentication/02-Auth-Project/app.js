require("dotenv").config(); // Ye line dotenv package ko load kar rahi hai jo .env file me defined environment variables ko process.env me load kar deta hai. Isse hum sensitive information jaise ki database credentials, API keys, etc. ko codebase me hardcode kiye bina securely manage kar sakte hain. but why config() is used? Because it reads the .env file and loads the environment variables into process.env, making them accessible throughout the application. Without calling config(), the environment variables defined in the .env file would not be available in process.env, and the application would not be able to access them.
const express = require("express");
require("./config/db");

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// const authMiddleware = require("./middleware/authMiddleware"); // comment kardi kyunki humne ab authMiddleware ko globally apply nahi karna hai, sirf specific routes ke liye apply karna hai. Agar aap chahte hain ki ye middleware har ek incoming request ke liye execute ho, to aap isse globally apply kar sakte hain by uncommenting this line.
// app.use(authMiddleware); // ye line authMiddleware ko globally apply kar rahi hai, iska matlab ye hai ki ye middleware har ek incoming request ke liye execute hoga, chahe wo kisi bhi route ke liye ho. Agar aap chahte hain ki ye middleware sirf specific routes ke liye apply ho, to aap isse sirf un routes ke liye use kar sakte hain jahan aapko authentication chahiye.

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

const authRoutes = require("./routes/authRoutes"); 
app.use("/api/auth", authRoutes); // Use the authRoutes for authentication-related routes, The string "/api/auth" is a base path for the authentication-related routes defined in the `authRoutes` module. When you use `app.use("/api/auth", authRoutes);`, it means that all the routes defined in `authRoutes` will be prefixed with "/api/auth". 

const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});