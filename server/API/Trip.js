const express = require('express');
const moment = require('moment');
const { getLastTrip } = require('../helpers/getTrip');
const route = express.Router();
const { getAllTrips, getLastTrip } = require("../helpers/getTrip");
const { transferValid, newTrip, newTransacton } = require("../helpers/writeTrip");


route.get('trips/:userID', async (req, res) => {
    // will return object with a trip information, including if the transfer is valid
    let data = await getAllTrips(req.params.userID);
    res.status(200).send(data[0]);
});

route.get('trips/latest/:userID', async (req, res) => {
    let data = await getLastTrip(req.params.userID);
    res.status(200).send(data[0]);
});

route.post('trips/newtrip', async (req, res) => {
    let data = req.body;
    //check latest trip with userID -> find if transferEdntimePass
    let transferValid;

    if (transferValid) {
        await transferValid();
    } else {
        // need to charge, new transfer time
        await newTrip();
    };
    // get fareCost
    await newTransacton;
});

