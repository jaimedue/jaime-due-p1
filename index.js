const express = require('express');
const apiRoutes = require("./api-routes");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 5000;

//initialize app
const app = express();

//connect database
connectDatabase();

//config body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//use api routes
app.use('/api', apiRoutes)

app.get('/', (req, res) =>
    res.send('hellooooo')
);

app.listen(port, () => console.log (`Express server running on port ${port}`));