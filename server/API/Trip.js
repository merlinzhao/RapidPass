const express = require('express');
const moment = require('moment');

const route = express.Router();
const { getAllTrips, getLastTrip } = require("../helpers/getTrip");
const { transferValid, newTrip, newTransacton } = require("../helpers/writeTrip");


route.get('/all/:userID', async (req, res) => {
    // will return object with a trip information, including if the transfer is valid
    console.log("get all trips");
    let data = await getAllTrips(req.params.userID);
    res.status(200).send(data[0]);
});

route.get('/latest/:userID', async (req, res) => {
    let data = await getLastTrip(req.params.userID);
    res.status(200).send(data[0]);
});

route.post('/newtrip', async (req, res) => {
    //curl -d "username=scott&password=secret&website=stackabuse.com" -X POST http://localhost:3000/trip/newtrip

    let data = req.body;
    console.log(data);
    //check latest trip with userID -> find if transferEdntimePass
    // let transferValid;

    // if (transferValid) {
    //     await transferValid();
    // } else {
    //     // need to charge, new transfer time
    //     await newTrip();
    // };
    // // get fareCost
    // await newTransacton;
    res.status(200).send("posted newtrip");
});

module.exports = route;