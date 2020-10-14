const express = require('express')

//initialize app
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>
    res.send('hello')
);

app.listen(port, () => console.log (`Express server running on port ${port}`));