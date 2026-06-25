const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Backend_Journey") // Connect to the MongoDB database using the specified connection string
  .then(() => {    // Handle the successful connection
    console.log("MongoDB Connected Successfully"); 
  })
  .catch((err) => {
    console.log("Connection Error"); // Log a message indicating the connection failed
    console.log(err); // Log the error for debugging purposes
  });

// Schema
const userSchema = new mongoose.Schema({ 
  name: String, // Define the 'name' field as a String
  age: Number, 
  course: String
});
console.log("Schema Created");

const User = mongoose.model("User", userSchema); // Create a Mongoose model named 'User' based on the defined schema
console.log("Model Created");

/*const user1 = new User({
  name: "Somya",
  age: 19,
  course: "Backend"
});

user1      // Very Important: The 'save' method is used to save the document to the database. It returns a promise that resolves when the document is successfully saved and rejects if there is an error.
  .save()
  .then(() => {
    console.log("User Saved Successfully");
  })
  .catch((err) => {
    console.log(err);
  });*/

/*User.find({ name: "Somya"})  // Returns an #Array of Documents
  .then((users) => { 
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });*/
// agar isme name and course vagerha ke filter lagagoge jaise abhi laga hua hai toh vahi vale print honge console main varna kuch nahi likho brackert main toh pura database print ho jaega

/*User.findOne({ name: "Somya" }) // Returns a #Single Document which is the first match found in the database
.then((user)=>{
    console.log(user);
})
.catch((err)=>{
    console.log(err);
});*/
// why findOne executes first then find ?The reason `findOne` might appear to execute before `find` in your code is due to the asynchronous nature of JavaScript and how promises work. Both `User.find()` and `User.findOne()` return promises, and they are executed asynchronously.

/*User.findOneAndUpdate(             // Find a single document and update it
  { name: "Somya" },              // Which document?
  {                              // What to change?
    age: 21,
    course: "AI"
  },
  { new: true }                 // option Parameter: By default, `findOneAndUpdate` returns the original document before the update. If you want to get the updated document instead, you can set the `new` option to `true`. This way, the promise will resolve with the updated document after the changes have been applied.
)
.then((user) => {
  console.log("Updated Successfully");
  console.log(user);  // By default it returns the old document
})
.catch((err) => {
  console.log(err);
});*/

/*User.findOneAndDelete(
  {
    name: "Aman"
  }
)
.then((user) => {
  console.log("User Deleted Successfully");
  console.log(user);  //It returns the deleted document. If no matching document exists, it returns null.
})
.catch((err) => {
  console.log(err);
});*/

/*User.findById(
    "6a392a00ab21a567962fa0f8"
)
.then((user)=>{
    console.log(user);
})
.catch((err)=>{
    console.log(err);
});*/

User.findByIdAndUpdate( // Similar for findByIdAndDelete
    "6a392a00ab21a567962fa0f8",
    {
        course: "Figma Designer"
    },
    {
        new: true
    }
)
.then((user)=>{
    console.log(user); 
})
.catch((err)=>{
    console.log(err);
});

