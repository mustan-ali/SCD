const express = require('express');
const app = express();
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
            return res.json({ message: `User Deleted with id ${userId}` });
        })
    }
    else {
        return res.json({ message: `User not found with id ${userId}` });
    }
})

app.listen(`${PORT}`)


/*
// Request Body for POST
    {
        "first_name": "John",
        "last_name": "Cena",
        "email": "mziemeckirr@slashdot.org",
        "gender": "Male"
    }

// Request Body for PUT
    {
        "first_name": "Hello",
        "last_name": "World",
        "email": "hello@world.org",
        "gender": "Male"
    }
    
// Request Body for PATCH
    {
        "first_name": "Tom",
        "last_name": "Jerry"
    }        
*/