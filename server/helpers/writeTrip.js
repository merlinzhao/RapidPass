const connection = require("../DB/Connection");


module.exports = {
    async transferValid() {
        let query = "INSERT INTO TRIP_DATA"
        let values = [];
        await connection(query, values);
    },

    async newTrip() {
        let query = "INSERT INTO TRIP_DATA"
        let values = [];
        await connection(query, values);

    },

    async newTransacton() {
        let query = "INSERT INTO TRIP_DATA"
        let values = [];
        await connection(query, values);

    }

}