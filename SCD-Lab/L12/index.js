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


app.listen(`${PORT}`)