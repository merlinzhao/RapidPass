
const express = require('express');
const moment = require('moment');
const route = express.Router();
const getUserData = require("../helpers/getUserData");
const writeBalance = require("../helpers/writeBalance");


route.get('/email/:email', async (req, res) => {
    // returns all user information inclduing the balance on the account
    console.log(req.params.email)
    let data = await getUserData.getByEmail(req.params.email);
    res.status(200).send(data[0]);
});

route.get('/tag/:tagId', async (req, res) => {
    // http://localhost:3000/user/tag/10001
    let data = await getUserData.getByTag(req.params.tagId);
    console.log(data)
    res.status(200).send(data[0]);
});


route.get('/balanceByTag/:tagId', async (req, res) => {
    // http://localhost:3000/user/balanceByTag/10001
    let data = await getUserData.getByTag(req.params.tagId);
    console.log(data[0].balance)
    let balance = data[0].balance
    const userID = data[0].userID
    let result = false
    if (balance > 3) {
        balance = balance - 3;
        console.log("has suficent balance: $", balance)
        // await writeBalance.updateBalance(userID, balance)
        result = true
    } else {
        console.log("ALERT: nsuficent balance: $", balance)
    }
    res.status(200).send(result);
});
module.exports = route;