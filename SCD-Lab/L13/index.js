const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
app.use(express.json());


//Connecting to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/scd-db')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error Occured', err))

//Creating a Schema for User
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("user", userSchema);


app.get('/allUser', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    }
    catch (err) {
        res.status(400).send('Invalid Request')
    }
})


app.get('/user/:id', async (req, res) => {
    const userId = req.params.id
    try {
        const user = await User.findById(userId)
        res.json(user)
    }
    catch (err) {
        res.status(400).send('Invalid Request')
    }
})


app.post("/addUser", async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(400).send("Invalid Request");
    }
})


app.put('/updateUser/:id', async (req, res) => {
    const userId = req.params.id
    const updateUser = req.body
    try {
        await User.findByIdAndUpdate(userId, updateUser)
        res.json({ message: `User ${userId} updated` })
    }
    catch (err) {
        res.status(400).send("Invalid Request");
    }
})


app.patch('/patchUser/:id', async (req, res) => {
    const userId = req.params.id
    const updateUser = req.body
    try {
        await User.findByIdAndUpdate(userId, updateUser)
        res.json({ message: `User ${userId} updated` })
    }
    catch (err) {
        res.status(400).send("Invalid Request");
    }
})


app.delete('/deleteUser/:id', async (req, res) => {
    const userId = req.params.id
    try {
        await User.findByIdAndDelete(userId)
        res.json({ message: `User ${userId} deleted` })
    }
    catch (err) {
        res.status(400).send("Invalid Request");
    }
})


app.listen(`${PORT}`)


/*
Add User Body
    {
    "firstName": "Hello",
    "lastName": "World",
    "email": "hello@world.com",
    "gender": "Male"
    }

Update User Body
    {
    "firstName": "Hello",
    "lastName": "World",
    "email": "hello@world.com",
    "gender": "Male"
    }

Patch User Body
    {
    "firstName": "Hello",
    "lastName": "World"
    }
*/