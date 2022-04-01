const express = require('express');
const moment = require('moment');

const route = express.Router();
const getUserData = require("../helpers/getUserData");
const getTrip = require("../helpers/getTrip");
const { getAllTrips, getLastTrip } = require("../helpers/getTrip");
const { checkTransferVAlid, transferValid, newTrip, newTransacton } = require("../helpers/writeTrip");
const checkBalance = require('../helpers/checkBalance');


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
    // curl -d "tagID=10001&station=???&vehicle=???&fareCost=????" -X POST http://localhost:3000/trip/newtrip
    // userID, station, vehicle, travelDate, startTime, trasnferEndTime, fareCost, hasTranser
    // DATE FORMATTING 

    let data = req.body;
    console.log(data);
    let tagID = data.tagID, station = data.station, vehicle = data.vehicle, fareCost = data.fareCost;
    // if has latest trip
    let lastTrip = await getTrip.getLastTrip(tagID);
    if (lastTrip) {
        // has a last trip
        let now = new Date();
        let trasnferEndTime = new Date(lastTrip[0].transferEndTime);
        trasnferEndTime.setHours(trasnferEndTime.getHours() + 30); ///// TEMP!!!!!

        console.log("now: ", now, " --- endtime: ", trasnferEndTime);
        if (now < trasnferEndTime) {
            //transfer is valid, no charge
            console.log("Transfer is valid");
            res.send("Transfer valid");
            return;

        } else {
            console.log("Transfer not valid");
        }
    }
    //check balance
    fareCost = 3; // TEMP !!!!!!!
    console.log("after it");
    let sufficentBalance = await checkBalance(tagID, fareCost);
    console.log(sufficentBalance);






    res.status(200).send("posted newtrip");
});



module.exports = route;