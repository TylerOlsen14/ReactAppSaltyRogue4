// app.js
const express = require('express');
const bodyParser = require('body-parser');

//import the necessary routes
const product = require('./routes/product.route');//initialize express app
const app = express()

let port = 1234

app.listen(port, () => {
    console.log('Server is up and running on port# ' + port);
})