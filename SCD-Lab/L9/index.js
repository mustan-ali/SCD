const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs')
const users = require('./MOCK_DATA.json')

app.use(express.json());

app.get('/', function (req, res) {
    res.end('Hello')
})


app.get('/allUsers', function (req, res) {
    res.json(users)
})


app.get('/user/:id', function (req, res) {
    const id = Number(req.params.id)
    const foundUser = users.find(u => u.id == id)
    res.json(foundUser)
})


app.post('/addUser', (req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body })

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return res.json({ message: "Error Occured while adding user" })
        }
        return res.json({ message: "User Added Successfully" })
    });

});


app.listen(`${PORT}`) 

/*
// Request Body for POST
    {
        "first_name": "John",
        "last_name": "Cena",
        "email": "mziemeckirr@slashdot.org",
        "gender": "Male"
    }
*/