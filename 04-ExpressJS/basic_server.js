const express = require("express");

const app = express(); // Express function ek app object return karta hai.

app.get("/", (req, res) => { // If a GET request comes on "/" run this function
    res.send("Welcome Panda"); // can use html also here like this
});

app.get("/html", (req, res) => { // If a GET request comes on "/" run this function
    res.send("<h1>Welcome Panda</h1>"); // can use html also here like this
});

app.get("/about", (req, res) => { // If a GET request comes on "/" run this function
    res.send("About page");
});

app.get("/contact", (req, res) => { // If a GET request comes on "/" run this function
    res.send("Contact Page");
});

app.get("/object", (req, res) => { // If a GET request comes on "/" run this function
   res.send({ // {} inka dhyan rakho isme 
    name: "Panda",
    role: "Backend Learner"
});
});


console.log("END OF FILE"); // ye pehle print hoga server started jo likha aayege usse pehele 

//------------------------------------------------------------------------------------

app.get("/user/:id/product/:productId", (req, res) => {
    console.log(req.params); // ye likha jiss jo output aa rha hai server par vo terminal main print horta rhe isliye
    res.send(req.params); // if you want specific paramaeter then write req.params.id like this for id only
});

//-------------------------------------------------------------------------------

app.get("/student", (req, res) => { // for this run http://localhost:5000/student?name=Panda&course=Backend on browser pls remeber the syntax here 
    const name = req.query.name;
    const course = req.query.course;
    res.send(`Student name : ${name} , Course : ${course}`);
    console.log(req.query);
});


app.listen(5000, () => {   // Server start karne ka process initiate karta hai, callback future ke liye register hota hai.
console.log("Server Started");
});









