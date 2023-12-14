const express = require('express');
const app = express();
const fs = require('fs')
const users = require('./MOCK_DATA.json');
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
        required: true
    },
    lastName: {
        type: String,
        reqiuired: true
    },
    email: {
        type: String,
        reqiuired: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    }
})

//Creating a Model for User Schema
const User = mongoose.model('user', userSchema)


app.get('/', (req, res) => {
    res.end('Hello')
})


app.get('/allUsers', (req, res) => {
    res.json(users)
})


app.get('/user/:id', (req, res) => {
    let id = Number(req.params.id)
    let foundUser = users.find(u => u.id == id)
    res.json(foundUser)
})


app.post('/addUser', (req, res) => {

    const body = req.body;
    users.push({ id: users.length + 1, ...body });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return res.status(500).json({ mesage: "Error Occured" });
        }
        return res.json({ mesage: "Added User" });
    });
});


app.put('/updateUser/:id', (req, res) => {
    const userId = Number(req.params.id)
    const updateUser = req.body

    const index = users.findIndex((user) => user.id === userId)

    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured" });
            }
            return res.status(200).json({ mesage: "User Updated" });
        })
    }
    else {
        return res.json({ message: `"User not found with id ${userId}"` })
    }

})


app.patch('/patchedUser/:id', (req, res) => {
    const userId = Number(req.params.id)
    const updateUser = req.body

    const index = users.findIndex((user) => user.id === userId)

    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured" });
            }
            return res.status(200).json({ mesage: "User Updated" });
        })
    }
    else {
        return res.json({ message: `"User not found with id ${userId}"` })
    }

})


app.delete('/delete/:id', (req, res) => {
    const userId = Number(req.params.id)
    const index = users.findIndex((user) => user.id === userId)

    if (index !== -1) {
        users.splice(index, 1)

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ mesage: "Error Occured" });
            }
            return res.json({ message: `"User Deleted with id ${userId}"` })
        })
    }
    else {
        return res.json({ message: `"User not found with id ${userId}"` })
    }
})


app.listen(`${PORT}`)