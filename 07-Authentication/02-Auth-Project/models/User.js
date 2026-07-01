const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String, // The `type: String` option specifies that the `email` field should be of type string. This means that when creating a new user document, the value provided for the `email` field must be a string. If a non-string value is provided, Mongoose will throw a validation error.
        required: true, // The `required: true` option ensures that the email field must be provided when creating a new user document. If this field is missing, Mongoose will throw a validation error.
        unique: true // The `unique: true` option ensures that the email field must be unique across all user documents in the collection. This means that no two users can have the same email address. If you try to create a new user with an email that already exists in the database, Mongoose will throw a validation error.
    },

    password: {
        type: String,
        required: true 
    },

    role: {
    type: String,
    enum: ["user", "admin"], // The `enum: ["user", "admin"]` option restricts the values of the `role` field to either "user" or "admin". This means that when creating or updating a user document, the value provided for the `role` field must be one of these two options. If a value outside of this set is provided, Mongoose will throw a validation error.
    default: "user" // The `default: "user"` option sets the default value of the `role` field to "user" if no value is provided when creating a new user document. This means that if you create a new user without specifying a role, Mongoose will automatically assign the role as "user".
    }

});

module.exports = mongoose.model("User", userSchema); // The `mongoose.model("User", userSchema)` function creates a Mongoose model named "User" based on the defined `userSchema`. This model represents the "users" collection in the MongoDB database and provides an interface for interacting with user documents, such as creating, reading, updating, and deleting users. By exporting this model, it can be imported and used in other parts of the application to perform database operations related to users.