const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({ extended: false }));
app.get('/', async (req, res) => {
    res.status(200).send({ message: "Rapid Pass API" });
});

// app.use('/API', require('./API/Upload'));
// app.use('/API', require('./API/Report'));
app.listen(PORT, () => console.log("index.js is up and running!"));
