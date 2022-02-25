const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.get('/', async (req, res) => {
    res.status(200).send({ message: "Rapid Pass API" });
});

// app.use('/API', require('./API/Upload'));
app.use('/user', require('./API/User'));
app.listen(process.env.PORT || 3000, () => console.log("index.js is up and running!"));
