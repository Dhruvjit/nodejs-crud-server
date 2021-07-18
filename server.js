const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./server/database/connection');
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();

// import variables from config file
dotenv.config({
    path: 'config.env'
})

// parse request to body parser (x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// routes for apis
app.use('/', require('./server/routes/router'));

// mongoDB connect
connectDB();

app.listen(3000, () => {
    console.log('listening on 3000');
})

