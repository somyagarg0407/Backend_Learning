const express = require("express");

const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Panda" }
];

app.get("/users", (req, res) => {

    res.status(200).json({
        success: true,
        users: users
    });

});

app.post("/users", (req, res) => {

    const newUser = {

        id: users.length + 1,
        name: req.body.name

    };

    users.push(newUser);

    res.status(201).json({

        success: true,
        message: "User Added Successfully",
        user: newUser

    });

});

app.put("/users/:id", (req, res) => { // Update User

    const id = Number(req.params.id); // Convert id to number, here number is used because the id in the users array is a number.

    const user = users.find(user => user.id === id); // Find user by id

    if (!user) {  // If user doesn't exist, stop execution and return 404
        
        return res.status(404).json({ //# why retuen? because we want to stop the execution of the function if user is not found, so that we don't try to update a user that doesn't exist.

            success: false,
            message: "User Not Found"

        });

    }

    user.name = req.body.name; // Update user name

    res.status(200).json({

        success: true,
        message: "User Updated Successfully",
        user // what is this user? this is the updated user object that we are sending back in the response.

    });

});

app.delete("/users/:id", (req, res) => { // Delete User

    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id); // why index? because we need to find the index of the user in the array so that we can remove it using splice method.

    if (index === -1) { 

        return res.status(404).json({

            success: false,
            message: "User Not Found"

        });

    }

    users.splice(index, 1); // Remove user from array , why write index as word not as number? because index is a variable that holds the index of the user in the array. , then what is one? one is the number of elements to remove from the array, in this case we want to remove only one user.

    res.status(200).json({ // yeh response toh har baar important hai, kyunki yeh bata raha hai ki user delete ho gaya hai ya nahi.

        success: true,
        message: "User Deleted Successfully"

    });

});

app.listen(3000, () => {

    console.log("CRUD API Running...");

});