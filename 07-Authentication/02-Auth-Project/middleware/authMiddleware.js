const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Ye line request ke header se "Authorization" field ko extract kar rahi hai. Aksar "Authorization" header me token ko "Bearer <token>" format me bheja jata hai.

  if (!authHeader) {
    return res.status(401).json({
      message: "Access Denied, No Token Provided.",
    });
  }

  const token = authHeader.split(" ")[1]; // Authorization header me token "Bearer <token>" format me hota hai, isliye hum split(" ")[1] ka use karke sirf token ko nikal rahe hain. Ye token user ke authentication state ko represent karta hai aur isse verify karke hum ye check kar sakte hain ki user authenticated hai ya nahi.

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ye line token ko verify kar rahi hai using the secret key. Agar token valid hai, to ye decoded payload return karega, jisme user ki information hoti hai. Agar token invalid hai, to ye error throw karega.

    //console.log(decoded); // Expected console output: { id: '64a7f8c2e4b0f5a1c2d3e4f5', iat: 1691234567 } -> iat (Issued At) automatically JWT ke dwara add kiya jata hai aur ye batata hai ki token kab generate hua tha.

    req.user = decoded; // Ye line request object me user ki information ko attach kar rahi hai, jisse agle middleware ya route handler me access kiya ja sake. Isse hum ye jaan sakte hain ki kaun sa user request kar raha hai aur uske role ke hisaab se access control implement kar sakte hain.
    
    next(); // Ye next() function call karna zaruri hai warna request chain ruk jaayegi aur agla middleware ya route handler execute nahi hoga.
  
} catch (error) {
    console.log(error.name);

    if (error.name === "TokenExpiredError") {

        return res.status(401).json({
            message: "Token Expired"
        });

    }

    return res.status(401).json({
        message: "Invalid Token"
    });
  }
};

module.exports = authMiddleware; // Export the authentication middleware so it can be used in other files.
