var http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

/*
http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello</h1>")

}).listen(`${PORT}`)

*/
app.get('', function (req, res) {

    const data = {
        message: "this is a message",
        time: new Date().toISOString()
    }

    console.log("GET Request Recieved")
    res.json(data.message + " " + data.time)

})

app.get('/:id', function (req, res) {
    console.log("GET Request Recieved with id")
    res.json({ message: "GET Request with ID: " + `${req.params.id}` })
})

app.listen(`${PORT}`) 