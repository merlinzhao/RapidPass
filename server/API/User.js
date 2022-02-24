
const express = require('express');
const moment = require('moment');
const route = express.Router();
const getUserData = require("../helpers/getUserData");

route.get('/email/:email', async (req, res) => {
    // returns all user information inclduing the balance on the account
    console.log(req.params.email)
    let data = await getUserData.getByEmail(req.params.email);
    res.status(200).send(data[0]);
});

route.get('/tag/:tagId', async (req, res) => {
    let data = await getUserData.getByTag(req.params.tagId);
    res.status(200).send(data[0]);
});
module.exports = route;