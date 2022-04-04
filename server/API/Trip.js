const express = require('express');
const moment = require('moment');

const route = express.Router();
const getUserData = require("../helpers/getUserData");
const getTrip = require("../helpers/getTrip");
const { getAllTrips, getLastTrip } = require("../helpers/getTrip");
const { newTrip } = require("../helpers/writeTrip");
const checkBalance = require('../helpers/checkBalance');
const { updateBalance } = require('../helpers/writeBalance')


route.get('/all/:tagID', async (req, res) => {
    // will return object with a trip information, including if the transfer is valid
    // http://localhost:3000/trip/all/10001

    let data = await getAllTrips(req.params.tagID);
    console.log("get all trips", data);
    res.status(200).send(data);
});

route.get('/latest/:tagID', async (req, res) => {
    let data = await getLastTrip(req.params.tagID);
    res.status(200).send(data[0]);
});

route.post('/newtrip', async (req, res) => {
    // curl -d "tagID=10001&station=test_station&vehicle=test_bus&fareCost=3" -X POST http://localhost:3000/trip/newtrip
    // curl -d "tagID=10001&station=test_station&vehicle=test_bus&fareCost=3" -X POST https://rapidpass-express.herokuapp.com/trip/newtrip
    // userID, station, vehicle, travelDate, travelTime, trasnferEndTime, fareCost, hasTranser
    // DATE FORMATTING 

    let data = req.body;
    console.log(data);
    let tagID = data.tagID, station = data.station, vehicle = data.vehicle, fareCost = data.fareCost;
    // if has latest trip
    let lastTrip = await getTrip.getLastTrip(tagID);
    let result = {}
    let now = new Date();
    console.log("\n\n");
    console.log("*" + lastTrip + "*");
    if (lastTrip != "") {
        console.log("found previous trip");
        // has a last trip
        let transferEndTime = new Date(lastTrip[0].transferEndTime);
        // trasnferEndTime.setHours(trasnferEndTime.getHours() + 50); ///// TEMP!!!!!

        console.log("now: ", now, " --- endtime: ", transferEndTime);
        if (now < transferEndTime) {
            //transfer is valid, no charge
            console.log("Transfer is valid");
            await newTrip(tagID, station, now, vehicle, transferEndTime, 0);
            res.send({ 'okay': true, 'balance': -1, 'fare': -1, 'transfer': true });
            return;

        } else {
            console.log("Transfer not valid");
        }
    }
    //check balance
    let sufficentBalance = await checkBalance(tagID, fareCost);
    console.log(sufficentBalance.okay, sufficentBalance.balance);
    if (sufficentBalance.okay) {
        now = new Date();
        let newTransfer = new Date();
        newTransfer.setMinutes(newTransfer.getMinutes() + 10);

        console.log(now, newTransfer);
        let newBalance = sufficentBalance.balance - fareCost;
        await updateBalance(tagID, newBalance);
        await newTrip(tagID, station, now, vehicle, newTransfer, fareCost);

        result = { 'okay': true, 'balance': sufficentBalance.balance, 'fare': fareCost, 'transfer': false };
    } else {
        result = { 'okay': false, 'balance': -1, 'fare': -1, 'transfer': false };
    }
    res.status(200).send(result);
});

module.exports = route;
