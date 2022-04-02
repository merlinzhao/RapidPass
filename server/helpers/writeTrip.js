const connection = require("../DB/Connection");


module.exports = {
    async checkTransferVAlid() {

    },
    // async transferValid() {
    //     let query = "INSERT INTO TRIP_DATA"
    //     let values = [];
    //     await connection(query, values);
    // },

    async newTrip(tagID, station, startTime, vehicle, transferEndTime, fareCost) {
        let query = "INSERT INTO TRIP_DATA (tagID, station, startTime, vehicle, transferEndTime, fareCost) VALUES (?)"
        let values = [tagID, station, startTime, vehicle, transferEndTime, fareCost];
        await connection(query, [values]);
        return;
    }

    // async newTransacton() {
    //     let query = "INSERT INTO TRIP_DATA"
    //     let values = [];
    //     await connection(query, values);

    // }

}