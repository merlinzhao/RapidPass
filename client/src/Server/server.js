const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

//listening to login route
app.use('/login', (req, res) => { res.send({token: 'test123'});});

//run express (app object) server on port 8080
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

/*
app.get('/', (req, res) => {
    res.json({
        message: 'Hello Word'
    });
});

app.get('/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}`
    });
});

*/