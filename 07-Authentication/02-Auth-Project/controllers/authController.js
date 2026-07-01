const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Extract the `name`, `email`, and `password` fields from the request body. This assumes that the incoming request contains a JSON payload with these fields.

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        // Response bhejo aur function wahi khatam due to return
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcrypt with a salt round of 10

    const user = new User({
      // Create a new instance of the `User` model with the provided
      name,
      email,
      password: hashedPassword,
    });

    await user.save(); // The `await` keyword is used here to wait for the asynchronous operation of saving the user to the database to complete before proceeding. This ensures that the user is successfully saved before sending a response back to the client.

    res.status(201).json({
      message: "User Registered Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const loginUser = async (req, res) => {

  try { // why try-catch? Because database operations, bcrypt hashing, and other asynchronous operations can fail. The try-catch block helps handle those errors and send a meaningful HTTP response to the client instead of crashing the server.

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password); // The `await` keyword is used here to wait for the asynchronous operation of comparing the provided password with the hashed password stored in the database to complete before proceeding. This ensures that the password comparison is done before sending a response back to the client.

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign( // .sign() method is used to create a new JSON Web Token (JWT). It takes three arguments: the payload (in this case, an object containing the user's ID), a secret key (used to sign the token and verify its authenticity), and an optional options object (not used here). The generated token can be sent back to the client and used for subsequent authenticated requests.
    {
        id: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10s"
    }
  );

    return res.status(200).json({
      message: "Login Successful",
      token  // or u can write  token: token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  registerUser,
  loginUser,
};

// Controller ke andar database operations, bcrypt hashing aur doosre asynchronous operations fail ho sakte hain.
// try-catch un errors ko handle karta hai aur server crash hone ke bajay client ko meaningful HTTP response bhejne mein help karta hai.